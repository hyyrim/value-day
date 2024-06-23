import styled from 'styled-components';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps {
    handleShowResults: () => void;
}

export const ResultButton = (props: IProps) => {
    const { handleShowResults } = props;

    return (
        <Container>
            <Button onClick={handleShowResults}>
                결과보기 <FontAwesomeIcon icon={faCheck} />
            </Button>
        </Container>
    );
};

const Container = styled.div`
    margin-top: 20px;
`;

const Button = styled.button`
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    font-size: 16px;
    padding: 10px 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
`;
