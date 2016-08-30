'use strict'

const _ = require('lodash')
const GitHub = require('octocat')
const Logger = require('logplease')
const logger = Logger.create("roadmap-generator", { color: Logger.Colors.Green })
require('logplease').setLogLevel('ERROR')

// Github token
const token = process.env.GITHUB_TOKEN || process.argv[2]
if(!token) {
  console.error("Error: GITHUB_TOKEN not define!")
  console.error("Please use environment variable 'GITHUB_TOKEN' to provide a token or run roadmap-generator with")
  console.error("roadmap-generator <github api token>")
  process.exit(1)
}

// Project configuration
const projects = require('./projects')

const client = new GitHub({ token: token })

function generateMilestonesListForProject(client, project) {
  logger.log(`Generate milestones list for ${project.name}`)
  let res = _.cloneDeep(project)
  return Promise.all(project.repos.map((repo) => {
    logger.log(`    Get milestones from ${repo}`)
    return client.get('/repos/' + repo + '/milestones', { state: 'open' })
      .then((res) => {
        return res.body.map((e) => e)
      })
  }))
  .then((results) => {
    let milestones = {}
    _.uniq(_.flatten(results)).forEach((e) => {
      milestones[e.title] = {
        title: e.title,
        description: e.description,
        due_on: e.due_on,
        html_url: e.html_url,
        issues: [],
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
    return client.get('/repos/' + repo + '/issues', { state: 'all', per_page: '2000' })
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

function dataToMarkdown(projects, options) {
  let opts = options || { listGoalsPerMilestone: false }

  const res = projects.map((e) => {
    let str = `### ${e.name}\n\n`
    str += Object.keys(e.milestones).map((k, i) => {
      let m = e.milestones[k]
      const progressPercentage = Math.floor((m.closed_issues / (Math.max(m.closed_issues + m.open_issues, 1))) * 100)
      const t = m.html_url.split('/')
      t.pop()
      t.pop()
      // let status = `[Status](${t.join('/') + "/issues?q=milestone" + encodeURI(":\"" + m.title + "\"")})`
      let milestone = `#### ${i + 1}. ${m.title}\n\n`
      milestone += `> ${m.description}\n\n`

      milestone += `📉 &nbsp;&nbsp;**${m.closed_issues} / ${m.total_issues}** goals completed **(${progressPercentage}%)** &nbsp;&nbsp;`
      milestone += `📅 &nbsp;&nbsp;**${new Date(m.due_on).toDateString()}**\n\n`

      if(opts.listGoalsPerMilestone) {
        milestone += `| Status | Goal | Labels | Repository |\n`
        milestone += `| :---: | :--- | --- | --- |\n`
        milestone += m.issues.map((issue, idx) => {
          let text = `| ${issue.state === 'open' ? '❌ ' : '✅ '}`
          text += `| [${issue.title}](${issue.html_url}) `
          text += issue.labels.length > 0 ? `|` + issue.labels.map((label) => `\`${label.name}\``).join(', ') : "| "
          text += `| <a href=https://github.com/${issue.repo}>${issue.repo}</a> |\n`
          return text
        }).join('') + '\n'
      }

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
  const normalizeName = (name) => name.split(' ').join('-').toLowerCase()

  let res = ''
  res += projects.map((e, i) => {
    let str = `${i + 1}. [${e.name}](${normalizeName(e.name)})\n`
    str += e.milestones
      ? Object.keys(e.milestones).map((k) => {
        const m = e.milestones[k]
        return `  - [${m.title}](${normalizeName(m.title)})\n`
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
    console.log("# IPFS Roadmap")
    console.log("")
    console.log("This document gathers the roadmaps of all projects in the IPFS organization.")
    console.log("")
    console.log(`*Updated: ${new Date().toUTCString()}*`)
    console.log("")

    // console.log("## Table of Contents\n")
    // console.log(generateTableOfContents(projectsWithIssues))

    console.log("## Projects")
    console.log("")
    final.forEach((project) => console.log(`- [${project.name}](#${project.name})`))
    console.log("")

    console.log("## Roadmap")
    console.log(dataToMarkdown(final, { listGoalsPerMilestone: true }))
  })
  .catch((e) => console.error(e))
