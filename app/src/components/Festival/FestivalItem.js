import { BaseContainer } from '../BaseContainer';
import { Box } from 'rebass';
import { CursorClick } from '@styled-icons/fluentui-system-filled/CursorClick';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: white;
    padding: 1em;
    box-shadow: 1px 1px 1px 1px #5c5b59;
`;

const Header = styled.div`
    font-size: 1.5em;
    text-align: center;
    padding: 1em;
    padding-bottom: 2em;
`;

const DetailContainer = styled(Box)`
    &:after {
        content: "";
        display: table;
        clear: both;
    }
`

const DetailDescription = styled.div`   
    padding-left: 1em;
    float: left;
    width: 50%;
    font-size: 1em;
`

const DetailImage = styled.div` 
    float: right;
    width: 50%;
    text-align: center;
`

const FestivalLink = styled(Link)`
    border-radius: 1em;
    color: white;
    text-decoration: none;
    background-color: #696969;
    // margin: .5em;
    padding: .5em;
    padding-right: 1em;
    text-shadow: 1px 1px black;
    font-size: 1em;
    &:hover {
        color: #eba834;
        text-shadow: none;
    }
`

const Cursor = styled(CursorClick)`
    height: 1.5em;
    padding-right: 1em;
`

export const FestivalItem = ({ festivalEdge }) => (
    <BaseContainer as="div">
        <Container>
            <Header>
                {festivalEdge.node.name}
            </Header>
            <DetailContainer>
                <DetailDescription>
                    <h4>
                    { festivalEdge.node.date ? festivalEdge.node.date : "To be announced" }
                    </h4>
                    <p>{festivalEdge.node.description.childMarkdownRemark.rawMarkdownBody}</p>
                    <FestivalLink to={festivalEdge.node.slug} key={festivalEdge.node.id}>
                        <Cursor/>
                        Learn More
                    </FestivalLink>
                </DetailDescription>
                <DetailImage>
                    <GatsbyImage
                        image={festivalEdge.node.logo.gatsbyImageData}
                        alt={festivalEdge.node.name}/>
                </DetailImage>
            </DetailContainer> 
        </Container>
    </BaseContainer>
);

FestivalItem.propTypes = {
    festivalEdge: PropTypes.object.isRequired
}