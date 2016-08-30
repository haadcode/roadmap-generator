# roadmap-generator

> Generate Markdown roadmap files based on Github Issues and Milestone

*Currently uses Github Milestones as milestones and Github Issues as goals*

Check the [example roadmap](https://github.com/haadcode/roadmap-generator/blob/master/example/ROADMAP.md#ipfs-roadmap)
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
node index <github api token> <true|false>
```

This will output the generated roadmap to the `stdout`. 

The last argument `<true|false>` is *optional* and defines whether each milestone will list its goals. Default is `true`, ie. milestones will include their goals in the generated roadmap.

Alternatively, export `GITHUB_TOKEN` with:

```
export GITHUB_TOKEN=<your token>
```

And run `roadmap-generator` with:

```
node index  > ROADMAP.md
```

This will output the generated roadmap to a file `ROADMAP.md`
