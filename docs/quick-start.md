---
sidebar_position: 2
---

# Quick Start 

For using togglee you will need:
- A toggle file hosted in an accesible server throught http/https (ex. gist).
- An application using one of the supported languages libraries (ex. js).

The toggle file needs to be defined as valid json object similar 
Simple true/false logical path definition.

```js
{
  "toggles": [
    {
      "name": "myToggle",
      "type": "release",
      "value": false
    }
  ]
}
```

the supported formats for the toggle can be found in the section (Toggle types)[docs/toggle-types]. 

An example implementation using js for the previous toggle is:

```js
    import pkg from 'togglee';
    const {Togglee} = pkg;

    const url = "https://gist.githubusercontent.com/kanekotic/c469f99bef5a5c0634b4a94a4acd6546/raw/toggles"
    const refreshRateSeconds = 5
    const defaultValues = []
    const subject = new Togglee(url, refreshRateSeconds, defaultValues)


    setInterval(() => {
        if (subject.isEnabled("myToggle"))
            console.log("do stuff")
        else
            console.log("dont do stuff")
    }, 10000);
```

Please reffer to each language for specific capabilities.