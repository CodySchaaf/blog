import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import styled from '@emotion/styled'
import me from '../images/me.jpg'

const StyledP = styled.p`
  display: flex;
`

const About = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>About</h1>
    <StyledP>
      Hi! My name is Cody Schaaf. I’m a web developer, game maker, and
      technology enthusiast. I spend most of my time these days bouncing between
      different javascript libraries, Rails, and Scala, but I’m pretty language
      agnostic. My specialties at the moment are AngularJs and Scala. I enjoy
      nothing more than learning new languages and frameworks. Feel free to
      contact me with questions/comments/anything.
      <img src={me} alt="" width={200} height={200}/>
    </StyledP>
    <a href="http://www.codyschaaf.com">Check out my site.</a>
  </Layout>
)

export default About
