import styled from "styled-components"
import { createGlobalStyle } from "styled-components";


function App() {

  return (
    <>
      <GlobalStyle />
      <Layout>
        <HorizontalNav />
        <VerticalNav />
      </Layout>
    </>
  )
}

export default App

const Layout = styled.div`
height:100vh;
display:grid;
grid-template-rows:64px 1fr;
grid-template-columns:108px 1fr;
grid-template-areas:
    "vertical-nav horizontal-nav"
    "vertical-nav main";
box-sizing:border-box;
overflow:hidden;

@media (max-width: 768px){
grid-template-rows:64px 1fr 64px;
grid-template-columns:1fr;
grid-template-areas:
  "horizontal-nav"
  "main"
  "vertical-nav"
}

`

const VerticalNav = styled.div`
grid-area:vertical-nav;
background:#33C173;
display:flex;
flex-direction:column;
overflow:hidden;
height:100%;

@media (max-width:768px){
flex-direction:row;
height:64px;
width:100%;
}
`

const HorizontalNav = styled.div`
grid-area:horizontal-nav;
background:#ECECEE;
`

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
