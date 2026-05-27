import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Sri Lanka Transit Demand Forecasting',
  tagline: 'A data-driven approach to passenger demand forecasting for public transport in Sri Lanka',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'ucsc-research',
  projectName: 'transit-demand-forecasting',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Transit Demand Forecasting',
      logo: {
        alt: 'Research Project Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'researchSidebar',
          position: 'left',
          label: 'Research',
        },
        {to: '/blog', label: 'Progress Updates', position: 'left'},
        {
          href: 'https://github.com/ucsc-research/transit-demand-forecasting',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Research',
          items: [
            {label: 'Overview', to: '/docs/intro'},
            {label: 'Methodology', to: '/docs/research/methodology/overview'},
            {label: 'Data Sources', to: '/docs/data/overview'},
          ],
        },
        {
          title: 'Methods',
          items: [
            {label: 'Model Comparison', to: '/docs/methods/overview'},
            {label: 'Evaluation Plan', to: '/docs/methods/evaluation'},
          ],
        },
        {
          title: 'Project',
          items: [
            {label: 'Timeline & Progress', to: '/docs/progress'},
            {label: 'Progress Updates', to: '/blog'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} University of Colombo School of Computing — IS4101 Final Year Research Project. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
