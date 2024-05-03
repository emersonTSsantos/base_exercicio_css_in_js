import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Lato, sans-serif;
    list-style: none;
  }

  body {
    padding-bottom: 120px;
  }
  `

export default GlobalStyles

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`
