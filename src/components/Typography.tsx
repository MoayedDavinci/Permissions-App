import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../assets/colors';

type TypographyVariant = 'header' | 'title' | 'subtitle' | 'label' | 'info' | 'description' | 'subtitlePrimary' | 'alert';

interface TypographyProps {
  variant: TypographyVariant;
  children: React.ReactNode;
}

const TypographyStyles = {
  header: css`
    font-weight: bold;
    font-size: 24px;
    color: ${colors.typography.primary};
  `,
  title: css`
    font-weight: bold;
    font-size: 22px;
    color: ${colors.typography.primary};
  `,
  subtitle: css`
    font-weight: normal;
    font-size: 14px;
    color: ${colors.typography.secondary};
  `,
  subtitlePrimary: css`
    font-weight: normal;
    font-size: 14px;
    color: ${colors.typography.primary};
  `,
  alert: css`
    font-weight: normal;
    font-size: 14px;
    color: ${colors.white};
  `,
  label: css`
    font-weight: normal;
    font-size: 12px;
    color: ${colors.typography.tertiary};
  `,
  info: css`
    font-weight: bold;
    font-size: 18px;
    color: ${colors.darkGrey};
  `,
  description: css`
    font-weight: normal;
    font-size: 16px;
    color: ${colors.darkGrey};
  `,
};

const StyledTypography = styled.p<{ variant: TypographyVariant }>`
  margin: 0;
  padding: 0;
  ${({ variant }) => TypographyStyles[variant]}
`;

const Typography: FC<TypographyProps> = ({ variant, children }) => {
  return <StyledTypography variant={variant}>{children}</StyledTypography>;
};

export default Typography;
