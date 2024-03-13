const config = {
  title: 'MULTIDIRECTORY',
  tagline: 'Готовое решение для аутентификации и авторизации',
  favicon: 'img/favicon.ico',
  url: 'https://github.com',
  baseUrl: '/mf/',

  organizationName: 'NikitaBatryncha',
  projectName: '/mf/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'deployment',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: ['docusaurus-plugin-sass'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.sass'),
        },
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
      },
    ],

  ],

  themeConfig:
    ({
      styles: [
        'src/custom.css',
      ],
      navbar: {
        items: [
          {to: '/blog', label: 'О нас', position: 'left'},
          {
            to: '/docs/tempo/md-install',
            position: 'left',
            label: 'Документация',
          },
          {to: 'tel:+74994440882', label: '+7 499 444 08 82', position: 'left'},
          {
            type: 'html',
            value: '<img src="mf/img/logo-documents.png"/>',
          },
          {
            type: 'html',
            position: 'right',
            value: '<a href="https://t.me/tg" class="nav__link--tg">Подписаться<a/>',
          },
          {
            type: 'html',
            position: 'right',
            value: '<button class="nav__link--download">Загрузить последнюю версию</button>',
          },
        ],

      },
      footer: {
        links: [
          {
            items: [
              {
                html: `<a href="#" class="link logo__link">
                <img src="mf/img/footer-logo.svg" alt="logo" class="logo footer__logo" />
              </a>
              <div class={author}>
                <a href="https://multifactor.ru" target="_blank" class="link author__link">
                  <img src="/img/creator.svg" alt="" class="author__img author__imgDesktop" />

                </a>
              </div>
              <div class="footer__socials footer__socials">
                <a href="" alt="social__link--tg" class="footer__social footer__socialTg">
                  <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_253_16819)">
                      <path d="M16 0.425781C7.168 0.425781 0 7.59378 0 16.4258C0 25.2578 7.168 32.4258 16 32.4258C24.832 32.4258 32 25.2578 32 16.4258C32 7.59378 24.832 0.425781 16 0.425781ZM23.424 11.3058C23.184 13.8338 22.144 19.9778 21.616 22.8098C21.392 24.0098 20.944 24.4098 20.528 24.4578C19.6 24.5378 18.896 23.8498 18 23.2578C16.592 22.3298 15.792 21.7538 14.432 20.8578C12.848 19.8178 13.872 19.2418 14.784 18.3138C15.024 18.0738 19.12 14.3458 19.2 14.0098C19.2111 13.9589 19.2096 13.9061 19.1957 13.8559C19.1818 13.8057 19.1558 13.7597 19.12 13.7218C19.024 13.6418 18.896 13.6738 18.784 13.6898C18.64 13.7218 16.4 15.2098 12.032 18.1538C11.392 18.5858 10.816 18.8098 10.304 18.7938C9.728 18.7778 8.64 18.4738 7.824 18.2018C6.816 17.8818 6.032 17.7058 6.096 17.1458C6.128 16.8578 6.528 16.5698 7.28 16.2658C11.952 14.2338 15.056 12.8898 16.608 12.2498C21.056 10.3938 21.968 10.0738 22.576 10.0738C22.704 10.0738 23.008 10.1058 23.2 10.2658C23.36 10.3938 23.408 10.5698 23.424 10.6978C23.408 10.7938 23.44 11.0818 23.424 11.3058Z" fill="" />
                      <path d="M23.424 11.3058C23.184 13.8338 22.144 19.9778 21.616 22.8098C21.392 24.0098 20.944 24.4098 20.528 24.4578C19.6 24.5378 18.896 23.8498 18 23.2578C16.592 22.3298 15.792 21.7538 14.432 20.8578C12.848 19.8178 13.872 19.2418 14.784 18.3138C15.024 18.0738 19.12 14.3458 19.2 14.0098C19.2111 13.9589 19.2096 13.9061 19.1957 13.8559C19.1818 13.8057 19.1558 13.7597 19.12 13.7218C19.024 13.6418 18.896 13.6738 18.784 13.6898C18.64 13.7218 16.4 15.2098 12.032 18.1538C11.392 18.5858 10.816 18.8098 10.304 18.7938C9.728 18.7778 8.64 18.4738 7.824 18.2018C6.816 17.8818 6.032 17.7058 6.096 17.1458C6.128 16.8578 6.528 16.5698 7.28 16.2658C11.952 14.2338 15.056 12.8898 16.608 12.2498C21.056 10.3938 21.968 10.0738 22.576 10.0738C22.704 10.0738 23.008 10.1058 23.2 10.2658C23.36 10.3938 23.408 10.5698 23.424 10.6978C23.408 10.7938 23.44 11.0818 23.424 11.3058Z" fill="white" />
                      <path d="M16 0.425781C7.168 0.425781 0 7.59378 0 16.4258C0 25.2578 7.168 32.4258 16 32.4258C24.832 32.4258 32 25.2578 32 16.4258C32 7.59378 24.832 0.425781 16 0.425781ZM23.424 11.3058C23.184 13.8338 22.144 19.9778 21.616 22.8098C21.392 24.0098 20.944 24.4098 20.528 24.4578C19.6 24.5378 18.896 23.8498 18 23.2578C16.592 22.3298 15.792 21.7538 14.432 20.8578C12.848 19.8178 13.872 19.2418 14.784 18.3138C15.024 18.0738 19.12 14.3458 19.2 14.0098C19.2111 13.9589 19.2096 13.9061 19.1957 13.8559C19.1818 13.8057 19.1558 13.7597 19.12 13.7218C19.024 13.6418 18.896 13.6738 18.784 13.6898C18.64 13.7218 16.4 15.2098 12.032 18.1538C11.392 18.5858 10.816 18.8098 10.304 18.7938C9.728 18.7778 8.64 18.4738 7.824 18.2018C6.816 17.8818 6.032 17.7058 6.096 17.1458C6.128 16.8578 6.528 16.5698 7.28 16.2658C11.952 14.2338 15.056 12.8898 16.608 12.2498C21.056 10.3938 21.968 10.0738 22.576 10.0738C22.704 10.0738 23.008 10.1058 23.2 10.2658C23.36 10.3938 23.408 10.5698 23.424 10.6978C23.408 10.7938 23.44 11.0818 23.424 11.3058Z" fill="#2E3D64" />
                    </g>
                    <defs>
                      <clipPath id="clip0_253_16819">
                        <rect y="0.425781" width="32" height="32" rx="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="" alt="social__link--vk" class="footer__social footer__socialVk">
                  <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_253_16822)">
                      <path d="M16 32.4258C24.8366 32.4258 32 25.2623 32 16.4258C32 7.58923 24.8366 0.425781 16 0.425781C7.16344 0.425781 0 7.58923 0 16.4258C0 25.2623 7.16344 32.4258 16 32.4258Z" fill="#2E3D64"/>
                      <path d="M16.2972 22.0359C9.93903 22.0359 6.31377 17.6856 6.16504 10.4351H9.3627C9.46495 15.7521 11.8074 18.0016 13.6665 18.4664V10.4351H16.669V15.0178C18.5002 14.8226 20.4337 12.7311 21.0844 10.4258H24.0775C23.8335 11.6191 23.346 12.7493 22.6454 13.7457C21.9449 14.7421 21.0464 15.5834 20.0061 16.2169C21.167 16.7947 22.1923 17.6121 23.0143 18.6151C23.8362 19.6182 24.4362 20.784 24.7747 22.0359H21.4748C20.7683 19.8329 19.0022 18.1225 16.669 17.8901V22.0359H16.3065H16.2972Z" fill="white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_253_16822">
                        <rect y="0.425781" width="32" height="32" rx="16" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="" alt="social__link--yt" class="footer__social footer__socialYt">
                  <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_253_16825)">
                      <path d="M16 32.4258C24.8366 32.4258 32 25.2623 32 16.4258C32 7.58923 24.8366 0.425781 16 0.425781C7.16344 0.425781 0 7.58923 0 16.4258C0 25.2623 7.16344 32.4258 16 32.4258Z" fill="#2E3D64"/>
                      <path d="M15.9944 10.4258C15.9944 10.4258 10.3687 10.4258 8.9567 10.7753C8.20067 10.9765 7.57815 11.5696 7.3669 12.3004C7.00001 13.6455 7 16.4311 7 16.4311C7 16.4311 7.00001 19.2272 7.3669 20.5512C7.57815 21.282 8.18956 21.8644 8.9567 22.0657C10.3798 22.4258 15.9944 22.4258 15.9944 22.4258C15.9944 22.4258 21.6313 22.4258 23.0433 22.0763C23.8104 21.875 24.4218 21.3032 24.6219 20.5618C25 19.2272 25 16.4417 25 16.4417C25 16.4417 25.0111 13.6455 24.6219 12.3004C24.4218 11.5696 23.8104 10.9871 23.0433 10.7965C21.6313 10.4258 15.9944 10.4258 15.9944 10.4258ZM14.2044 13.8574L18.8852 16.4311L14.2044 18.9941V13.8574Z" fill="white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_253_16825">
                        <rect y="0.425781" width="32" height="32" rx="16" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>`
              },
            ],
          },
          {
            title: 'Компания',
            items: [
              {
                label: 'O нас',
                to: '/docs/tempo/md-install',
              },
              {
                label: 'История создания',
                to: '/docs/tempo/md-install',
              },
              {
                label: 'Документация',
                to: '/docs/tempo/md-install',
              },
              {
                label: 'Контакты и реквизиты',
                to: '/docs/tempo/md-install',
              },
            ],
          },
          {
            title: 'Юридическая информация',
            items: [
              {
                label: 'Оферта',
                to: '/docs/tempo/md-install',
              },
              {
                label: 'Политика конфиденциальности',
                to: '/docs/tempo/md-install',
              },
              {
                label: 'Оплата и возврат',
                to: '/docs/tempo/md-install',
              },
            ],
          },
          {
            title: 'Связаться с нами',
            items: [
              {
                label: '+7 499 444 08 82',
                href: 'tel:+74994440882',
              },
              {
                label: 'sales@multifactor.ru',
                href: 'mailto:sales@multifactor.ru',
              },
              {
                label: 'support@multifactor.ru',
                href: 'mailto:support@multifactor.ru',
              },
            ],
          },
        ],
        copyright: `<p class="legal__copyrights">© ${new Date().getFullYear()} MultiDirectory. Все права защищены</div><div class="flex legal__wrapper">
        <a href="" class="legal__link">Соглашение об использовании сайта</a>
        <span class="dot">•</span>
        <a href="" class="legal__link">Политика обработки персональных данных</a>
        <span class="dot">•</span>
        <a href="" class="legal__link">Правила использования сайта</a>
      </div>`,
      },
    }
  )
};

export default config;
