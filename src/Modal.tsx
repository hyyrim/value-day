// Modal.tsx
import React from 'react';
import styled from 'styled-components';

// 모달 컴포넌트
interface ModalProps {
    onClose: () => void;
    children: React.ReactNode; // children을 명시적으로 정의
}

export const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
    return (
        <Overlay onClick={onClose}>
            <Container>
                <Button onClick={onClose}>X</Button>
                {children}
            </Container>
        </Overlay>
    );
};

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    position: relative;
    background-color: #fff;
    width: 500px;
    height: 500px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    padding: 20px;
`;
