import React from 'react';
import styled, { css } from 'styled-components';

const TypographyRoot = styled.p<Props>`
  ${({ theme, variant = 'text', fontWeight, fontSize }) => css`
    font-size: ${fontSize || theme.typography.size[fontVariants[variant].size]};
    font-weight: ${fontWeight || theme.typography.weight[fontVariants[variant].weight]};
  `}
`;

const fontVariants = {
  h1: {
    size: 'lg' as Sizes,
    weight: 'bold' as Weights
  },
  h2: {
    size: 'md' as Sizes,
    weight: 'bold' as Weights
  },
  text: {
    size: 'md' as Sizes,
    weight: 'regular' as Weights
  }
};

type Sizes = 'sm' | 'md' | 'lg';
type Weights = 'light' | 'regular' | 'bold';

interface Props {
  tag?: 'h1' | 'h2' | 'p' | 'span' | 'div';
  variant?: 'h1' | 'h2' | 'text';
  fontWeight?: Weights;
  fontSize?: Sizes;
  children: React.ReactNode;
}

export const Typography: React.FC<Props> = ({ tag, children, ...rest }) => {
  return (
    <TypographyRoot as={tag} {...rest}>
      {children}
    </TypographyRoot>
  );
};

export default Typography;
