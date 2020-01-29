export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e3217f7e5dc6ce350d74659',
                  title: 'Sanity Studio',
                  name: 'portfolio-in-gatsby-studio',
                  apiId: 'c6acf535-e49b-468c-ae85-7c6232064a6a'
                },
                {
                  buildHookId: '5e3217f84b591743de3cb6a0',
                  title: 'Portfolio Website',
                  name: 'portfolio-in-gatsby',
                  apiId: '4a17059b-371b-47c2-8824-79c650a1d9b5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thedtj/portfolio-in-gatsby',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://portfolio-in-gatsby.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
