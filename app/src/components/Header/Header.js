import { H1 } from '../Heading';
import { Link } from 'gatsby';
import { LogoButton } from '../Button/LogoButton';
import PropTypes from 'prop-types';
import React from 'react';
import { Section } from '../Section';
import styled from 'styled-components';

const Outer = styled.header`
    background: ${({ theme }) => theme.variants.header.primary.backgroundColor};
    box-shadow:  ${({ theme }) => theme.variants.header.primary.boxShadow};
    margin-bottom: 1rem;
`

const Inner = styled.div`
    margin: 0px auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
`;

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    text-shadow: 1px 1px black;
    font-size: .75em;
    &:hover {
        color: #eba834;
    }
`

const Logo = styled(LogoButton)`
    margin-right: 1em !important;
`

const SubTitle = styled.div`
  font-size: .5em;
  padding-top: .75em;
  color: #eba834;
`

const Header = ({ siteTitle }) => (
    <Outer>  
        <Inner>
            <Section flex>
                <Section width={11/12}>
                    <H1>
                        <StyledLink to="/">
                            <Logo />  
                            { siteTitle }
                        </StyledLink>
                        <SubTitle>
                            Get the latest on upcoming electronica events
                        </SubTitle>
                    </H1>
                </Section>       
            </Section>    
        </Inner>
    </Outer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export { Header }