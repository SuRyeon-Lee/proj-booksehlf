import { useEffect, useState } from 'react';
import styled  from 'styled-components';

const Book = ({book})=>{

    useEffect(()=>{
        const checkAndSetEdgeBooks = ()=>{
            const startBooks = [...document.querySelectorAll('.start')];
            const endBooks =  [...document.querySelectorAll('.end')];

            for(let i=0;i<startBooks.length;i++){
                startBooks[i].classList.remove('start')
            };
            for(let i=0;i<endBooks.length;i++){
                endBooks[i].classList.remove('end')
            };

            const bookDoms = document.querySelectorAll('.book');
            const bookDomsLocationX = [...document.querySelectorAll('.book')].map((dom)=>{
                return dom.getBoundingClientRect().x
            })
    
            let prev = 0;
            const starts = [bookDoms[0]];
            const ends = [bookDoms[bookDoms.length-1]];
            for(let i=0; i<bookDomsLocationX.length; i++){
                if(prev > bookDomsLocationX[i]){
                    ends.push(bookDoms[i-1])
                    starts.push(bookDoms[i])
                }
                prev = bookDomsLocationX[i];
            }

            for(let i=0;i<starts.length;i++){
                starts[i].classList.add('start')
            };
            for(let i=0;i<ends.length;i++){
                ends[i].classList.add('end')
            };

        }
        checkAndSetEdgeBooks()
        window.addEventListener('resize',checkAndSetEdgeBooks)
    },[])

    return(
        <>
            <Container 
                className='book'
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
    margin-top: 60px;
    position: relative;
    display: flex;
    align-items: flex-end;
    height: ${(props) => props.height ? props.height : 0};
    width: ${(props) => props.thickness ? props.thickness : 0};
    background-color: ${(props) => props.coverColor ? props.coverColor : 'var(--cherry-red)'};
    cursor: pointer;

    &.start{
        transform: rotate(6deg);
        z-index: 1;
    }

    &.end{
        transform: rotate(-6deg);
        z-index: 1;
    }

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