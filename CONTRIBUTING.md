# Contribution guidelines

Contributions are welcome!

## Current needs

### Interactive visualisations

We are looking for contributors, especially those who can bring data to life with interactive visualisations. We are tracking multiple domestic and global data sources to bring a sense of the COVID-19 crisis to our readers and have a large volunteer research team to provide ideas, compile data from primary sources and help estimate realistic clinical parameters for models. The new web app itself will be fully open-source and it is being built using React, Rebass, and Apex Charts. Other tools are welcome as well! Currently we have a small group of core contributors. If the above sounds interesting consider jumping aboard and having an impact!

### React app internationalisation

As the COVID-19 crisis is global, so is the need for reliable information.
While the current website is still focused on primarily serving people in Finland,
we are getting increased requests to have the site available in multiple languages.

If you have experience with multi-language React applications,
suggest some of the potential ways to solve the internationalisation challenges
for the application's UI, content display and site structure.

<!-- _TODO:_ Write more details about React app internationalisation. -->

### Mobile navigation improvements

Improving flexibility of the top navigation menu is one of the current needs for the application.
If you are planning to contribute improvements to that, please ask for extra details from the project Slack channel first, as the visual design wireframes are getting improved at the moment there.

<!-- _TODO:_ Write more details about navigation improvements. -->

---

### Tools to install before contributing

- [Yarn](https://classic.yarnpkg.com/en/)
- [Node.js](https://nodejs.org/en/) (either directly or via a tool like nvm or similar)

### Good editors to consider

- [Visual Studio Code](https://code.visualstudio.com/)

#### Required extensions (for VS Code)

- [EditorConfig for Visual Studio Code](https://github.com/editorconfig/editorconfig-vscode)
- [prettier/prettier-vscode](https://github.com/prettier/prettier-vscode)
  - "Visual Studio Code extension for Prettier"

#### Recommended extensions (for VS Code)

- [DavidAnson/vscode-markdownlint](https://github.com/DavidAnson/vscode-markdownlint)
  - "Markdown linting and style checking for Visual Studio Code"
- [eamodio/vscode-gitlens](https://github.com/eamodio/vscode-gitlens)
  - Additional Git tools for understanding existing code better

---

## Source code

The new code lives under the `pandemia-fi` directory,
and is based on `create-react-app` structure.

Feel free to post [issues](https://github.com/dajxyz/pandemia-fi/issues)
and even make a [Pull Request](https://github.com/dajxyz/pandemia-fi/pulls)!

---

## Git commit messages

Readable commit messages help you to communicate more effectively what you have been doing with the code changes.
Following examples show some ideas for Git commit messages.
Hopefully these can give a better ideas of a good structure for a Git commit messages.

### Example: Documentation improvements

```txt
docs: improve documentation

- Improve documentation
- Add more details about project workflows
```

### Example: Bug fix commit message

```txt
fix: improve data handling

- Improve data handling
- Check that RSS feed contents are possible to parse properly
  - If feed structure has issues, return error message to console
```

### Example: Feature additions

```txt
feat: add new feature X

- Add new feature X
- Solve a need Y with the new feature
```

<!--
### Example: Y

```txt
feat: add new feature Y

- Add new feature Y
- Solve a need Z with the feature
```
-->

---

## Understanding the application structure

### React Styleguidist

Style guide generator that helps with the component development & debugging.

#### Starting component development environment

```sh
yarn run styleguide
```

#### Generating static website for the styleguide

```sh
yarn run styleguide:build
```

#### More details

- Create React App (CRA) documentation:
  - [Developing Components in Isolation](https://create-react-app.dev/docs/developing-components-in-isolation/)
- [React Styleguidist](https://react-styleguidist.js.org/) documentation
  - [Getting Started with React Styleguidist](https://react-styleguidist.js.org/docs/getting-started.html)
  - [Locating your components and organizing your style guide](https://react-styleguidist.js.org/docs/components.html)
  - [CLI commands and options](https://react-styleguidist.js.org/docs/cli.html)
  - [Documenting components](https://react-styleguidist.js.org/docs/documenting.html)

### source-map-explorer

[source-map-explorer](https://www.npmjs.com/package/source-map-explorer) allows you to figure out what JavaScript is included in the build output of the application. It allows to debug potential size issues while also making it a bit more reasonable to eventually reduce the application size.

```sh
yarn run size
```

- [Analyzing the Bundle Size](https://create-react-app.dev/docs/analyzing-the-bundle-size)
