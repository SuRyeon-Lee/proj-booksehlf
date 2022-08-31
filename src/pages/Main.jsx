import { useState } from 'react';
import styled  from 'styled-components';
import myBooks from "../datas/myBooks";
import Book from '../components/Book';
import Board from '../components/Board';

const Main = ()=>{
    const [books,setBooks] = useState(myBooks)
    
    return(
        <>
            <Container>
                <Shelf>
                    <Board bookCount={books.length}/>
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

const Shelf = styled.div`
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    gap:10px;
    width: 100%;
    height: 390px;
    border-bottom: 2px solid var(--midnight-black)
`

export default Main;