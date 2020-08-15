import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { css } from '@emotion/core';
import { MDXProvider } from '@mdx-js/react';
import { DiscussionEmbed } from 'disqus-react';
import LazyLoad from 'react-lazyload';

import SEO from '../components/seo';
import { CodeBlock } from '../components/code-block';

export default function PageTemplate({ data: { mdx } }) {
  const components = {
    /* eslint-disable jsx-a11y/heading-has-content */
    h1: (props) => <h1 style={{ color: 'tomato' }} {...props} />,
    code: CodeBlock,
  };

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: mdx.slug, title: mdx.frontmatter.title },
  };

  return (
    <>
      <SEO title={mdx.frontmatter.title} article tags={mdx.frontmatter.tags} />
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
      <MDXProvider components={components}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
      <LazyLoad height={672} offset={150}>
        <DiscussionEmbed {...disqusConfig} />
      </LazyLoad>
    </>
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
        tags
      }
    }
  }
`;
