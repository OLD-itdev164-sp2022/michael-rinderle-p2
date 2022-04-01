import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { H1 } from '../components/Heading';

const Festival = ({ data }) => {
    
    const { name, location, date, lineup,
     description, image, slug, link} = data.contentfulRave;

    return (
        <Layout>
            <H1>{title}</H1>
            
        </Layout>
    );
}

export default Festival;

export const pageQuery = graphql`
query raveQuery($slug: String) {
    contentfulRave(slug: {eq: $slug}) {
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
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 450)
        }
        slug
        link
    }
}
`