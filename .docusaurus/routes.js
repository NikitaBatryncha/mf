import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/mf/__docusaurus/debug',
    component: ComponentCreator('/mf/__docusaurus/debug', '280'),
    exact: true
  },
  {
    path: '/mf/__docusaurus/debug/config',
    component: ComponentCreator('/mf/__docusaurus/debug/config', 'd25'),
    exact: true
  },
  {
    path: '/mf/__docusaurus/debug/content',
    component: ComponentCreator('/mf/__docusaurus/debug/content', '9e7'),
    exact: true
  },
  {
    path: '/mf/__docusaurus/debug/globalData',
    component: ComponentCreator('/mf/__docusaurus/debug/globalData', '59e'),
    exact: true
  },
  {
    path: '/mf/__docusaurus/debug/metadata',
    component: ComponentCreator('/mf/__docusaurus/debug/metadata', 'ef7'),
    exact: true
  },
  {
    path: '/mf/__docusaurus/debug/registry',
    component: ComponentCreator('/mf/__docusaurus/debug/registry', '4b3'),
    exact: true
  },
  {
    path: '/mf/__docusaurus/debug/routes',
    component: ComponentCreator('/mf/__docusaurus/debug/routes', 'dcb'),
    exact: true
  },
  {
    path: '/mf/blog',
    component: ComponentCreator('/mf/blog', 'd5d'),
    exact: true
  },
  {
    path: '/mf/blog/archive',
    component: ComponentCreator('/mf/blog/archive', '2e3'),
    exact: true
  },
  {
    path: '/mf/blog/first-blog-post',
    component: ComponentCreator('/mf/blog/first-blog-post', '3a0'),
    exact: true
  },
  {
    path: '/mf/blog/long-blog-post',
    component: ComponentCreator('/mf/blog/long-blog-post', 'fd5'),
    exact: true
  },
  {
    path: '/mf/blog/mdx-blog-post',
    component: ComponentCreator('/mf/blog/mdx-blog-post', '36d'),
    exact: true
  },
  {
    path: '/mf/blog/tags',
    component: ComponentCreator('/mf/blog/tags', '1ca'),
    exact: true
  },
  {
    path: '/mf/blog/tags/docusaurus',
    component: ComponentCreator('/mf/blog/tags/docusaurus', '642'),
    exact: true
  },
  {
    path: '/mf/blog/tags/facebook',
    component: ComponentCreator('/mf/blog/tags/facebook', 'daf'),
    exact: true
  },
  {
    path: '/mf/blog/tags/hello',
    component: ComponentCreator('/mf/blog/tags/hello', '05c'),
    exact: true
  },
  {
    path: '/mf/blog/tags/hola',
    component: ComponentCreator('/mf/blog/tags/hola', 'c22'),
    exact: true
  },
  {
    path: '/mf/blog/welcome',
    component: ComponentCreator('/mf/blog/welcome', 'f55'),
    exact: true
  },
  {
    path: '/mf/docs',
    component: ComponentCreator('/mf/docs', 'eb7'),
    routes: [
      {
        path: '/mf/docs',
        component: ComponentCreator('/mf/docs', '612'),
        routes: [
          {
            path: '/mf/docs',
            component: ComponentCreator('/mf/docs', 'cbb'),
            routes: [
              {
                path: '/mf/docs/intro',
                component: ComponentCreator('/mf/docs/intro', 'a26'),
                exact: true
              },
              {
                path: '/mf/docs/tempo/md-install',
                component: ComponentCreator('/mf/docs/tempo/md-install', '96d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mf/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/mf/docs/tutorial-basics/congratulations', 'd0c'),
                exact: true
              },
              {
                path: '/mf/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/mf/docs/tutorial-basics/create-a-blog-post', '0de'),
                exact: true
              },
              {
                path: '/mf/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/mf/docs/tutorial-basics/create-a-document', '4d0'),
                exact: true
              },
              {
                path: '/mf/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/mf/docs/tutorial-basics/create-a-page', '402'),
                exact: true
              },
              {
                path: '/mf/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/mf/docs/tutorial-basics/deploy-your-site', 'cb1'),
                exact: true
              },
              {
                path: '/mf/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/mf/docs/tutorial-basics/markdown-features', '4d7'),
                exact: true
              },
              {
                path: '/mf/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/mf/docs/tutorial-extras/manage-docs-versions', '0b2'),
                exact: true
              },
              {
                path: '/mf/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/mf/docs/tutorial-extras/translate-your-site', '5ff'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/mf/',
    component: ComponentCreator('/mf/', '380'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
