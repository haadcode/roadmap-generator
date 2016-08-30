'use strict'

const _ = require('lodash')
const moment = require('moment')
require('moment-range')
const GitHub = require('octocat')
const Logger = require('logplease')
const logger = Logger.create("roadmap-generator", { color: Logger.Colors.Green })
require('logplease').setLogLevel('ERROR')

// Projects configuration
const conf = require('./projects')
const projects = conf.projects
const organization = conf.organization
const milestonesStartDate = conf.milestonesStartDate
const milestonesEndDate = conf.milestonesEndDate

// Visuals configuration
const symbols = {
  done: '✔', // or ✅
  notDone: '❌',
  open: '🚀', // or 🔔
  closed: '⭐',
  progress: '📉',
  date: '📅',
}

// Github token
const token = process.env.GITHUB_TOKEN || process.argv[2]
if(!token) {
  console.error("Error: GITHUB_TOKEN not defined!")
  console.error("Please use environment variable 'GITHUB_TOKEN' to provide a token or run roadmap-generator with")
  console.error("roadmap-generator <github api token>")
  process.exit(1)
}

// Should we generate a list goals for each milestone
const detailedRoadmap = !(process.argv[process.argv.length-1] === 'false')
const includeMilestoneSummary = !(process.argv[process.argv.length-2] === 'false')

const client = new GitHub({ token: token })

const nameToAnchor = (name) => name.split(' ').join('-').toLowerCase()

function generateMilestonesListForProject(client, project) {
  logger.log(`Generate milestones list for ${project.name}`)
  let res = _.cloneDeep(project)
  return Promise.all(project.repos.map((repo) => {
    logger.log(`    Get milestones from ${repo}`)
    return client.get('/repos/' + repo + '/milestones', {
      state: 'all',
      sort: 'due_on',
      direction: 'asc'
    })
    .then((res) => res.body)
  }))
  .then((results) => {
    let milestones = {}
    // Sort milestones: open ones first (next due date fist), then closed milestones
    let sorted = _.uniq(_.flatten(results))
    sorted = _.orderBy(sorted, ["state", "due_on"], ["desc", "asc"])

    sorted.forEach((e) => {
      // Filter out milestones that are not within given date range
      const startDate = moment.utc(milestonesStartDate)
      const endDate = moment.utc(milestonesEndDate)
      const range = moment.range(startDate, endDate)
      const due = moment.utc(e.due_on)
      if(due.within(range)) {
        milestones[e.title] = {
          title: e.title,
          description: e.description,
          due_on: e.due_on,
          html_url: e.html_url,
          state: e.state,
          issues: [],
        }
      }
    })
    return milestones
  })
  .then((milestones) => {
    res.milestones = milestones
    return res
  })
}

function getAllMilestoneIssues(client, project) {
  logger.log(`Generate issues list for ${project.name}`)
  let result = _.cloneDeep(project)
  return Promise.all(project.repos.map((repo) => {
    logger.log(`    Get issues from ${repo}`)
    return client.get('/repos/' + repo + '/issues', { state: 'all', per_page: '20000' })
      .then((res) => {
        const issues = res.body
        logger.log(`    Found ${issues.length} issues in ${repo}`)
        return { repo: repo, issues: issues }
      })
  }))
  .then((res) => {
    res.forEach((repo) => {
      repo.issues.forEach((e) => {
        if(e.milestone) {
          const milestone = result.milestones[e.milestone.title]
          if(milestone) {
            milestone.issues.push({
              title: e.title,
              repo: repo.repo,
              html_url: e.html_url,
              repository_url: e.repository_url,
              state: e.state,
              labels: e.labels
            })
          }
        }
      })
    })
    return result
  })
}

function generateMilestonesSummary(project) {
  let str = `#### Milestone Summary\n\n`
  str += `| Status | Milestone | Goals | ETA |\n`
  str += `| :---: | :--- | :---: | :---: |\n`

  str += Object.keys(project.milestones).map((k, i) => {
    const m = project.milestones[k]
    let milestone = ''
    milestone += `| ${(m.state === 'open' ? symbols.open : symbols.closed)}`
    milestone += `| **[${m.title}](#${nameToAnchor(m.title)})**`
    milestone += `| ${m.closed_issues} / ${m.total_issues}`
    milestone += `| ${new Date(m.due_on).toDateString()}`
    milestone += `|\n`
    return milestone
  }).join('')
  str += '\n'

  return str
}

function dataToMarkdown(projects, options) {
  let opts = options || { listGoalsPerMilestone: false, displayProjectName: true }

  const res = projects.map((project) => {
    let str = opts.displayProjectName ? `## ${project.name}\n\n` : ''

    // Status section
    if (project.links && project.links.status)
      str += project.links.status

    // Milestone summary
    if (opts.includeMilestoneSummary) {
      str += generateMilestonesSummary(project)
    }

    // Milestones header
    if (!opts.displayProjectName)
      str += "### Milestones and Goals\n\n"

    // Milestones for the project
    str += Object.keys(project.milestones).map((k, i) => {
      let m = project.milestones[k]
      const progressPercentage = Math.floor((m.closed_issues / (Math.max(m.closed_issues + m.open_issues, 1))) * 100)
      const t = m.html_url.split('/')
      t.pop()
      t.pop()

      let milestone = `#### ${m.title}\n\n`
      milestone += `> ${m.description}\n\n`

      milestone += (m.state === 'open' ? symbols.open : symbols.closed) + ` &nbsp;**${m.state.toUpperCase()}** &nbsp;&nbsp;`
      milestone += `${symbols.progress} &nbsp;&nbsp;**${m.closed_issues} / ${m.total_issues}** goals completed **(${progressPercentage}%)** &nbsp;&nbsp;`
      milestone += `${symbols.date} &nbsp;&nbsp;**${new Date(m.due_on).toDateString()}**\n\n`

      if(opts.listGoalsPerMilestone) {
        milestone += `| Status | Goal | Labels | Repository |\n`
        milestone += `| :---: | :--- | --- | --- |\n`
        milestone += m.issues.map((issue, idx) => {
          let text = `| ${issue.state === 'open' ? symbols.notDone : symbols.done} `
          text += `| [${issue.title}](${issue.html_url}) `
          text += issue.labels.length > 0 ? `|` + issue.labels.map((label) => `\`${label.name}\``).join(', ') : "| "
          text += `| <a href=https://github.com/${issue.repo}>${issue.repo}</a> |\n`
          return text
        }).join('') + '\n'
      }

      milestone += `\n`
      return milestone
    }).join('')

    return str
  })
  return res.join('')
}

function generateMilestoneProgress(project) {
  let res = _.cloneDeep(project);
  res.milestones = Object.keys(project.milestones).map((k) => {
    let ms = _.cloneDeep(project.milestones[k])
    let total = ms.issues.length
    let open = ms.issues.filter((b) => b.state === 'open').length
    let closed = ms.issues.filter((b) => b.state !== 'open').length
    ms.open_issues = open
    ms.total_issues = total
    ms.closed_issues = closed
    return ms
  })
  return res
}

function generateTableOfContents(projects) {
  let res = ''
  res += projects.map((e, i) => {
    let str = `${i + 1}. [${e.name}](${nameToAnchor(e.name)})\n`
    str += e.milestones
      ? Object.keys(e.milestones).map((k) => {
        const m = e.milestones[k]
        return `  - [${m.title}](${nameToAnchor(m.title)})\n`
      }).join('')
      : ''

    return str
  }).join('')

  return res
}

Promise.all(projects.map((project, i) => generateMilestonesListForProject(client, project)))
  .then((res) => Promise.all(res.map((e) => getAllMilestoneIssues(client, e))))
  .then((projectsWithIssues) => projectsWithIssues.map((project) => generateMilestoneProgress(project)))
  .then((final) => {
    /* FINAL OUTPUT */
    console.log(`# ${organization} - Roadmap`)
    console.log("")
    console.log(`This document describes the current status and the upcoming milestones of the ${organization} project.`)
    console.log("")
    console.log(`*Updated: ${new Date().toUTCString()}*`)
    console.log("")

    // console.log("## Table of Contents\n")
    // console.log(generateTableOfContents(projectsWithIssues))

    // console.log("## Projects")
    // console.log("")
    // final.forEach((project) => console.log(`- [${project.name}](#${project.name})`))
    // console.log("")

    const output = dataToMarkdown(final, {
      listGoalsPerMilestone: detailedRoadmap,
      displayProjectName: projects.length > 1,
      includeMilestoneSummary: includeMilestoneSummary
    })
    console.log(output)
  })
  .catch((e) => console.error(e))
