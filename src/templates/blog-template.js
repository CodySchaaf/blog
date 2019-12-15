import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import SEO from '../components/seo';
import Layout from '../components/layout';
import { css } from '@emotion/core';

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <h1
        css={css`
          margin-bottom: 0;
        `}
      >
        {mdx.frontmatter.title}
      </h1>
      <small
        css={css`
          display: block;
          margin-bottom: 30px;
        `}
      >
        {mdx.frontmatter.date}
      </small>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`;
