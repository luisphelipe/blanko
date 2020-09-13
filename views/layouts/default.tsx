import React from "react";

// CSS Imports are buggin out
// Normally I would just use CRA
const style = `
  html {
    font-family: Robot, sans-serif;
  }

  html, body, body \> div {
    height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
  }
`;

const DefaultLayout = (props) => {
  return (
    <html>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{props.title}</title>
        <style dangerouslySetInnerHTML={{ __html: style }} />
        <style dangerouslySetInnerHTML={{ __html: props.style }} />
      </head>
      <body>{props.children}</body>
    </html>
  );
};

export default DefaultLayout;
