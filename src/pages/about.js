import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import styled from '@emotion/styled'
import Image from "../components/image"
import { mq } from "../utils/theme"

const StyledContainer = styled.div`
  display: flex;
  ${mq({flexDirection: ['column-reverse', 'row']})}
`

const StyledImage = styled(Image)`
  min-width: 200px;
  ${mq({marginLeft: ['0px', '10px']})}
  ${mq({marginBottom: ['10px', '0px']})}
`

const About = () => (
  <Layout>
    <SEO title="About!" />
    <h1>About</h1>
    <StyledContainer>
      <p>
        Hi! My name is Cody Schaaf. I’m a web developer, game maker, and
        technology enthusiast. I spend most of my time these days bouncing between different JavaScript frameworks, but I’m pretty language
        agnostic. My specialties at the moment are React and Redux, with a side of Angular when the project suits it. I enjoy
        nothing more than learning new languages and frameworks. Feel free to
        contact me with questions/comments/anything.
      </p>
      <StyledImage></StyledImage>
    </StyledContainer>
    <a href="http://www.codyschaaf.com">Check out my site.</a>
  </Layout>
)

export default About
