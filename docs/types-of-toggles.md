---
sidebar_position: 3
---

# Types of Toggles

flagbear supports the next types of toggles:

## Release

Simple true/false logical path definition.

```js
{
    "type": "release",
    "name": "awesomeToggle",
    "value": true
}
```

## Context

Allows complex logic to decide the outcome of the logical path (example traffic, users, resources available).

```js
{
    "type": "context",
    "name": 'awesomeToggle'
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

* 'eq': equal
* 'ne': not equal
* 'gt': greater than
* 'ge': greater equal
* 'lt': lesser than
* 'le': lesser equal