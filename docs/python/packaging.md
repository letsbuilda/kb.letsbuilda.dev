# Packaging

Short answer -
- First there was `pip`. You give `pip` a list of names of packages from the PyPi, and it installs them.
- Then someone wanted an easy way to specify a list, so the PyPa added a  `--requirement` flag to allow you to pass the list in a file, commonly called `requirements.txt`
- Then someone decided that the plain text implementation sucked, so the PyPa started a project called `Pipfile` to use a TOML format and to have a lock file. They have a roadmap issue for adding a `--pipfile` flag to `pip`, intended to replace the above option.
At the same time -
Someone (PyPa?) created a package called `setuptools`, which builds your package, so it creates all the metadata files, so you have to specify your dependencies in it's config file.
Several other people also created their own build tools.

The PSF and the PyPa looked out over the fields of their subjects and all of their build tools, and decided that it should not be so.
So they created PEP 621, which standardizes specifying your project metadata in a file called called `pyproject.toml`, and PEP 517, which standardizes specifying which tool you want to use to build your project, and establishes a specification for a build API, so that you can build your package with `pip install .`, no matter which tool you select.
At this point, the Pipfile project is abandoned AFAICT
And all efforts are moving towards parsing the PEP 621 metadata from your `pyproject.toml`.
Maintainers of other tools have also noticed this, and have started allowing you to specify config options for their tool in this file as well.
