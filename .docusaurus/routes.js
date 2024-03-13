import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    path: '*',
    component: ComponentCreator('*'),
  },
];
