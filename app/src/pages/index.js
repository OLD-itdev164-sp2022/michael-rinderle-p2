import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
import { List, ListItem } from '../components/List';

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
        <List width={[1, 1 / 2, 2 / 3]} p={2}>
        {
          data.allContentfulRave.edges.map(edge => (
              <ListItem p={3}>
                  <Link to={edge.node.slug} key={edge.node.id}>{edge.node.name}</Link>
                  <div>
                    <GatsbyImage
                      image={edge.node.image.gatsbyImageData}
                      alt="test"
                    />
                  </div>
                  <div>
                    {edge.node.description.childMarkdownRemark.rawMarkdownBody}
                  </div>
              </ListItem>
          ))
        }
        </List>
  </Layout>
)

export default IndexPage

export const query = graphql`
{
  allContentfulRave(sort: {order: ASC, fields: date}) {
    edges {
      node {
        name
        location
        date
        lineup {
          childrenMarkdownRemark {
            html
          }
        }
        description {
          description
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
        image {
          gatsbyImageData(width: 300)
        }
        slug
        link
      }
    }
  }
}
`