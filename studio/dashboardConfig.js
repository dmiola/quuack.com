export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f6bab31689e3d22bfe1e4f1',
                  title: 'Sanity Studio',
                  name: 'quuack-com-studio',
                  apiId: '8652f6af-dffa-4113-9944-f2f42b79e0bb'
                },
                {
                  buildHookId: '5f6bab319e294b2ae875d111',
                  title: 'Blog Website',
                  name: 'quuack-com',
                  apiId: 'bcf0559b-a762-4a1e-bd9a-2dcc511cbbe7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dmiola/quuack.com',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://quuack-com.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
