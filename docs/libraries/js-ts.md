---
sidebar_position: 1

---
# TypeScript & JavaScript

## Installation

add it to your project using `npm install flagbear --save` or `yarn add flagbear`

## Usage

```js
const { flagbear } = require("flagbear")

const url = "https://gist.githubusercontent.com/kanekotic/c469f99bef5a5c0634b4a94a4acd6546/raw/toggles"
const refreshRateSeconds = 5
const defaultValues = [
    {
      type: "release",
      name: "prop",
      value: true,g
    },
    {
      type: "release",
      name: "prop2",
      value: true
    },
    {
      type: "context",
      name: "prop3",
      conditions: [
        {
          field: "username",
          value: "user1",
          operation: "eq"
        }
      ]
    }
]

const subject = new flagbear(url, refreshRateSeconds, defaultValues)

setInterval(() => {
    if (subject.isEnabled("prop"))
        console.log("do stuff")
    else
        console.log("don't do stuff")
    if (subject.isEnabled("prop3", {"username": "user1"}))
        console.log("do stuff for user 1")
    else
        console.log("don't do stuff for user 1")
    if (subject.isEnabled("prop3", {"username": "user2"}))
        console.log("do stuff for user 2")
    else
        console.log("don't do stuff for user 2")
        
    console.log("-----------")
}, 10000);
```