const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return new Promise((resolve, reject) => {
        graphql(`
          {
            allContentfulRave {
              edges {
                node {
                  slug
                  name
                  id
                }
              }
            }
          }
    `).then(result => {
            if (result.errors) {
                reject(result.errors);
            }
            result.data.allContentfulRave.edges.forEach((edge) => {
                createPage({
                    path: edge.node.slug,
                    component: path.resolve(`./src/templates/festival.js`),
                    context: {
                        slug: edge.node.slug
                    }
                })
            })
            resolve();
        })
    });
};