import styled from 'styled-components';

const Board = ({bookCount})=>{
    return(
        <>
            <Container>
                <Infos>
                    <Info>
                        books:
                        <span>{bookCount}</span>
                    </Info>
                </Infos>
            </Container>
        </>
    )
}

const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height:100%;
`
const Infos = styled.ul`
    font-size: 40px;
    color: var(--midnight-black);
`
const Info = styled.li`
`


export default Board;