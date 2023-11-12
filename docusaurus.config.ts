import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const config: Config = {
    title: 'Let\'s Build A Knowledgebase',
    tagline: 'Community built knowledge base',
    favicon: 'img/favicon.ico',
    url: 'https://kb.letsbuilda.dev/',
    baseUrl: '/',
    organizationName: 'letsbuilda',
    projectName: 'kb.letsbuilda.dev',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl:
                        'https://github.com/letsbuilda/kb.letsbuilda.dev/tree/main/',
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                },
                blog: false,
            } satisfies Preset.Options,
        ],
    ],

    themeConfig:
        {
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
        } satisfies Preset.ThemeConfig,
};

module.exports = config;
