import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import starlightThemeNova from 'starlight-theme-nova';
import starlightSidebarTopics from 'starlight-sidebar-topics';

// https://astro.build/config
export default defineConfig({
  site: 'https://htmx.dragomano.ru',
  integrations: [
    starlight({
      plugins: [
        starlightLinksValidator({
          errorOnRelativeLinks: false,
        }),
        starlightThemeNova({
          nav: [
            {
              label: 'Атрибуты',
              href: '/attributes/hx-boost',
            },
            {
              label: 'API',
              href: '/api',
            },
          ]
        }),
        starlightSidebarTopics(
          [
            {
              label: 'Основы',
              link: '/introduction',
              icon: 'open-book',
              items: [
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
                  label: 'Наследование атрибутов',
                  link: 'inheritance',
                },
                {
                  label: 'Запросы и ответы',
                  link: 'requests',
                },
                {
                  label: 'Валидация',
                  link: 'validation',
                },
                {
                  label: 'Расширения',
                  link: 'extensions',
                },
                {
                  label: 'Обучающие статьи и ролики',
                  link: 'learning',
                },
              ],
            },
            {
              id: 'ajax',
              label: 'AJAX',
              link: '/ajax',
              icon: 'seti:css',
              items: [
                {
                  label: 'AJAX',
                  autogenerate: { directory: 'ajax' },
                },
              ],
            },
            {
              id: 'attributes',
              label: 'Атрибуты',
              link: '/attributes/hx-boost',
              icon: 'seti:vala',
              items: [
                {
                  label: 'Список',
                  autogenerate: { directory: 'attributes' },
                },
              ],
            },
            {
              id: 'api',
              label: 'API',
              link: '/api',
              icon: 'seti:config',
              items: [
                {
                  label: 'Методы',
                  autogenerate: { directory: 'api' },
                },
              ],
            },
          ],
          {
            exclude: ['/404'],
          },
        ),
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
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/dragomano/htmx-russian' },
      ],
      editLink: {
        baseUrl: 'https://github.com/dragomano/htmx-russian/edit/main/',
      },
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
