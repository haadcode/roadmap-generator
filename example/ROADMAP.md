# IPFS - Roadmap

This document describes the current status and the upcoming milestones of the IPFS project.

*Updated: Tue, 30 Aug 2016 15:20:47 GMT*

## orbit

#### Milestone Summary

| Status | Milestone | Goals | ETA |
| :---: | :--- | :---: | :---: |
| 🚀| **[Integrate Orbit with uPort](#integrate-orbit-with-uport)**| 1 / 4| Fri Sep 16 2016|
| 🚀| **[Improve Orbit's and orbit-db's documentation and developer experience](#improve-orbit's-and-orbit-db's-documentation-and-developer-experience)**| 8 / 22| Sat Sep 24 2016|
| 🚀| **[Orbit with IPFS Pubsub](#orbit-with-ipfs-pubsub)**| 0 / 1| Wed Sep 28 2016|
| ⭐| **[Fix Orbit](#fix-orbit)**| 6 / 6| Fri Aug 12 2016|

#### Integrate Orbit with uPort

> Use uPort Identity for Orbit's users.

🚀 &nbsp;**OPEN** &nbsp;&nbsp;📉 &nbsp;&nbsp;**1 / 4** goals completed **(25%)** &nbsp;&nbsp;📅 &nbsp;&nbsp;**Fri Sep 16 2016**

| Status | Goal | Labels | Repository |
| :---: | :--- | --- | --- |
| ✔ | [Support signed messages](https://github.com/haadcode/orbit/issues/72) |`enhancement`| <a href=https://github.com/haadcode/orbit>haadcode/orbit</a> |
| ❌ | [Orbit uPort integration](https://github.com/haadcode/orbit/issues/37) |`enhancement`, `goal`, `In Progress`| <a href=https://github.com/haadcode/orbit>haadcode/orbit</a> |
| ❌ | [Support signed messages](https://github.com/haadcode/orbit-db/issues/57) |`Backlog`, `enhancement`| <a href=https://github.com/haadcode/orbit-db>haadcode/orbit-db</a> |
| ❌ | [Support signed messages](https://github.com/haadcode/ipfs-log/issues/34) |`Backlog`, `enhancement`| <a href=https://github.com/haadcode/ipfs-log>haadcode/ipfs-log</a> |


#### Improve Orbit's and orbit-db's documentation and developer experience

> Write better documentation, write more examples, cleanup and refactor code where needed.

🚀 &nbsp;**OPEN** &nbsp;&nbsp;📉 &nbsp;&nbsp;**8 / 22** goals completed **(36%)** &nbsp;&nbsp;📅 &nbsp;&nbsp;**Sat Sep 24 2016**

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

🚀 &nbsp;**OPEN** &nbsp;&nbsp;📉 &nbsp;&nbsp;**0 / 1** goals completed **(0%)** &nbsp;&nbsp;📅 &nbsp;&nbsp;**Wed Sep 28 2016**

| Status | Goal | Labels | Repository |
| :---: | :--- | --- | --- |
| ❌ | [Make orbit-server (redis) dependency optional](https://github.com/haadcode/orbit-db/issues/3) | | <a href=https://github.com/haadcode/orbit-db>haadcode/orbit-db</a> |


#### Fix Orbit

> Fix all the things that got broken in the past couple of months and bring together a version that uses both IPFS go and JS implementations.

⭐ &nbsp;**CLOSED** &nbsp;&nbsp;📉 &nbsp;&nbsp;**6 / 6** goals completed **(100%)** &nbsp;&nbsp;📅 &nbsp;&nbsp;**Fri Aug 12 2016**

| Status | Goal | Labels | Repository |
| :---: | :--- | --- | --- |
| ✔ | [Browser version should be able to save Orbit's data files](https://github.com/haadcode/orbit/issues/44) | | <a href=https://github.com/haadcode/orbit>haadcode/orbit</a> |
| ✔ | [Fix directory views](https://github.com/haadcode/orbit/issues/41) |`bug`| <a href=https://github.com/haadcode/orbit>haadcode/orbit</a> |
| ✔ | [Fix file previews](https://github.com/haadcode/orbit/issues/40) |`bug`| <a href=https://github.com/haadcode/orbit>haadcode/orbit</a> |
| ✔ | [Channel UI code refactoring](https://github.com/haadcode/orbit/pull/36) |`refactor`| <a href=https://github.com/haadcode/orbit>haadcode/orbit</a> |
| ✔ | [Some supported emojis are not rendered in the channel](https://github.com/haadcode/orbit/issues/25) |`bug`, `Difficulty: Easy`| <a href=https://github.com/haadcode/orbit>haadcode/orbit</a> |
| ✔ | [Automatically join channels on start](https://github.com/haadcode/orbit/issues/18) |`Difficulty: Easy`, `enhancement`| <a href=https://github.com/haadcode/orbit>haadcode/orbit</a> |


## go-ipfs

#### Milestone Summary

| Status | Milestone | Goals | ETA |
| :---: | :--- | :---: | :---: |
| 🚀| **[js-go interoperability](#js-go-interoperability)**| 0 / 1| Fri Aug 26 2016|
| 🚀| **[ipfs-0.4.3-rc4](#ipfs-0.4.3-rc4)**| 2 / 8| Wed Aug 31 2016|
| 🚀| **[ipfs 0.4.4](#ipfs-0.4.4)**| 1 / 3| Wed Sep 07 2016|
| 🚀| **[ipld integration](#ipld-integration)**| 0 / 3| Fri Sep 09 2016|

#### js-go interoperability

> Tasks that need to be completed for the go and javascript implementations to be able to communicate.

🚀 &nbsp;**OPEN** &nbsp;&nbsp;📉 &nbsp;&nbsp;**0 / 1** goals completed **(0%)** &nbsp;&nbsp;📅 &nbsp;&nbsp;**Fri Aug 26 2016**

| Status | Goal | Labels | Repository |
| :---: | :--- | --- | --- |
| ❌ | [use correct protocol names for ipfs services](https://github.com/ipfs/go-ipfs/pull/3132) |`needs review`| <a href=https://github.com/ipfs/go-ipfs>ipfs/go-ipfs</a> |


#### ipfs-0.4.3-rc4

> 

🚀 &nbsp;**OPEN** &nbsp;&nbsp;📉 &nbsp;&nbsp;**2 / 8** goals completed **(25%)** &nbsp;&nbsp;📅 &nbsp;&nbsp;**Wed Aug 31 2016**

| Status | Goal | Labels | Repository |
| :---: | :--- | --- | --- |
| ❌ | [Enhance tests for files API root best-effort pin.](https://github.com/ipfs/go-ipfs/pull/3151) |`in progress`| <a href=https://github.com/ipfs/go-ipfs>ipfs/go-ipfs</a> |
| ✔ | [Improve sharness testing on ipfs repo verify](https://github.com/ipfs/go-ipfs/pull/3148) | | <a href=https://github.com/ipfs/go-ipfs>ipfs/go-ipfs</a> |
| ❌ | [test: revert few stdin tests that were removed](https://github.com/ipfs/go-ipfs/pull/3144) |`needs review`| <a href=https://github.com/ipfs/go-ipfs>ipfs/go-ipfs</a> |
| ❌ | [test: do explicit check of CORS headers](https://github.com/ipfs/go-ipfs/pull/3142) |`needs review`| <a href=https://github.com/ipfs/go-ipfs>ipfs/go-ipfs</a> |
| ❌ | [cmd: harden the security of privkey field in config show](https://github.com/ipfs/go-ipfs/pull/3141) |`needs review`| <a href=https://github.com/ipfs/go-ipfs>ipfs/go-ipfs</a> |
| ❌ | [Code Review 0.4.2..0.4.3-rc3](https://github.com/ipfs/go-ipfs/issues/3138) |`discussion`| <a href=https://github.com/ipfs/go-ipfs>ipfs/go-ipfs</a> |
| ❌ | [Directly Fix #2839](https://github.com/ipfs/go-ipfs/pull/3135) |`needs review`| <a href=https://github.com/ipfs/go-ipfs>ipfs/go-ipfs</a> |
| ✔ | [cli: Fix stdin help text being show multiple times](https://github.com/ipfs/go-ipfs/pull/3134) |`needs review`| <a href=https://github.com/ipfs/go-ipfs>ipfs/go-ipfs</a> |


#### ipfs 0.4.4

> Version 0.4.4 of go-ipfs

🚀 &nbsp;**OPEN** &nbsp;&nbsp;📉 &nbsp;&nbsp;**1 / 3** goals completed **(33%)** &nbsp;&nbsp;📅 &nbsp;&nbsp;**Wed Sep 07 2016**

| Status | Goal | Labels | Repository |
| :---: | :--- | --- | --- |
| ❌ | [blockstore: rename RuntimeHashing to HashOnRead](https://github.com/ipfs/go-ipfs/pull/3143) |`in progress`, `needs review`| <a href=https://github.com/ipfs/go-ipfs>ipfs/go-ipfs</a> |
| ✔ | [deps: move go-is-domain to gx](https://github.com/ipfs/go-ipfs/pull/3077) |`RFM`| <a href=https://github.com/ipfs/go-ipfs>ipfs/go-ipfs</a> |
| ❌ | [Hit ~80% code coverage on all packages in this repo](https://github.com/ipfs/go-ipfs/issues/3053) |`difficulty:easy`, `help wanted`, `testing`| <a href=https://github.com/ipfs/go-ipfs>ipfs/go-ipfs</a> |


#### ipld integration

> integration of the ipld data format into go-ipfs

🚀 &nbsp;**OPEN** &nbsp;&nbsp;📉 &nbsp;&nbsp;**0 / 3** goals completed **(0%)** &nbsp;&nbsp;📅 &nbsp;&nbsp;**Fri Sep 09 2016**

| Status | Goal | Labels | Repository |
| :---: | :--- | --- | --- |
| ❌ | [ipfs object commands need to be re-thought for ipld](https://github.com/ipfs/go-ipfs/issues/3067) |`difficulty:moderate`, `help wanted`, `ready`| <a href=https://github.com/ipfs/go-ipfs>ipfs/go-ipfs</a> |
| ❌ | [Implement CIDv1](https://github.com/ipfs/go-ipfs/issues/3059) |`help wanted`| <a href=https://github.com/ipfs/go-ipfs>ipfs/go-ipfs</a> |
| ❌ | [Bitswap cant currently handle other types of hashes](https://github.com/ipfs/go-ipfs/issues/3055) |`bitswap`, `difficulty:moderate`| <a href=https://github.com/ipfs/go-ipfs>ipfs/go-ipfs</a> |



