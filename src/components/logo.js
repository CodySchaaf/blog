import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const animate = keyframes`
0% {
     d: path("M880 192c68 70.43 100.71 210 81 264s-131 91.29-226 132-189.71 48.43-239 29-92.86-70.14-118-168c-25-97.71-27-190.86 9-254 36-63.29 129.71-109.14 215-94s210 20.43 278 91z")
}
100% {
      d: path("M820 232c68 70.43 160.71 170 141 224s-152 64.29-247 105-181.71 126.43-231 107-42.86-129.14-68-227c-25-97.71-89-197.86-53-261 36-63.29 154.71-99.14 240-84s150 65.43 218 136z")
}
`;

const StyledSvg = styled.svg`
  path {
    animation: ${animate} 2s alternate ease-in-out infinite;
  }
`;

export const Logo = ({ className }) => (
  <StyledSvg className={className} data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 768">
    <path
      d="M880 192c68 70.43 100.71 210 81 264s-131 91.29-226 132-189.71 48.43-239 29-92.86-70.14-118-168c-25-97.71-27-190.86 9-254 36-63.29 129.71-109.14 215-94s210 20.43 278 91z"
      fill="#1ca086"
    />
    <text
      transform="translate(415.19 495.03)"
      style={{ isolation: 'isolate' }}
      fontSize="328.57"
      fill="#fff"
      fontFamily="Helvetica"
    >
      CS
    </text>
  </StyledSvg>
);
