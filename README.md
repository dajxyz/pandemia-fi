# Pandemia.fi

[Pandemia.fi](https://www.pandemia.fi/) is an information resource and a news aggregator that only an independent team of volunteer individuals could build.

We are building a completely new site as part of the [Hack The Crisis Finland](https://www.hackthecrisisfinland.com/) hackathon during the weekend of March 20 to March 22, 2020.

## Contributing

Contributions are welcome! The new code lives under the `pandemia-fi` directory
and is a basic `create-react-app` setup. Feel free to post issues and even bake a PR!

### We are especially looking for contributions towards

- React app internationalisation.

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

## Understanding the application structure

### source-map-explorer

[source-map-explorer](https://www.npmjs.com/package/source-map-explorer) allows you to figure out what JavaScript is included in the build output of the application. It allows to debug potential size issues while also making it a bit more reasonable to eventually reduce the application size.

```sh
yarn run size
```

- [Analyzing the Bundle Size](https://create-react-app.dev/docs/analyzing-the-bundle-size)
