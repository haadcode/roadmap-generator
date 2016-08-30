# Orbit - Roadmap

This document describes the current status and the upcoming milestones of the Orbit project.

*Updated: Tue, 30 Aug 2016 14:56:26 GMT*

## Status and Progress

[![Project Status](https://badge.waffle.io/haadcode/orbit.svg?label=Backlog&title=Backlog)](http://waffle.io/haadcode/orbit) [![Project Status](https://badge.waffle.io/haadcode/orbit.svg?label=In%20Progress&title=In%20Progress)](http://waffle.io/haadcode/orbit) [![Project Status](https://badge.waffle.io/haadcode/orbit.svg?label=Done&title=Done)](http://waffle.io/haadcode/orbit)

See details of current progress on [Orbit's project board](https://waffle.io/haadcode/orbit)

**Milestone Summary**

| Status | Milestone | Goals | ETA |
| :---: | :--- | :---: | :---: |
| 🚀| **[Integrate Orbit with uPort](#integrate-orbit-with-uport)**| 1 / 4| Fri Sep 16 2016|
| 🚀| **[Improve Orbit's and orbit-db's documentation and developer experience](#improve-orbit's-and-orbit-db's-documentation-and-developer-experience)**| 8 / 22| Sat Sep 24 2016|
| 🚀| **[Orbit with IPFS Pubsub](#orbit-with-ipfs-pubsub)**| 0 / 1| Wed Sep 28 2016|
| ⭐| **[Fix Orbit](#fix-orbit)**| 6 / 6| Fri Aug 12 2016|

## Milestones and Goals

#### Integrate Orbit with uPort

> Use uPort Identity for Orbit's users.

🚀 &nbsp;&nbsp;**OPEN** &nbsp;&nbsp;📉 &nbsp;&nbsp;**1 / 4** goals completed **(25%)** &nbsp;&nbsp;📅 &nbsp;&nbsp;**Fri Sep 16 2016**

| Status | Goal | Labels | Repository |
| :---: | :--- | --- | --- |
| ✔ | [Support signed messages](https://github.com/haadcode/orbit/issues/72) |`enhancement`| <a href=https://github.com/haadcode/orbit>haadcode/orbit</a> |
| ❌ | [Orbit uPort integration](https://github.com/haadcode/orbit/issues/37) |`enhancement`, `goal`, `In Progress`| <a href=https://github.com/haadcode/orbit>haadcode/orbit</a> |
| ❌ | [Support signed messages](https://github.com/haadcode/orbit-db/issues/57) |`Backlog`, `enhancement`| <a href=https://github.com/haadcode/orbit-db>haadcode/orbit-db</a> |
| ❌ | [Support signed messages](https://github.com/haadcode/ipfs-log/issues/34) |`Backlog`, `enhancement`| <a href=https://github.com/haadcode/ipfs-log>haadcode/ipfs-log</a> |

#### Improve Orbit's and orbit-db's documentation and developer experience

> Write better documentation, write more examples, cleanup and refactor code where needed.

🚀 &nbsp;&nbsp;**OPEN** &nbsp;&nbsp;📉 &nbsp;&nbsp;**8 / 22** goals completed **(36%)** &nbsp;&nbsp;📅 &nbsp;&nbsp;**Sat Sep 24 2016**

| Status | Goal | Labels | Repository |
| :---: | :--- | --- | --- |
| ✔ | [Can't click anything in client's dev mode](https://github.com/haadcode/orbit/issues/75) |`bug`| <a href=https://github.com/haadcode/orbit>haadcode/orbit</a> |
| ❌ | [Reduce client's build time](https://github.com/haadcode/orbit/issues/74) |`In Progress`| <a href=https://github.com/haadcode/orbit>haadcode/orbit</a> |
| ✔ | [Move all items from TODO.md to Issues](https://github.com/haadcode/orbit/issues/58) |`enhancement`| <a href=https://github.com/haadcode/orbit>haadcode/orbit</a> |
| ✔ | [Enable UglifyJsPlugin](https://github.com/haadcode/orbit/pull/56) | | <a href=https://github.com/haadcode/orbit>haadcode/orbit</a> |
| ❌ | [Orbit API documentation](https://github.com/haadcode/orbit/issues/49) |`Backlog`, `enhancement`| <a href=https://github.com/haadcode/orbit>haadcode/orbit</a> |
| ❌ | [Add instructions to README on how to use different IPFS data repo with IPFS_PATH](https://github.com/haadcode/orbit/issues/48) |`Backlog`, `enhancement`| <a href=https://github.com/haadcode/orbit>haadcode/orbit</a> |
| ✔ | [Add build badge to README](https://github.com/haadcode/orbit/issues/47) |`enhancement`| <a href=https://github.com/haadcode/orbit>haadcode/orbit</a> |
| ❌ | [Move all client related code and tools to client/ directory](https://github.com/haadcode/orbit/issues/45) |`Backlog`, `enhancement`| <a href=https://github.com/haadcode/orbit>haadcode/orbit</a> |
| ✔ | [Add 'npm run build' to build everything automatically](https://github.com/haadcode/orbit/issues/42) |`enhancement`| <a href=https://github.com/haadcode/orbit>haadcode/orbit</a> |
| ✔ | [Include grunt-cli in the project so that it doesn't need to be installed globally](https://github.com/haadcode/orbit/issues/39) |`enhancement`| <a href=https://github.com/haadcode/orbit>haadcode/orbit</a> |
| ❌ | [Made README standard-readme compliant](https://github.com/haadcode/orbit/pull/35) |`Backlog`, `enhancement`| <a href=https://github.com/haadcode/orbit>haadcode/orbit</a> |
| ❌ | [Add npm badges to README in all orbit-db modules](https://github.com/haadcode/orbit-db/issues/76) |`Backlog`, `Difficulty: Easy`, `enhancement`, `help wanted`| <a href=https://github.com/haadcode/orbit-db>haadcode/orbit-db</a> |
| ❌ | [Update mocha to version 3.0.2 🚀](https://github.com/haadcode/orbit-db/pull/65) |`Backlog`, `greenkeeper`| <a href=https://github.com/haadcode/orbit-db>haadcode/orbit-db</a> |
| ✔ | [Update mocha to version 3.0.1 🚀](https://github.com/haadcode/orbit-db/pull/63) |`greenkeeper`| <a href=https://github.com/haadcode/orbit-db>haadcode/orbit-db</a> |
| ❌ | [DocumentStore](https://github.com/haadcode/orbit-db/issues/56) |`Backlog`, `Difficulty: Easy`| <a href=https://github.com/haadcode/orbit-db>haadcode/orbit-db</a> |
| ❌ | [Update ipfs-api to version 6.0.3 🚀](https://github.com/haadcode/orbit-db/pull/42) |`Backlog`, `greenkeeper`| <a href=https://github.com/haadcode/orbit-db>haadcode/orbit-db</a> |
| ❌ | [Add Readme](https://github.com/haadcode/orbit-db-kvstore/issues/1) |`Backlog`| <a href=https://github.com/haadcode/orbit-db-kvstore>haadcode/orbit-db-kvstore</a> |
| ❌ | [Add Readme.](https://github.com/haadcode/orbit-db-eventstore/issues/1) |`Backlog`| <a href=https://github.com/haadcode/orbit-db-eventstore>haadcode/orbit-db-eventstore</a> |
| ❌ | [Add Readme](https://github.com/haadcode/orbit-db-feedstore/issues/1) |`Backlog`| <a href=https://github.com/haadcode/orbit-db-feedstore>haadcode/orbit-db-feedstore</a> |
| ❌ | [Add Readme](https://github.com/haadcode/orbit-db-counterstore/issues/1) |`Backlog`| <a href=https://github.com/haadcode/orbit-db-counterstore>haadcode/orbit-db-counterstore</a> |
| ✔ | [Update mocha to version 3.0.1 🚀](https://github.com/haadcode/ipfs-log/pull/36) |`greenkeeper`| <a href=https://github.com/haadcode/ipfs-log>haadcode/ipfs-log</a> |
| ❌ | [Add a Contribute section](https://github.com/haadcode/ipfs-log/issues/1) |`Backlog`| <a href=https://github.com/haadcode/ipfs-log>haadcode/ipfs-log</a> |

#### Orbit with IPFS Pubsub

> Integrate with IPFS Pubsub (if available)

🚀 &nbsp;&nbsp;**OPEN** &nbsp;&nbsp;📉 &nbsp;&nbsp;**0 / 1** goals completed **(0%)** &nbsp;&nbsp;📅 &nbsp;&nbsp;**Wed Sep 28 2016**

| Status | Goal | Labels | Repository |
| :---: | :--- | --- | --- |
| ❌ | [Make orbit-server (redis) dependency optional](https://github.com/haadcode/orbit-db/issues/3) | | <a href=https://github.com/haadcode/orbit-db>haadcode/orbit-db</a> |

#### Fix Orbit

> Fix all the things that got broken in the past couple of months and bring together a version that uses both IPFS go and JS implementations.

⭐ &nbsp;&nbsp;**CLOSED** &nbsp;&nbsp;📉 &nbsp;&nbsp;**6 / 6** goals completed **(100%)** &nbsp;&nbsp;📅 &nbsp;&nbsp;**Fri Aug 12 2016**

| Status | Goal | Labels | Repository |
| :---: | :--- | --- | --- |
| ✔ | [Browser version should be able to save Orbit's data files](https://github.com/haadcode/orbit/issues/44) | | <a href=https://github.com/haadcode/orbit>haadcode/orbit</a> |
| ✔ | [Fix directory views](https://github.com/haadcode/orbit/issues/41) |`bug`| <a href=https://github.com/haadcode/orbit>haadcode/orbit</a> |
| ✔ | [Fix file previews](https://github.com/haadcode/orbit/issues/40) |`bug`| <a href=https://github.com/haadcode/orbit>haadcode/orbit</a> |
| ✔ | [Channel UI code refactoring](https://github.com/haadcode/orbit/pull/36) |`refactor`| <a href=https://github.com/haadcode/orbit>haadcode/orbit</a> |
| ✔ | [Some supported emojis are not rendered in the channel](https://github.com/haadcode/orbit/issues/25) |`bug`, `Difficulty: Easy`| <a href=https://github.com/haadcode/orbit>haadcode/orbit</a> |
| ✔ | [Automatically join channels on start](https://github.com/haadcode/orbit/issues/18) |`Difficulty: Easy`, `enhancement`| <a href=https://github.com/haadcode/orbit>haadcode/orbit</a> |


