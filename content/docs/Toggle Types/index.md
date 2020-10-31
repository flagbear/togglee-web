---
title: 'Type of Toggles'
date: 2019-02-11T19:27:37+10:00
draft: false
weight: 20
summary: The different set of toggles that the library supports.
---

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

