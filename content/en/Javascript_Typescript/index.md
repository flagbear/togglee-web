---
title: 'Javscript/Typescript'
date: 2019-02-11T19:27:37+10:00
draft: false
weight: 30
description: usage of the library using javscript/typescript.
type: "docs"
---

## Installation

add it to your project using `npm install togglee --save` or `yarn add togglee`

## Usage

```js
const { Togglee } = require("togglee")

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

const subject = new Togglee(url, refreshRateSeconds, defaultValues)

setInterval(() => {
    if (subject.isEnabled("prop"))
        console.log("do stuff")
    else
        console.log("dont do stuff")
    if (subject.isEnabled("prop3", {"username": "user1"}))
        console.log("do stuff for user 1")
    else
        console.log("dont do stuff for user 1")
    if (subject.isEnabled("prop3", {"username": "user2"}))
        console.log("do stuff for user 2")
    else
        console.log("dont do stuff for user 2")
        
    console.log("-----------")
}, 10000);
```
