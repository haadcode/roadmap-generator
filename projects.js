'use strict'

module.exports = [
  {
    name: "orbit",
    repos: [
      "haadcode/orbit", // first repo is considered the main repo
      "haadcode/orbit-db",
      "haadcode/orbit-db-store",
      "haadcode/orbit-db-kvstore",
      "haadcode/ipfs-log",
    ]
  },
  {
    name: "js-ipfs",
    repos: [
      "ipfs/js-ipfs", // first repo is considered the main repo
      "ipfs/js-ipfs-api",
    ]
  },
  {
    name: "go-ipfs",
    repos: [
      "ipfs/go-ipfs", // first repo is considered the main repo
    ]
  },
]
