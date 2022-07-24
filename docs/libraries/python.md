---
sidebar_position: 2
---

# Python

## Installation

```sh
pip install togglee
```

## Usage

```python
from togglee import Togglee

url = "https://gist.githubusercontent.com/kanekotic/c469f99bef5a5c0634b4a94a4acd6546/raw/b67985d8e3a5112c9be2da47bdadf2cf17edbe44/toggles"
refresh_rate_seconds = 5
default_values = {
    "prop": False
}
subject = Togglee(url, refresh_rate_seconds, default_values)
if subject.is_enabled("prop"):
    print("do stuff")
else:
    print("don't do stuff")
```