---
sidebar_position: 2

---
# Quick Start

For using flagbear, you will need:

* A toggle file hosted in an accessible server through HTTP/HTTPS (ex. gist).
* An application using one of the supported languages libraries (ex. js).

The toggle file needs to be defined as a valid JSON object, similar to Simple true/false logical path definition.

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

The supported formats for the toggle can be found in the section (Toggle types)\[docs/toggle-types\].

An example implementation using JS for the previous toggle is:

```js
    import pkg from 'flagbear';
    const {flagbear} = pkg;

    const url = "https://gist.githubusercontent.com/kanekotic/c469f99bef5a5c0634b4a94a4acd6546/raw/toggles"
    const refreshRateSeconds = 5
    const defaultValues = []
    const subject = new flagbear(url, refreshRateSeconds, defaultValues)


    setInterval(() => {
        if (subject.isEnabled("myToggle"))
            console.log("do stuff")
        else
            console.log("don't do stuff")
    }, 10000);
```

Please refer to each language for specific capabilities.