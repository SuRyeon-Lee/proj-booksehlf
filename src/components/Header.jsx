import styled  from 'styled-components';
import addIcon from '../images/add-book-icon.svg';
import searchIcon from '../images/search-icon.svg';
import Symbol from './Symbol'

const Header = ()=>{
    return (
        <>
            <Container>
                <ButtonGroup>
                    <Button className="showIfDefault"><img  src={addIcon} alt='add book'/></Button>
                    <Button className="showIfDefault"><img src={searchIcon} alt='search book'/></Button>
                    <Button className="showIfDark"><Symbol/></Button>
                </ButtonGroup>
            </Container>
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
    & li.showIfDefault{
        ${props => props.dark ? "display: none" : "display: block" }
    }
    & li.showIfDark{
        ${props => props.dark ? "display: block" : "display: none" }
    }
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