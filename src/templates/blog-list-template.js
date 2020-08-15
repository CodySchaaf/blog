import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { useTheme } from 'emotion-theming';

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

const StyledPaginator = styled.div`
  display: flex;
  margin-top: auto;
  justify-content: center;
  > * {
    margin-left: 15px;
    margin-right: 15px;
  }
`;

const StyledDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const BlogIndex = ({
  data: {
    allMdx: { edges: posts },
  },
  pageContext: { currentPage, numPages },
}) => {
  const theme = useTheme();

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  return (
    <StyledDiv>
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
      <StyledPaginator>
        {!isFirst ? (
          <Link to={prevPage} rel="prev">
            ← Previous Page
          </Link>
        ) : (
          <span css={{ color: theme.palette.text.secondary }}>← Previous</span>
        )}
        {Array.from({ length: numPages }, (_, i) => (currentPage === i + 1 ? (
          <span key={`pagination-number${i + 1}`} css={{ color: theme.palette.text.secondary }}>{i + 1}</span>
        ) : (
          <Link key={`pagination-number${i + 1}`} to={`/${i === 0 ? '' : i + 1}`}>
            {i + 1}
          </Link>
        )))}
        {!isLast ? (
          <Link to={nextPage} rel="next">
            Next →
          </Link>
        ) : (
          <span css={{ color: theme.palette.text.secondary }}>Next Page →</span>
        )}
      </StyledPaginator>
    </StyledDiv>
  );
};

export default BlogIndex;

export const blogIndex = graphql`
  query blogIndex($skip: Int!, $limit: Int!) {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip) {
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
`;
