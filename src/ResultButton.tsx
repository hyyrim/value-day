import styled from 'styled-components';

interface IProps {
    handleShowResults: () => void;
}

export const ResultButton = (props: IProps) => {
    const { handleShowResults } = props;

    return (
        <Container>
            <Button onClick={handleShowResults}>결과보기</Button>
        </Container>
    );
};

const Container = styled.div`
    margin-top: 20px;
`;

const Button = styled.button`
    width: 420px;
    font-size: 16px;
    padding: 10px 20px;
    margin-left: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
`;
