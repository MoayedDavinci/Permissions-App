import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../assets/colors';

interface BaseIconProps {
    width: string;
    height: string;
    primary?: boolean;
    secondary?: boolean;
    grey?: boolean;
    active?: boolean;
    margin?: string;
    animate?: boolean;
}

interface IconProps extends BaseIconProps {
    svg: React.FC<React.SVGProps<SVGSVGElement>>;
    onClick?: () => void;
}

interface IconWrapperProps extends BaseIconProps { }

const IconWrapper = styled.div<IconWrapperProps>`
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
  margin:${({ margin }) => (margin ? margin : '0')};
  height:${({ height }) => (height ? height : 'auto')};
  transition: color 0.3s ease;
  border-radius:50%;
  cursor:pointer;

      ${({ animate }) =>
        animate &&
        `
        animation: spin 0.5s ease-in-out;
    `}

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(15deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
`;


const Icon: FC<IconProps> = ({ svg: SvgIcon, onClick, width, height, primary, secondary, grey, active, margin, animate }) => {
    return (
        <IconWrapper onClick={onClick}
            width={width}
            height={height}
            primary={primary}
            secondary={secondary}
            grey={grey}
            active={active}
            margin={margin}
            animate={animate}
        >
            <SvgIcon />
        </IconWrapper>
    );
};

export default Icon;
