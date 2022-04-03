import { Box } from 'rebass';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import React from 'react';
import Seo from '../components/seo';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  padding: 1em;
  margin-bottom: 1.5em;
  box-shadow: 1px 1px 1px 1px #5c5b59;
`

const FestivalHeading = styled.h1`
  color: gray;
  text-shadow: 1px 1px black;
  padding: 0;
  margin: 0;
`

const FestivalDetail = styled.div`
  font-size: 1.25em;
  padding-top: .25em;
  padding-bottom: .25em;

`

const FestivalDescription = styled.div`
  padding-top: .5em;
  padding-bottom: .5em;
`

const DetailContainer = styled(Box)`
    padding-top: 1em;
    &:after {
        content: "";
        display: table;
        clear: both;
    }
`

const DetailDescription = styled.div`   
    float: left;
    width: 50%;
    font-size: 1em;
    padding-right: .5em;
    padding-left: .5em;
`

const DetailImage = styled.div` 
    float: right;
    width: 50%;
    text-align: center;
`

const DetailHeading = styled.div`
  color: #696969;
  font-size: 1.5em;
  padding-top: .25em;
  padding-bottom: .25em;
`

const FestivalLink = styled(Link)`
    color: #eba834;
    text-decoration: none;
`

const Festival = ({ data }) => {
    const { name, location, date, lineup, description, image, link} = data.contentfulRave;
    return (
      <Layout>  
        <Seo title={name} />
        <Container>
            <FestivalHeading>{name}</FestivalHeading>
            <DetailContainer>
                <DetailDescription>
                    <FestivalDetail>{ date ? date : "To be announced" }</FestivalDetail>            
                    <FestivalDetail>{location}</FestivalDetail>
                    <FestivalDetail>
                      <FestivalLink to={link}>{link}</FestivalLink>
                    </FestivalDetail>
                    <FestivalDescription>{description.childMarkdownRemark.rawMarkdownBody}</FestivalDescription>
                    <DetailHeading>Line up</DetailHeading>
                    <p>{lineup.childMarkdownRemark.rawMarkdownBody}</p>
                </DetailDescription>
                <DetailImage>
                    <GatsbyImage
                        image={image.gatsbyImageData}
                        alt={name}/>
                </DetailImage>
            </DetailContainer> 
        </Container>      
      </Layout>
    );
}

export default Festival;

export const pageQuery = graphql`
query raveQuery($slug: String) {
    contentfulRave(slug: {eq: $slug}) {
        name
        location
        date(formatString: "MMMM Do, YYYY")
        lineup {
          lineup
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
        description {
          description
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
        image {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 400)
        }
        slug
        link
    }
}
`