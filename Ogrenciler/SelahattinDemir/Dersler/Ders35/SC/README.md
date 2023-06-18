[Turn Back](../../../)

<h1 align="center">Ders35 - React Styled Components</h1>

<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="react" width="33" height="35"/> </a> </p>

# React Introduction

## React Styled Components 

&#10145; Styled components are a CSS-in-JS tool that bridges the gap between components and styling, offering numerous features to help you write maintainable and reusable styling code in your React applications.

&#10145; Styled components allow you to write plain CSS in your components without worrying about class name collisions.

&#10145; Styled components allow you to write plain CSS in your components without worrying about specificity.

&#10145; Styled components allow you to write plain CSS in your components without worrying about the cascade.

&#10145; Styled components allow you to write plain CSS in your components without worrying about selectors.

&#10145; Styled components allow you to write plain CSS in your components without worrying about dead code.

&#10145; Styled components allow you to write plain CSS in your components without worrying about context.

&#10145; Styled components allow you to write plain CSS in your components without worrying about global scope.


### Installation

&#10146; To install styled-components, run the following command:

    npm install styled-components

&#10146; To use styled-components, import it into your component:

    import styled from "styled-components";

### Basic Example

&#10146; Here is an example of styled-components in action:

    import React from "react";
    import styled from "styled-components";

    const Button = styled.button`
      background-color: blue;
      color: white;
      padding: 10px;
      font-size: 16px;
      border-radius: 5px;
    `;

    function App() {
      return <Button>Click Me</Button>;
    }

### Props

&#10146; You can pass props to styled-components.

&#10146; You can use props to change the styling of your components.

&#10146; You can use props to change the styling of your components based on the state of your application.

&#10146; You can use props to change the styling of your components based on the props of your components.


#### Example

    Here is an example of using props in styled-components:

      import React from "react";
      import styled from "styled-components";

      const Button = styled.button`
        background-color: ${(props) => (props.primary ? "blue" : "red")};
        color: white;
        padding: 10px;
        font-size: 16px;
        border-radius: 5px;
      `;

      function App() {
        return (
          <div>
            <Button primary>Click Me</Button>
            <Button>Click Me</Button>
          </div>
        );
      }

### Extending Styles

&#10146; You can extend styles in styled-components.

&#10146; You can use the ``extend`` method to extend styles in styled-components.

&#10146; You can use the ``extend`` method to extend styles in styled-components based on the state of your application.

&#10146; You can use the ``extend`` method to extend styles in styled-components based on the props of your components.

#### Example

    Here is an example of extending styles in styled-components:

      import React from "react";
      import styled from "styled-components";

      const Button = styled.button`
        background-color: ${(props) => (props.primary ? "blue" : "red")};
        color: white;
        padding: 10px;
        font-size: 16px;
        border-radius: 5px;
      `;

      const PrimaryButton = styled(Button)`
        background-color: blue;
      `;

      function App() {
        return (
          <div>
            <Button primary>Click Me</Button>
            <PrimaryButton>Click Me</PrimaryButton>
          </div>
        );
      }

### Global Styles

&#10147; You can add global styles in styled-components.

&#10147; You can use the ``createGlobalStyle`` method to add global styles in styled-components.

#### Example

    Here is an example of adding global styles in styled-components:

      import React from "react";
      import styled, { createGlobalStyle } from "styled-components";

      const GlobalStyle = createGlobalStyle`
        body {
          background-color: blue;
        }
      `;

      const Button = styled.button`
        background-color: ${(props) => (props.primary ? "blue" : "red")};
        color: white;
        padding: 10px;
        font-size: 16px;
        border-radius: 5px;
      `;

      function App() {
        return (
          <div>
            <GlobalStyle />
            <Button primary>Click Me</Button>
            <Button>Click Me</Button>
          </div>
        );
      }


### Animations

&#10147; You can add animations in styled-components.

&#10147; You can use the ``keyframes`` method to add animations in styled-components.

&#10147; You can use the ``keyframes`` method to add animations in styled-components based on the state of your application.

&#10147; You can use the ``keyframes`` method to add animations in styled-components based on the props of your components.

#### Example

    Here is an example of adding animations in styled-components:

      import React from "react";
      import styled, { keyframes } from "styled-components";

      const rotate = keyframes`
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      `;

      const Button = styled.button`
        background-color: ${(props) => (props.primary ? "blue" : "red")};
        color: white;
        padding: 10px;
        font-size: 16px;
        border-radius: 5px;
        animation: ${rotate} 2s linear infinite;
      `;

      function App() {
        return (
          <div>
            <Button primary>Click Me</Button>
            <Button>Click Me</Button>
          </div>
        );
      }

### Media Queries

&#10147; You can add media queries in styled-components.

&#10147; You can use the ``css`` method to add media queries in styled-components.

&#10147; You can use the ``css`` method to add media queries in styled-components based on the state of your application.

&#10147; You can use the ``css`` method to add media queries in styled-components based on the props of your components.

#### Example

    Here is an example of adding media queries in styled-components:

      import React from "react";
      import styled, { css } from "styled-components";

      const Button = styled.button`
        background-color: ${(props) => (props.primary ? "blue" : "red")};
        color: white;
        padding: 10px;
        font-size: 16px;
        border-radius: 5px;
        ${(props) =>
          props.primary &&
          css`
            @media (max-width: 768px) {
              background-color: red;
            }
          `}
      `;

      function App() {
        return (
          <div>
            <Button primary>Click Me</Button>
            <Button>Click Me</Button>
          </div>
        );
      }

### Theming

&#10148; You can add themes in styled-components.

&#10148; You can use the ``ThemeProvider`` component to add themes in styled-components.

&#10148; You can use the ``ThemeProvider`` component to add themes in styled-components based on the state of your application.

&#10148; You can use the ``ThemeProvider`` component to add themes in styled-components based on the props of your components.

#### Example

    Here is an example of adding themes in styled-components:

      import React from "react";
      import styled, { ThemeProvider } from "styled-components";

      const Button = styled.button`
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};
        padding: 10px;
        font-size: 16px;
        border-radius: 5px;
      `;

      const theme = {
        background: "blue",
        color: "white"
      };

      function App() {
        return (
          <ThemeProvider theme={theme}>
            <div>
              <Button>Click Me</Button>
            </div>
          </ThemeProvider>
        );
      }


### Server-Side Rendering

&#10148; You can use styled-components with server-side rendering.

&#10148; You can use the ``ServerStyleSheet`` component to use styled-components with server-side rendering.

#### Example

    Here is an example of using styled-components with server-side rendering:

      import React from "react";
      import ReactDOMServer from "react-dom/server";
      import styled, { ServerStyleSheet } from "styled-components";

      const Button = styled.button`
        background-color: ${(props) => (props.primary ? "blue" : "red")};
        color: white;
        padding: 10px;
        font-size: 16px;
        border-radius: 5px;
      `;

      function App() {
        return <Button primary>Click Me</Button>;
      }

      const sheet = new ServerStyleSheet();
      const html = ReactDOMServer.renderToString(sheet.collectStyles(<App />));
      const styleTags = sheet.getStyleTags();

      console.log(html);
      console.log(styleTags);


## Example Website

![alt text](https://github.com/waroi/TurkcellFrontend2023/blob/develop/Ogrenciler/SelahattinDemir/Dersler/Ders35/SC/src/assets/media.gif)
