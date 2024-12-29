import React from "react";
import styled from "styled-components";
import { colors } from "../assets/colors";
import CrossIcon from "../assets/Icons/CrossIcon";
import Icon from "./Icon";
import Typography from "./Typography";

type AlertVariant = "success" | "info" | "danger";

const variantColors = {
    success: colors.primary,
    info: colors.darkGreen,
    danger: colors.errorRed,
};

const AlertContainer = styled.div<{ variant: AlertVariant }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
  background-color: ${({ variant }) => variantColors[variant]};
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  box-sizing: border-box;
  z-index: 1000;
  animation: fade-in 0.3s ease-in-out;

  & p{
   margin:0 auto;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;


interface AlertProps {
    variant: AlertVariant;
    children: React.ReactNode;
    close: () => void
}

const Alert: React.FC<AlertProps> = ({ variant, children, close }) => {
    return (
        <AlertContainer variant={variant}>
            <Typography variant="alert" >{children}</Typography>
            <Icon onClick={() => close()} svg={CrossIcon} width={'20px'} height={'20px'} />

        </AlertContainer>
    );
};

export default Alert;
