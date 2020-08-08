import { createGlobalStyle } from 'styled-components'
import normalize from './normalize'
 

const globalRules = `
  html {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    height: 100%;
  }
`

const GlobalStyle = createGlobalStyle`${normalize} ${globalRules}`

export default GlobalStyle
