module.exports = {
  sections: [
    {
      name: "Introduction",
      content: "README.md",
    },
    {
      name: "Documentation",
      sections: [
        {
          name: "Installation",
          content: "docs/installation.md",
          description: "The description for the installation section",
        },
        {
          name: "Configuration",
          content: "docs/configuration.md",
        },
        {
          name: "Live Demo",
          external: true,
          href: "https://staging.pandemia.fi",
        },
      ],
    },
    // {
    //   name: "UI Components",
    //   content: "docs/ui.md",
    //   components: "lib/components/ui/*.js",
    //   exampleMode: "expand", // 'hide' | 'collapse' | 'expand'
    //   usageMode: "expand", // 'hide' | 'collapse' | 'expand'
    // },
  ],
};
