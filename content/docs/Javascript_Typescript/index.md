---
title: 'Quick Start Javscript/Typescript'
date: 2019-02-11T19:27:37+10:00
draft: false
weight: 1
summary: usage of the library using javscript/typescript.
---

## Installation

add it to your project using `npm install togglee --save` or `yarn add togglee`

## Usage



```js
    import pkg from 'togglee';
    const {Togglee} = pkg;

    const url = "https://gist.githubusercontent.com/kanekotic/c469f99bef5a5c0634b4a94a4acd6546/raw/toggles"
    const refresh_rate_seconds = 5
    const default_values = [
        {
        type: 'release',
        value: true,
        },
        {
        "type": "release",
        "value": true
        },
        {
        "type": "context",
        "conditions": [
            {
            "field": "username",
            "value": "user1",
            "operation": "eq"
            }
        ]
        }
    ]
    const subject = new Togglee(url, refresh_rate_seconds, default_values)


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

## Type of toggles

### Release

Simple true/false logical path definition.
```js
{
    type: 'release',
    value: true,
}
```
### Context

Allows complex logic to decide the outcome of the logical path (example traffic, users, resources available). 
```js
{
    "type": "context",
    "conditions": [
        {
            "field": "username",
            "value": "user1",
            "operation": "eq"
        }
    ]
}
```
available operations are:
* 'eq': equal (===)
* 'ne': not equal (!==)
* 'gt': greater than (>)
* 'ge': greater equal (>=)
* 'lt': lesser than (<)
* 'le': lesser qqual (<=)

