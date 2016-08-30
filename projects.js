'use strict'

module.exports = {
  organization: 'IPFS',
  milestonesStartDate: '2016-08-01T00:00:00Z', // ISO formatted timestamp
  milestonesEndDate:   '2016-11-01T00:00:00Z', // ISO formatted timestamp
  projects: [
    {
      name: "orbit",
      repos: [
        "haadcode/orbit", // first repo is considered the main repo
        "haadcode/orbit-db",
        "haadcode/orbit-db-store",
        "haadcode/orbit-db-kvstore",
        "haadcode/orbit-db-eventstore",
        "haadcode/orbit-db-feedstore",
        "haadcode/orbit-db-counterstore",
        "haadcode/orbit-crypto",
        "haadcode/ipfs-log",
        "haadcode/ipfs-post",
        "haadcode/crdts",
      ],
//       links: {
//         status: `## Status and Progress\n
// [![Project Status](https://badge.waffle.io/haadcode/orbit.svg?label=Backlog&title=Backlog)](http://waffle.io/haadcode/orbit) [![Project Status](https://badge.waffle.io/haadcode/orbit.svg?label=In%20Progress&title=In%20Progress)](http://waffle.io/haadcode/orbit) [![Project Status](https://badge.waffle.io/haadcode/orbit.svg?label=Done&title=Done)](http://waffle.io/haadcode/orbit)\n
// See details of current progress on [Orbit's project board](https://waffle.io/haadcode/orbit)\n\n`
//       }
    },
    // {
    //   name: "js-ipfs",
    //   repos: [
    //     "ipfs/js-ipfs", // first repo is considered the main repo
    //     "ipfs/js-ipfs-api",
    //   ],
    // },
    {
      name: "go-ipfs",
      repos: [
        "ipfs/go-ipfs", // first repo is considered the main repo
      ]
    },
  ]
}
