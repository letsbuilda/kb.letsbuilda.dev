// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Let\'s Build A Knowledgebase',
  tagline: 'Community built knowledge base',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://kb.letsbuilda.dev/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'letsbuilda', // Usually your GitHub org/user name.
  projectName: 'kb.letsbuilda.dev', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          'https://github.com/letsbuilda/kb.letsbuilda.dev/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
          navbar: {
              title: 'Let\'s Build a ...',
              logo: {
                  alt: 'My Site Logo',
                  src: 'img/logo.png',
              },
              items: [
                  {
                      type: 'doc',
                      docId: 'vendor/README',
                      position: 'left',
                      label: 'Vendors',
                  },
                  {
                      type: 'doc',
                      docId: 'python/README',
                      position: 'left',
                      label: 'Python',
                  },
                  {
                      type: 'doc',
                      docId: 'discord/README',
                      position: 'left',
                      label: 'Discord',
                  },
                  {
                      href: 'https://github.com/letsbuilda/',
                      label: 'GitHub',
                      position: 'right',
                  },
              ],
          },
          footer: {
              style: 'dark',
              links: [
                  {
                      title: 'Community',
                      items: [
                          {
                              label: 'Discord',
                              href: 'https://discordapp.com/invite/hC6R5CtEq7',
                          },
                      ],
                  },
                  {
                      title: 'More',
                      items: [
                          {
                              label: 'GitHub',
                              href: 'https://github.com/letsbuilda',
                          },
                      ],
                  },
              ],
              copyright: `Copyright © ${new Date().getFullYear()} Let's Build a ..., Built with Docusaurus.`,
          },
          prism: {
              theme: lightCodeTheme,
              darkTheme: darkCodeTheme,
              additionalLanguages: ['powershell'],
          },
      }),
};

module.exports = config;
