import styled  from 'styled-components';

const Book = ({book})=>{
    return(
        <>
            <Container 
                height={book.height} 
                thickness={book.thickness} 
                coverColor={book.coverColor}
            >
                <Title
                    textColor={book.textColor}
                >
                    {book.title}
                </Title>
            </Container>
        </>
    )
}

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    height: ${(props) => props.height ? props.height : 0};
    width: ${(props) => props.thickness ? props.thickness : 0};
    background-color: ${(props) => props.coverColor ? props.coverColor : 'var(--cherry-red)'};
    cursor: pointer;
`

const Title = styled.p`
    position: absolute;
    top:7%;
    left: 50%;
    writing-mode: vertical-rl;
    text-orientation: sideways;
    white-space: nowrap;
    max-height: 90%;
    text-overflow: ellipsis;
    overflow: hidden;
    transform: translateX(-50%);
    font-size: 25px;
    font-weight: bolder;
    color:${(props) => props.textColor ? props.textColor: 'var(--ivory)'};
`

export default Book;