// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Let\'s Build a knowledge base',
    tagline: 'Community knowledge base',
    url: 'https://kb.letsbuilda.dev/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'letsbuilda', // Usually your GitHub org/user name.
    projectName: 'kb.letsbuilda.dev', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
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
                    routeBasePath: '/', // Serve the docs at the site's root
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/letsbuilda/kb.letsbuilda.dev/tree/main/',
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
                        title: 'Projects',
                        items: [
                            {
                                label: 'Meet our projects',
                                to: 'https://projects.letsbuilda.dev',
                            },
                        ],
                    },
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
