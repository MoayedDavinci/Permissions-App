import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../assets/colors';

interface TextFieldProps {
  label: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
}

const Wrapper = styled.div`
  width: 375px;
  height: 96px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.p <{ isError?: boolean, focused?: boolean }>`
  font-size: 12px;
   margin: 0;
  padding: 0;
  color: ${({ isError, focused }) =>
    isError ? colors.errorRed : focused ? colors.primary : colors.grey};
`;

const Input = styled.input<{ isError: boolean; focused: boolean }>`
  width: 100%;
  height: 40px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid
    ${({ isError, focused }) =>
    isError
      ? colors.errorRed
      : focused
        ? colors.primary
        : colors.lighterGrey};
  border-radius: 8px;
  background-color: ${colors.white};
  box-sizing: border-box;
  outline: none;

  &:focus {
    border-color: ${({ isError }) => (isError ? colors.errorRed : colors.primary)};
  }

  &::placeholder {
    color: ${colors.lighterGrey};
    font-size: 14px;
  }
`;


const TextField: React.FC<TextFieldProps> = ({
  label,
  error = '',
  onChange,
  value,
  placeholder = '',
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <Wrapper>
      <Label focused={focused} isError={!!error} >{label}</Label>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        isError={!!error}
        focused={focused && !error}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {error && <Label isError>{error}</Label>}
    </Wrapper>
  );
};

export default TextField;
