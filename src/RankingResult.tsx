import styled from 'styled-components';

export const RankingResult = () => {
    return (
        <Container>
            <Button>reset</Button>
            <Button>결과보기</Button>
        </Container>
    );
};

const Container = styled.div`
    margin-top: 20px;
`;

const Button = styled.button`
    font-size: 16px;
    padding: 10px 20px;
    margin-left: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
`;
