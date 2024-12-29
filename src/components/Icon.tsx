import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../assets/colors';

const IconWrapper = styled.div<{ width: string, height: string, primary?: boolean, secondary?: boolean, grey?: boolean, active?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ primary, secondary, grey, active }) =>
        (primary && colors.primary) ||
        (secondary && colors.darkGreen) ||
        (grey && colors.grey) ||
        (active && colors.darkGreen) ||
        'auto'}; 
  width:${({ width }) => (width ? width : 'auto')};
  height:${({ height }) => (height ? height : 'auto')};
  transition: color 0.3s ease;
  border-radius:50%;
  cursor:pointer;
`;

interface IconProps {
    svg: React.FC<React.SVGProps<SVGSVGElement>>;
    primary?: boolean;
    secondary?: boolean;
    grey?: boolean;
    active?: boolean;
    onClick?: () => void;
    width: string,
    height: string
}

const Icon: FC<IconProps> = ({ svg: SvgIcon, onClick, width, height, primary, secondary, grey, active }) => {
    return (
        <IconWrapper onClick={onClick}
            width={width}
            height={height}
            primary={primary}
            secondary={secondary}
            grey={grey}
            active={active}
        >
            <SvgIcon />
        </IconWrapper>
    );
};

export default Icon;
