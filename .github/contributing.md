# Contribution Guide

## 🐛 Issues

Issues can be created to report problems and make suggestions for improvements to the information documented within this repo.

### Create A New Issue

Firstly, [check](../../../issues) our existing issues to determine whether a similar issue already exists. If a related issue doesn't exist, you can open a new issue using one of the [issue forms](../../../issues/new/choose).

### Resolve An Issue

Scan through our [existing issues](../../../issues) to find one that you can help with. You can narrow down the search using `labels` as filters. If you find an issue to work on, you are welcome to open a Pull Request (PR) with a change.

## 📤 Make Changes

Create a new branch to make any changes.

[Astro](https://astro.build/) is used as the framework with the [Starlight](https://starlight.astro.build/) documentation theme applied. The Astro codebase can be found at `./docs/` within the repo.

The labs and guides are written in Markdown, which are located in the `./docs/src/content/docs/` directory.

New pages added to the existing directories will be automatically added to the sidebar. If a new section (directory) is required, this must be added to the `./docs/astro.config.mjs` file to be included in the sidebar.

Images should be added to the `./docs/src/assets/images/` directory and can be linked via the relative following path `../../../assets/images/`, assuming that the document with the reference is within a first level directory within `./docs/src/content/docs/`.

The website will be built from the contents of the `./docs/` directory.

### Deploying

Once all changes are complete, you can create a [Pull Request (PR)](../../../pulls) against the `main` branch for your branch.

The PR will have automated tests and checked performed again it and will be reviewed by the owning team.

If approved, the changes will be merged into the `main` branch and the changes will trigger the live labs website to be rebuilt and deployed to GitHub Pages.