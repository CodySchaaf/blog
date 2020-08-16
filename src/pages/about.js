import React from 'react';
import styled from '@emotion/styled';

import SEO from '../components/seo';
import Image from '../components/image';
import { mq } from '../utils/theme';

const StyledContainer = styled.div`
  display: flex;
  ${mq({ flexDirection: ['column-reverse', 'row'] })}
`;

const StyledImage = styled(Image)`
  min-width: 200px;
  ${mq({ marginLeft: ['0px', '10px'] })}
  ${mq({ marginBottom: ['10px', '0px'] })}
`;

const About = () => (
  <>
    <SEO title="About!" />
    <h1>About</h1>
    <StyledContainer>
      <p>
        Hi! My name is Cody Schaaf. I’m a web developer, mountain biker, and
        general JavaScript enthusiast. I spend most of my time these days
        working with React and TypeScript, but I also enjoy Svelte, Vue, and
        Gatsby. I love creating engaging user experiences, especially with
        complex JavaScript animations. I enjoy nothing more than learning new
        languages and frameworks. Feel free to contact me with
        questions/comments/anything.
      </p>
      <StyledImage />
    </StyledContainer>
    <a href="http://www.codyschaaf.com">Check out my site.</a>
  </>
);

export default About;
