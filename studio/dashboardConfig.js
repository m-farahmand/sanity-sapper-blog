export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '61b891aab2e7db1c625b58fb',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-g4xq937z',
                  apiId: '3c1ecf56-f236-4081-a697-76b22fd13a89'
                },
                {
                  buildHookId: '61b891aa106a4516fc510551',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-iao8h3yg',
                  apiId: '06aeda8a-7a35-4e4c-a9e6-58c8219a7b9c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/m-farahmand/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-iao8h3yg.netlify.app', category: 'apps'}
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
