import React from "react"
import Header from "../components/Header/Header"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import styled from "styled-components"

const theme = {
  textColor: "#05386b",
  background: "#5CDB95",
  lightText: "#379683",
  white: "#EDF5E1",
  lightBlue: "#8EE4AF",
}

const GloblaStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Barriecito|Indie+Flower&display=swap');
  html {
    box-sizing: border-box;
    font-size: 12px;

  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
        background-color: ${theme.background};

    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Barriecito';
    color: ${theme.textColor}
  }
  a {
    text-decoration: none;
    color: ${theme.textColor};
      underline: none;
  }
  h1,h2,h3,h4,h5,h6,p{
    margin: 0px;
    padding: 0px;
  }
  p {
    color: ${theme.white};
    font-family: ${"Indie Flower"};

  }
`

const Inner = styled.div`
  dispaly: flex;
  width: 100%;
`
const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  width: 100%;
  max-width: 1000px;
`

class Layout extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Body>
          <Content>
            <Header />
            <Inner>{this.props.children}</Inner>
          </Content>
          <GloblaStyle />
        </Body>
      </ThemeProvider>
    )
  }
}

export default Layout
