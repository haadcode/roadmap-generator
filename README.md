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

## Usage

*You need a [Github API token](https://help.github.com/articles/creating-an-access-token-for-command-line-use/) to run `roadmap-generator`*

```
Usage: index.js <file> <GITHUB_TOKEN> [options]

By default GITHUB_TOKEN is read from env variable.

Options:
  -g, --goals         Include milestone goals in the roadmap           [boolean]
  -s, --summary       Include milestone summaries in the roadmap       [boolean]
  -p, --progressBars  Show progress with images instead of text
  -l, --log           Log level: DEBUG|ERROR                  [default: "ERROR"]
  -h, --help          Show help                                        [boolean]

Examples:
  index.js roadmap.conf.js               Output a generated roadmap
  index.js roadmap.conf.js > ROADMAP.md  Output the generated roadmap to
                                         ROADMAP.md
  index.js roadmap.conf.js -gs           Generate detailed roadmap
```

Set `GITHUB_TOKEN` environment variable with:
```
export GITHUB_TOKEN=<token>
```

## Example
```
node index.js example/ipfs.conf.js -gs > example/ROADMAP.md
```
