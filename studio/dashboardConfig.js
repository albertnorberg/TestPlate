export default {
  widgets: [
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
                  buildHookId: '5fddb5065687bdcfffef2c18',
                  title: 'Sanity Studio',
                  name: 'testplate-studio',
                  apiId: '87392aea-8e86-49b6-bab4-2112844b3a44'
                },
                {
                  buildHookId: '5fddb50688a7e5cb8cc19999',
                  title: 'Blog Website',
                  name: 'testplate',
                  apiId: 'c86d52ca-6939-4a1b-9279-9410e6a6f73c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/albertnorberg/TestPlate',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://testplate.netlify.app', category: 'apps'}
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
