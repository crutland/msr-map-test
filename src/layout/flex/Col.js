import React from 'react';
import { defaultJustifyContent, defaultAlignItems } from "../Flex";


export default ({ children, grow = false, justifyContent = defaultJustifyContent, alignItems = defaultAlignItems }) => {
    let style = { justifyContent, alignItems, display: "flex", flexFlow: "column" };
    if (grow)
        style.flexGrow = 1;
    return (
        <div style={style}>
            {children}
        </div>
    )
};