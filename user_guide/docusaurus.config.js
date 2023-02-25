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
      options: { disableSearch: false, downloadDefinitionUrl: '/hoot-mx-openapi.yaml' },
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
        blog: {
          path: 'blog',
          // Simple use-case: string editUrl
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
          // Advanced use-case: functional editUrl
          editUrl: ({locale, blogDirPath, blogPath, permalink}) =>
              `https://github.com/mpsc-io/branding/edit/main/user_guide/${blogDirPath}/${blogPath}`,
          editLocalizedFiles: false,
          blogTitle: 'Blog title',
          blogDescription: 'Blog',
          blogSidebarCount: 5,
          blogSidebarTitle: 'All our posts',
          routeBasePath: 'blog',
          include: ['**/*.{md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          postsPerPage: 10,
          blogListComponent: '@theme/BlogListPage',
          blogPostComponent: '@theme/BlogPostPage',
          blogTagsListComponent: '@theme/BlogTagsListPage',
          blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
          truncateMarker: /<!--\s*(truncate)\s*-->/,
          showReadingTime: true,
        },
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
       // title: 'HooT',
        logo: {
          alt: 'HooT',
          src: 'img/hoot_logo.svg',
          className: 'navbar-logo',
        },
        items: [
          {
            label: 'Home',
            className: 'nav-links',
            position: 'left',
            to: '/'
          },
          {
            type: 'doc',
            docId: 'design',
            position: 'left',
            label: 'Design',
            className: 'nav-links'
          },
          {
            to: '/api',
            position: 'left',
            label: 'API',
            className: 'nav-links'
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'How to use',
            className: 'nav-links'
          },

          // {to: '/api', label: 'API', position: 'left'},
          {
            label: 'Deployments', position: 'left',
            className: 'nav-links',
            items: [
              {
                label: 'Generic-Development',
                href: 'https://dev.hoot.mx/',
              },
              {
                label: 'Corp Deployment 1',
                href: 'https://speakerbus-internal.hoot.mx/',
              },
            ]
          },
          {to: 'blog', label: 'Blog', position: 'right'},
          {
            position: 'right',
            className: 'nav-links',
            label: 'Support',
            to: '/support-page',
            // href: 'mailto:hoot-support@mpsc.io?subject=%5BORG-Name%5D%20HooT%20Support%20Issue%20from%20ORG-Name'
          },
          {
            // to: 'docs/intro',
            to: "mailto:info@mpsc.io?subject=%5BHooT%5D%20Access%20Code%20Request&body=I%20am%20interested%20in%20exploring%20the%20HooT%20Conferencing%20App.%20%0A%0A",
            label: 'Get Access Code',
            position: 'right',
            className: 'custom-button',
          },
          {
            // to: 'docs/intro',
            to: "mailto:info@mpsc.io?subject=%5BHooT%5D%20Access%20Code%20Request&body=I%20am%20interested%20in%20exploring%20the%20HooT%20Conferencing%20App.%20%0A%0A",
            label: 'Get Access Code',
            position: 'right',
            className: 'nav-links mobile',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        disableSwitch: true,
      },
    }),
  themes: ["docusaurus-theme-openapi-docs"],
};

module.exports = config;
