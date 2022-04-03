import * as React from 'react';

import { List, ListItem } from '../components/List';

import { FestivalItem } from '../components/Festival';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => (
  <Layout>    
    <Seo title="Home" />
    <div>
      <p>Welcome to the Institute of Electronica. Your source for upcoming electronica events.</p>
      <h2>Upcoming Events</h2>
    </div>
    <List width={[1]} p={2}>
    {
      data.allContentfulRave.edges.map(edge => (
        <ListItem>
          <FestivalItem festivalEdge={edge} />
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
        date(formatString: "MMMM Do, YYYY")
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
        logo {
          gatsbyImageData
          (
            layout: CONSTRAINED
            width: 250
            height: 250
          )
        }
        slug
        link
      }
    }
  }
}
`