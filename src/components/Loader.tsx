import React from "react";
import styled, { keyframes } from "styled-components";
import LoaderLogo from "../assets/Icons/LoaderLogo";

const pulse = keyframes`
  0% {
    transform: scale(0.7);
    opacity: 1;
  }
  50% {
    transform: scale(1);
    opacity: 0.3;
  }
  100% {
    transform: scale(0.7);
    opacity: 1;
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  animation: ${pulse} 1.5s linear infinite; 
`;

const Loader: React.FC = () => {
  return (
    <LoaderWrapper>
      <LoaderLogo />
    </LoaderWrapper>
  );
};

export default Loader;
