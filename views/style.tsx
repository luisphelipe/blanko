import React from "react";

// LMAO
// First time trying to work with React SSR
// And styled-components didn't work
// I should probably just write css (or learn how to use styled-components with SSR)
// But where is the fun of that? 👀
const style = (Component: string, css: any) => {
  return ({ children, style, ...rest }: any) => (
    <Component style={{ ...css, ...style }} {...rest}>
      {children}
    </Component>
  );
};

export default style;
