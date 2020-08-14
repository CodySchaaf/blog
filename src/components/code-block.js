import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import oceanicNext from 'prism-react-renderer/themes/duotoneLight'
import styled from '@emotion/styled';
/* eslint-disable no-unused-vars */
import { mdx } from '@mdx-js/react';
import { color } from '../utils/theme';

const Title = styled.div`
  background-color: ${color('lightWash')}
  
  ~ pre {
    border-top-left-radius: 0;    
    border-top-right-radius: 0;    
  }
`;

export const CodeBlock = ({
  children, className, live, render, title,
}) => {
  const language = className.replace(/language-/, '');

  // import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live'
  // if (live) {
  //   return (
  //     <div style={{marginTop: '40px', backgroundColor: 'black'}}>
  //       <LiveProvider
  //         code={children.trim()}
  //         transformCode={code => '/** @jsx mdx */' + code}
  //         scope={{mdx}}
  //       >
  //         <LivePreview />
  //         <LiveEditor />
  //         <LiveError />
  //       </LiveProvider>
  //
  //   )
  // }

  // if (render) {
  //   return (
  //     <div style={{marginTop: '40px'}}>
  //       <LiveProvider code={children}>
  //         <LivePreview />
  //       </LiveProvider>
  //
  //   )
  // }

  return (
    <>
      {title ? <Title>{title.replace(/\\/g, ' ')}</Title> : null}
      <Highlight {...defaultProps} code={children.trim()} language={language} theme={oceanicNext}>
        {({
          className, style, tokens, getLineProps, getTokenProps,
        }) => (
          <pre className={className} style={{ ...style, padding: '20px' }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </>
  );
};
