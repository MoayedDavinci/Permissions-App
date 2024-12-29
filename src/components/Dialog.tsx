import React from 'react';
import styled from 'styled-components';
import { colors } from '../assets/colors';
import Typography from './Typography';
import Button from './Button';

interface DialogProps {
    isOpen: boolean;
    title: string;
    message: string;
    onClose: () => void;
    onConfirm: () => void;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const DialogContainer = styled.div`
  background: ${colors.white};
  border-radius: 8px;
  width: 400px;
  padding: 24px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  display:flex;
  flex-direction:column;
  gap:12px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;


const Dialog: React.FC<DialogProps> = ({
    isOpen,
    title,
    message,
    onClose,
    onConfirm,
}) => {
    if (!isOpen) return null;

    return (
        <Overlay>
            <DialogContainer>
                <Typography variant='title'>{title}</Typography>
                <Typography variant='info'>{message}</Typography>
                <ButtonGroup>
                    <Button variant='secondary' onClick={onClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={onConfirm}>
                        Confirm
                    </Button>
                </ButtonGroup>
            </DialogContainer>
        </Overlay>
    );
};

export default Dialog;
