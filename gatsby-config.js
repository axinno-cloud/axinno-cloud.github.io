module.exports = {
  siteMetadata: require("./metadata"),
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-preact',
    'gatsby-plugin-sitemap',
    { resolve: 'gatsby-plugin-robots-txt', options: { policy: [{userAgent: '*', allow: '/'}] } },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/docs/",
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-smartypants',
          { resolve: 'gatsby-remark-mermaid', options: { theme: "dark", mermaidOptions: { themeCSS: ".mermaid foreignObject {overflow: visible;}" } } },
          { resolve: 'gatsby-remark-prismjs', options: { showLineNumbers: false, } },
        ]
      }
    },
    { resolve: 'gatsby-plugin-html-attributes', options: { lang: 'en', 'data-theme': 'dark' } },
    { resolve: 'gatsby-plugin-nprogress', options: { color: '#4ECCA3' } },
    { resolve: 'gatsby-plugin-manifest', options: require("./manifest") },
    { resolve: 'gatsby-plugin-canonical-urls', options: { siteUrl: require("./metadata").siteUrl } },
  ]
};
