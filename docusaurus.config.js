// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tech Foundations',
  tagline: 'An Integrated Tech Industry Foundations Course',
  url: 'https://jamesbelchamber.github.io',
  baseUrl: '/tech-foundations/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'jamesbelchamber', // Usually your GitHub org/user name.
  projectName: 'tech-foundations', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'no', 'pt'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/jamesbelchamber/tech-foundations/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Tech Foundations',
        logo: {
          alt: 'Tech Foundations Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'programming/index',
            position: 'left',
            label: 'Programming',
          },
          {
            type: 'doc',
            docId: 'linux/index',
            position: 'left',
            label: 'Linux',
          },
          {
            type: 'doc',
            docId: 'computing/index',
            position: 'left',
            label: 'Computing',
          },
          {
            type: 'doc',
            docId: 'networking/index',
            position: 'left',
            label: 'Networking',
          },
          {
            type: 'doc',
            docId: 'security/index',
            position: 'left',
            label: 'Security',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} James Belchamber, except emojis (designed by OpenMoji under CC-BY-SA). Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
