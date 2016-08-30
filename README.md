# roadmap-generator

> Generate Markdown roadmap files based on Github Issues and Milestone

*Currently uses Github Milestones as milestones and Github Issues as goals*

## Install
```
git clone https://github.com/haadcode/roadmap-generator
cd roadmap-generator
npm install
```

## Setup 

Edit `projects.js` to suit your needs. `projects.js` returns an array of objects from which the roadmap will be generated from. You can define a project like this:

```javascript
{
  name: "orbit",
  repos: [
    "haadcode/orbit",    // first repo is considered the main repo
    "haadcode/orbit-db",
    "haadcode/ipfs-log",
  ]
}
```

## Usage

*You need a [Github API token](https://help.github.com/articles/creating-an-access-token-for-command-line-use/) to run `roadmap-generator`*

Run `roadmap-generator` with:

```
node index <github api token>
```

This will output the generated roadmap to the `stdout`. 

Alternatively, export `GITHUB_TOKEN` with:

```
export GITHUB_TOKEN=<your token>
```

And run `roadmap-generator` with:

```
node index > ROADMAP.md
```

This will output the generated roadmap to a file `ROADMAP.md`
