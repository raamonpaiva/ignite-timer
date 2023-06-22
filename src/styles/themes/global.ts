import { createGlobalStyle } from 'styled-components'

/** Styled Component
 *  Para criar um styled component , cria-se uma variavel que recebe o tipo de componente a ser criado,
 *  seguido de ` ` , que por sua vez contem os códigos CSS.
 *
 *  Obs: Poderia ter sido criado qualquer tipo de componente html, um button,textarea, etc
 */
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
    }

    body{
        background: ${(props) => props.theme['gray-900']};
        color: ${(props) => props.theme['gray-300']};
        -webkit-font-smoothing: antialiased;
    }

    body,input,textarea,button{
        font-family: 'Roboto',sans-serif;
        font-weight: 400;
        font-size: 1rem
    }

`
