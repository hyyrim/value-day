// Modal.tsx
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight, faXmark } from '@fortawesome/free-solid-svg-icons';

// 모달 컴포넌트
interface ModalProps {
    onClose: () => void;
    reset: () => void;
    children: React.ReactNode; // children을 명시적으로 정의
}

export const Modal: React.FC<ModalProps> = (props: ModalProps) => {
    const { onClose, reset, children } = props;
    return (
        <Overlay onClick={onClose}>
            <Container>
                <CancelButton onClick={onClose}>
                    <FontAwesomeIcon icon={faXmark} />
                </CancelButton>
                {children}
                <ResetButton onClick={reset}>
                    <FontAwesomeIcon icon={faRotateRight} />
                    <span>Retry</span>
                </ResetButton>
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
    background-color: #333;
    width: 500px;
    height: 500px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
`;

const CancelButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 20px;
`;

const ResetButton = styled.button`
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    padding: 20px;
    font-size: 18px;
    span {
        margin-left: 4px;
    }
`;
