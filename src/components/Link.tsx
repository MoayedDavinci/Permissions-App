import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../assets/colors';

const StyledLink = styled(RouterLink)`
  font-size: 20px;
  color: ${colors.primary};
  text-decoration: underline;

`;

type LinkProps = RouterLinkProps & {
    children: React.ReactNode;
};

const Link: React.FC<LinkProps> = ({ children, ...props }) => {
    return <StyledLink {...props}>{children}</StyledLink>;
};

export default Link;
