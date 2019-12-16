/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import { ThemeProvider } from 'emotion-theming'
import { theme } from '../utils/theme'
import styled from '@emotion/styled'
import { Footer } from "./footer"

const Main = styled.main``

const StyledPage = styled.div`
  display: grid;
  grid:
    [header] 60px [main-content] 1fr [footer] / [left-gutter] 15px [content] minmax(
      0,
      1fr
    )
    [right-gutter] 15px [end];

  @media (min-width: 576px) {
    grid: [header] 60px [main-content] 1fr [footer] / [left-gutter] minmax(
        0,
        1fr
      ) [content] minmax(0, 8fr) [right-gutter] minmax(0, 1fr) [end];
  }
  @media (min-width: 992px) {
    grid: [header] 60px [main-content] 1fr [footer] / [left-gutter] minmax(
        100px,
        2fr
      ) [content] minmax(auto, 970px) [right-gutter] minmax(100px, 2fr) [end];
  }
  min-height: 100vh;
  position: relative;
  > ${Main} {
    grid-column: content;
    grid-row: main-content;
    margin-top: 50px;
  }
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
    <ThemeProvider theme={theme}>
      <StyledPage>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Main>{children}</Main>
        <Footer/>
      </StyledPage>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
