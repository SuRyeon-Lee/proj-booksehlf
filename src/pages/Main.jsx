import { useState } from 'react';
import styled  from 'styled-components';
import myBooks from "../datas/myBooks";
import Book from '../components/Book';

const Main = ()=>{
    const [books,setBooks] = useState(myBooks)
    
    return(
        <>
            <Container>
                <Board/>
                <Shelf>
                    {/* <Board/> */}
                    {books.map((book)=>{
                        return <Book book={book} key={book.id}/>
                    })}
                </Shelf>
            </Container>
        </>
    )
}

const Container = styled.main`
    width: 100%;
    min-height: 100vh;
    background-color: var(--ivory);
`
const Board = styled.div`
    /* width: 500px; */
    height:100%;
`

const Shelf = styled.div`
    display: flex;
    align-items: flex-end;
    gap:10px;
    width: 100%;
    height: 390px;
    border-bottom: 2px solid var(--midnight-black)
`

export default Main;