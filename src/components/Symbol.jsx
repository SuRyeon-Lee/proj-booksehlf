import styled  from 'styled-components';

const Symbol = ()=>{
    return (
        <>
            <Container>
                <FirstBar/>
                <SecondBar/>
                <ThirdBar/>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    align-items: flex-end;
    width: 100%;
    height:100%;
    &:hover p:last-child{
        transform: translate(80%) rotate(-13deg);
    }
`;

const FirstBar = styled.p`
    display: inline-block;
    width: 30%;
    height: 85%;
    background-color: var(--symbol_first-bar);
`;

const SecondBar = styled.p`
    display: inline-block;
    width: 26%;
    height: 100%;
    background-color: var(--symbol_second-bar);
    transition-delay: 0.1s;
`;

const ThirdBar = styled.p`
    display: inline-block;
    width: 20%;
    height: 65%;
    transform: translate(80%);
    background-color: var(--symbol_third-bar);
    transform-origin: left bottom;
`;

export default Symbol;