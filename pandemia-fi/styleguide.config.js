// Styleguidist configuration
// - https://react-styleguidist.js.org/docs/configuration.html
// - https://react-styleguidist.js.org/docs/thirdparties.html
module.exports = {
  components: [
    "src/components/**/[A-Z]*.tsx",
    "src/components/**/[a-z]*.tsx",
    "src/pages/**/[A-Z]*.tsx",
    "src/pages/**/[a-z]*.tsx",
  ],
  ignore: ["src/pages/uutishuone/**/*"],
  defaultExample: false,
  // styles: "./styleguide.styles.js",
  // sections: "./styleguide.sections.js",
  propsParser: require("react-docgen-typescript").withDefaultConfig({
    propFilter: { skipPropsWithoutDoc: false },
  }).parse,
};
