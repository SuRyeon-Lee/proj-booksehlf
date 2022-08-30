import { useState } from 'react';
import {Link} from "react-router-dom"
import styled  from 'styled-components';
import addIcon from '../images/add-book-icon.svg';
import searchIcon from '../images/search-icon.svg';
import Symbol from './Symbol'

const Header = ()=>{
    const [headerMode,setHeaderMode] = useState('normal')
    const handleNormalHeader = () => {
        setHeaderMode('dark')
    }
    const handleDarkHeader = () => {
        setHeaderMode('normal')
    }

    return (
        <>
            {headerMode === 'normal' ?
                <Container>
                    <ButtonGroup>
                        <Link to="/addbook">
                            <Button className="showIfDefault" onClick={handleNormalHeader}>
                                <img src={addIcon} alt='add book'/>
                            </Button>
                        </Link>
                        <Button className="showIfDefault"><img src={searchIcon} alt='search book'/></Button>
                    </ButtonGroup>
                </Container>
                :
                <Container dark>
                    <ButtonGroup>
                        <Link to="/">
                            <Button className="showIfDark" onClick={handleDarkHeader}>
                                <Symbol/>
                            </Button>
                        </Link>
                    </ButtonGroup>
                </Container>
            }
            
        </>
    )
}

const Container = styled.header`
    display: flex;
    justify-content: flex-end;
    background-color: ${props => props.dark ? "var(--midnight-black)" : "var(--ivory)"};
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    padding: 0 var(--gutter);
`;
const ButtonGroup = styled.ul`
    display: flex;
    align-items: center;
    gap: 34px;
`;
const Button = styled.li`
    display: block;
    height: 45px;
    width: 45px;
    cursor: pointer;
    transition: 0.3 ease-in-out;
    &.showIfDefault:hover {
        transform: rotate(-6deg);
    };
`


export default Header;