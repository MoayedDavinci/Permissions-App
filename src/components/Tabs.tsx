import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../assets/colors';
import Typography from './Typography';

interface TabContainerProps {
    count: number;
}

interface TabButtonProps {
    isActive: boolean;
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 400px;
  height:62px
`
const TabContainer = styled.div<TabContainerProps>`
  display: flex;
  width: 400px;
  height: 62px;
  background: ${colors.offWhite}; 
  border-radius: 8px; 
  overflow: hidden;
`;

const TabButton = styled.button<TabButtonProps>`
  flex: 1; 
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ isActive }) =>
        isActive ? colors.primary : colors.offWhite};
  color: ${({ isActive }) =>
        isActive ? colors.white : colors.lightGrey};
  border: none;
  font-size: 16px;
  font-weight: normal;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  padding:0;
  &:hover {
    opacity: ${({ isActive }) => (isActive ? 1 : 0.8)};
  }
`;


interface TabProps {
    title: string;
    labels: string[];
    value: number,
    onValueChange: (newValue: number) => void;
}

const Tabs: React.FC<TabProps> = ({ title, labels, value, onValueChange }) => {
    return (
        <Container style={{}}>
            <Typography variant='label'>{title}</Typography>
            <TabContainer count={labels.length}>
                {labels.map((label, index) => (
                    <TabButton
                        key={index}
                        isActive={value === index}
                        onClick={() => onValueChange(index)}
                    >
                        {label}
                    </TabButton>
                ))}
            </TabContainer>
        </Container>
    );
};

export default Tabs;
