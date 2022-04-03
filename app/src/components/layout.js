import * as React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';

import { Footer } from './Footer';
import GlobalStyle from './GlobalStyle';
import { Gray } from './themes/Gray';
import { Header } from './Header';
import { Main } from './Main';
import PropTypes from 'prop-types';

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
            © { new Date().getFullYear() }, Built by
            {` `}
            <a href="https://www.sofdigital.net">Sof Digital</a>
            <br/>
            <p>Festival content brought to you by Wikipedia</p>
        </Footer>
      </Content>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
