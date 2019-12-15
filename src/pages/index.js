import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import styled from '@emotion/styled';
import SEO from '../components/seo';

const StyledList = styled.ul`
  list-style: none;
  margin-left: 0;
`;

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx;

  return (
    <Layout>
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
    </Layout>
  );
};

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
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

export default BlogIndex;
