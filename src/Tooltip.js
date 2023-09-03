import React, { useState } from "react";
import styled from "styled-components";

//here below created component using styled-component and passes position to it as props.
const ToolTipContainer = styled.div`
  position: ${(props) => props.Pos};
  display: inline-block;
`;


export default function Tooltip({ text, children }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <ToolTipContainer
      Pos = {"relative"}
      //inline js function, The onMouseEnter event occurs when the mouse pointer enters an element and firstly we set it to true.
      onMouseEnter={() => setIsVisible(true)}
      // The onmouseleave event occurs when the mouse pointer / an element.and setting his value as false,it hides the element.
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
     {isVisible && <div className="tooltip">{text}</div>} 
    </ToolTipContainer>
  );
}
