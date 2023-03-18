# Packaging

## Creating a package

This tutorial will use `setuptools` as it is recommended by PyPa.

### Package formats

There are different ways you can format a package directory. It may look like this

```
mypackage
└── src
    └── mypackage
        └── myfiles.py
        └ ── __init__.py
└── README.md
└── pyproject.toml
```

or

```
mypackage
└── mypackage
    └── myfiles.py
    └── __init__.py
└── README.md
└── pyproject.toml
```

(`pyproject.toml` is the config file, which can be replaced with `setup.py` however `pyproject.toml` is recommended)

#### README.md
README.md will store the things you'll want people to see when they go to your PyPi homepage. Here's an example

```
# mypackage

An example package

## Installation

Install \`mypackage\` through pip using
\`\`\`
pip install mypackage
\`\`\`

...```

which will render to

# mypackage

An example package

## Installation

Install `mypackage` through pip using
```
pip install mypackage
```

...


#### pyproject.toml

The `pyproject.toml` file holds package metadata, like the title, author, description, and relevant links.

Here's an example for the first format taken from [the imsosorry package](https://github.com/letsbuilda/imsosorry).

```toml
[build-system]
requires = ["setuptools", "wheel"]
build-backend = "setuptools.build_meta"

[project]
name = "imsosorry"
version = "1.2.0"
description = "Sometimes it can be necessary to call upon the ancient arts..."
authors = [
    { name = "Bradley Reynolds", email = "bradley.reynolds@darbia.dev" },
]
license = { text = "MIT" }
readme = "README.md"
requires-python = ">=3.7"
dependencies = []

[project.urls]
repository = "https://github.com/letsbuilda/imsosorry/"
documentation = "https://docs.letsbuilda.dev/imsosorry/"
```