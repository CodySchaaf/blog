import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

import SEO from '../components/seo';

const shiftIn = keyframes`
  from {
    transform: translate3d(-50px,0px,0);
    opacity: 0;
  }
  
  to {
    transform: translate3d(0,0,0);
    opacity: 1;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  margin-left: 0;

  li {
    animation: ${shiftIn} 400ms ease-in;
  }
`;

const BlogIndex = () => {
  const {
    allMdx: { edges: posts },
  } = useStaticQuery(
    graphql`
      query blogIndex {
        allMdx (sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              excerpt
              frontmatter {
                title
                date(formatString: "MMMM Do, YYYY")
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  );

  return (
    <>
      <SEO title="Home" />
      <h1>Posts</h1>
      <StyledList>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
            <small>{post.frontmatter.date}</small>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </StyledList>
    </>
  );
};

export default BlogIndex;
