export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f65f6ec6ac815824d3ec80c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-oisrbjpy',
                  apiId: '8268f709-5eb5-45d8-b66b-b413d9b1068f'
                },
                {
                  buildHookId: '5f65f6eca599959259b99bd9',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-za6nm6od',
                  apiId: '0078589f-ad52-46b6-be69-b46e91dca4b2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Alejopdp/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-za6nm6od.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
