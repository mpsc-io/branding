// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const redocusaurus = [
  'redocusaurus',
  {
    debug: Boolean(process.env.DEBUG || process.env.CI),
    specs: [
      {
        id: 'openapi-yaml',
        spec: 'docs/api/hoot-mx-openapi.yaml',
        route: '/api/',
      },
    ],
    theme: {
      /**
       * Highlight color for docs
       */
      primaryColor: '#1890ff',
      /**
       * Options to pass to redoc
       * @see https://github.com/redocly/redoc#redoc-options-object
       */
      options: { disableSearch: true },
      /**
       * Options to pass to override RedocThemeObject
       * @see https://github.com/Redocly/redoc#redoc-theme-object
       */
      theme: {},
    },
  },
];

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
    redocusaurus,
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
      metadata: [
        {
          name: 'description',
          content: 'Infinitely Scalable Conferencing API & System by MPSC.io'
        },
        {
          name: 'keywords',
          content: 'cloud-native conferencing, conference-api, hoot-conferencing'
        }
      ],
      navbar: {
        // style: 'dark',
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
            to: '/api',
            position: 'left',
            label: 'API',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'How to Use',
          },
          // {to: '/api', label: 'API', position: 'left'},
          {
            label: 'Deployments', position: 'left',
            items: [
              {
                label: 'Generic-Development',
                href: 'https://dev.hoot.mx/',
              },
              {
                label: 'Mitsubishi-MELCO',
                href: 'https://melco.hoot.mx/',
              },
              {
                label: 'Speakerbus-Internal',
                href: 'https://speakerbus-internal.hoot.mx/',
              },
            ]
          },
          {
            position: 'right',
            label: 'Support',
            to: '/support-page',
            // href: 'mailto:hoot-support@mpsc.io?subject=%5BORG-Name%5D%20HooT%20Support%20Issue%20from%20ORG-Name'
          },
          {
            to: 'docs/intro',
            label: 'Get Started',
            position: 'right',
            className: 'custom-button',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        // defaultMode: 'dark',
        disableSwitch: true,
        // respectPrefersColorScheme: false,
      },
    }),
  themes: ["docusaurus-theme-openapi-docs"],
};

module.exports = config;
