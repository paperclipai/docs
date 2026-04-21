import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Paperclip',
  tagline: 'The control plane for autonomous AI companies',
  favicon: 'favicon.svg',

  future: {
    v4: true,
  },

  url: process.env.DOCUSAURUS_URL ?? 'https://docs.paperclip.ing',
  baseUrl: process.env.DOCUSAURUS_BASE_URL ?? '/',

  organizationName: 'paperclipai',
  projectName: 'docs',

  onBrokenLinks: 'warn',

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  staticDirectories: ['static'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        indexBlog: false,
        docsDir: ['.'],
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          path: '.',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          include: [
            'home.mdx',
            'agents-runtime.md',
            'start/**/*.{md,mdx}',
            'guides/**/*.{md,mdx}',
            'deploy/**/*.{md,mdx}',
            'adapters/**/*.{md,mdx}',
            'api/**/*.{md,mdx}',
            'cli/**/*.{md,mdx}',
            'specs/**/*.{md,mdx}',
          ],
          editUrl: 'https://github.com/paperclipai/docs/edit/main/',
        },
        blog: false,
        pages: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'images/hero-light.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'Paperclip',
      logo: {
        alt: 'Paperclip',
        src: 'logo/light.svg',
        srcDark: 'logo/dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/start/quickstart',
          position: 'left',
          label: 'Quickstart',
        },
        {
          to: '/api/overview',
          position: 'left',
          label: 'API',
        },
        {
          href: 'https://github.com/paperclipai/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Start here',
          items: [
            {label: 'Overview', to: '/'},
            {label: 'What is Paperclip?', to: '/start/what-is-paperclip'},
            {label: 'Quickstart', to: '/start/quickstart'},
          ],
        },
        {
          title: 'Core docs',
          items: [
            {label: 'Guides', to: '/guides/board-operator/creating-a-company'},
            {label: 'Deploy', to: '/deploy/overview'},
            {label: 'Adapters', to: '/adapters/overview'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'API reference', to: '/api/overview'},
            {label: 'CLI', to: '/cli/overview'},
            {label: 'GitHub', href: 'https://github.com/paperclipai/docs'},
          ],
        },
      ],
      copyright: `Paperclip documentation · ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'yaml', 'toml'],
    },
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
