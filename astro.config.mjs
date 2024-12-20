import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import tailwind from '@astrojs/tailwind';
import liveCode from 'astro-live-code';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
  site: 'https://dragomano.github.io/htmx-russian',
  base: '/htmx-russian/',
  integrations: [
    starlight({
      plugins: [
        starlightLinksValidator({
          errorOnRelativeLinks: false,
        }),
      ],
      title: 'htmx по-русски',
      description: 'Документация htmx на русском языке.',
      head: [],
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Русский',
          lang: 'ru',
        },
      },
      components: {
        LastUpdated: './src/components/LastUpdated.astro',
        SocialIcons: './src/components/SocialIcons.astro',
      },
      customCss: ['./src/styles/custom.css'],
      expressiveCode: {
        themes: ['dracula', 'slack-ochin'],
        styleOverrides: {
          borderRadius: '0.5rem',
          frames: {
            shadowColor: '#124',
          },
        },
      },
      logo: {
        dark: './src/assets/dark_logo.svg',
        light: './src/assets/logo.svg',
        replacesTitle: true,
        alt: 'Логотип htmx',
      },
      social: {
        github: 'https://github.com/dragomano/htmx-russian',
      },
      editLink: {
        baseUrl: 'https://github.com/dragomano/htmx-russian/edit/main/',
      },
      sidebar: [
        {
          label: 'Введение',
          link: 'introduction',
        },
        {
          label: 'Установка',
          link: 'installing',
        },
        {
          label: 'Конфигурация',
          link: 'config',
        },
        {
          label: 'AJAX',
          collapsed: true,
          autogenerate: {
            directory: 'ajax',
          },
        },
        {
          label: 'Атрибуты',
          collapsed: false,
          autogenerate: {
            directory: 'attributes',
          },
        },
        {
          label: 'Обучающие статьи и ролики',
          link: 'learning',
        },
      ],
    }),
    liveCode({
      layout: '@components/LiveCode.astro',
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  markdown: {
    rehypePlugins: [
      rehypeHeadingIds,
      [
        rehypeAutolinkHeadings,
        {
          // Wrap the heading text in a link.
          behavior: 'wrap',
        },
      ],
    ],
  },
});
