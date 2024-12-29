import styled from 'styled-components';
import { colors } from '../assets/colors';

interface ButtonProps {
      variant: 'primary' | 'secondary';
}

const Button = styled.button<ButtonProps>`
  width: 375px;
  height: 58px;
  border: none;
  border-radius: 8px; 
  font-size: 16px; 
  font-weight: normal; 
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, color 0.3s ease;
  padding:0;

  background-color: ${({ variant }) =>
            variant === 'primary' ? colors.primary : colors.offWhite};
  color: ${({ variant }) =>
            variant === 'primary' ? colors.white : colors.typography.tertiary};

`;

export default Button;
