import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
    ${reset}
    :root {
        --retro-blue: #00B7AF;
        --cherry-red: #FF3011;
        --muted-orange: #F98700;
        --vintage-pink: #FC9994;
        --dark-retro-blue: #00A0A2;
        --midnight-black: #181617;
        --ivory: #EEEAE2;
        --symbol_first-bar: var(--cherry-red);
        --symbol_second-bar: var(--retro-blue);
        --symbol_third-bar: var(--muted-orange);

        --gutter: 20px;
    }
`
export default GlobalStyle