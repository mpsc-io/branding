// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HooT',
  tagline: 'Powered by mpsc.io, cloud-native, API driven collaboration-engine',
  url: 'https://hoot.mx',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/hoot_icon.png',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mpsc-io', // Usually your GitHub org/user name.
  projectName: 'branding', // Usually your repo name.
  deploymentBranch: 'gh-pages',

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
          routeBasePath: '/docs/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem"
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "apiDocs",
        docsPluginId: "classic",
        config: {
          hoot: {
            specPath: "api/openapi.yaml", // Path to designated spec file
            outputDir: "api/hoot", // Output directory for generated .mdx docs
          }
        }
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'privacy',
        path: 'privacy',
        routeBasePath: 'privacy',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'terms-and-conditions',
        path: 'terms-and-conditions',
        routeBasePath: 'terms-and-conditions',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
       // title: 'HooT',
        logo: {
          alt: 'HooT',
          src: 'img/hoot_icon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'design',
            position: 'left',
            label: 'Design',
          },
          {
            type: 'doc',
            docId: 'api/README',
            position: 'left',
            label: 'API',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          // {to: '/api', label: 'API', position: 'left'},
          {
            position: 'right',
            label: 'Development',
            href: 'https://dev.hoot.mx/',
          },
          {
            position: 'right',
            label: 'Mitsubishi-MELCO',
            href: 'https://melco.hoot.mx/',
          },
          {
            position: 'right',
            label: 'Support',
            href: 'mailto:hoot-support@mpsc.io?subject=%5BORG-Name%5D%20HooT%20Support%20Issue%20from%20ORG-Name'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   //position: 'right',
          //   title: 'Docs',
          //   items: [
          //     {
          //       position: 'right',
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Deployments',
          //   items: [
          //     {
          //       label: 'Development',
          //       href: 'https://dev.hoot.mx/',
          //     },
          //     {
          //       label: 'Mitsubishi-MELCO',
          //       href: 'https://melco.hoot.mx/',
          //     },
          //   ],
          // },
          {
            title: 'Legal',
            items: [
              {
                id:'privacy-policy',
                label: 'Privacy',
                to: '/privacy/privacy-policy',
                // docId: '/privacy/privacy-policy',
              },
              {
                id:'terms-and-conditions',
                label: 'Terms and Conditions',
                to: '/terms-and-conditions/terms-and-conditions',
                // docId: '/privacy/privacy-policy',
              },
              // {
              //   position: 'right',
              //   label: 'GitHub',
              //   href: 'https://github.com/facebook/docusaurus',
              // },
            ],
          },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //      position: 'right',
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       position: 'right',
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MPSC, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  themes: ["docusaurus-theme-openapi-docs"],
};

module.exports = config;
