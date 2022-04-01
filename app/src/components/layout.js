/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';

import { Gray } from './themes/Gray';
import { Header } from './Header';
import GlobalStyle from './GlobalStyle';

import { Main } from './Main';
import { Footer } from './Footer';

const Content = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 0 1.0875rem 1.45rem;
    padding-top: 0;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <ThemeProvider theme={Gray}>
      <GlobalStyle /> 
      <Header siteTitle={data.site.siteMetadata.title } />
      <Content>
        <Main>{children}</Main> 
        <Footer>
            © { new Date().getFullYear() }, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
        </Footer>
      </Content>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
