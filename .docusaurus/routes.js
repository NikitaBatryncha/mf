import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'bb0'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'c1d'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '03a'),
            routes: [
              {
                path: '/docs/tempo/md-install',
                component: ComponentCreator('/docs/tempo/md-install', '2db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', 'f90'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'cb9'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
