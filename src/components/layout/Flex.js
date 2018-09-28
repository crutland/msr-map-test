import React from "react";

export const justifyContent = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    spaceBetween: "space-between",
    spaceAround: "space-around",
    spaceEvenly: "space-evenly"
};

export const alignItems = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    baseline: "baseline",
    stretch: "stretch"
};

export const defaultAlignItems = alignItems.stretch;
export const defaultJustifyContent = justifyContent.start;

export const Flex = (props) => {
    const {
        children,
        grow = 0,
        shrink = 1,
        basis = "auto",
        direction = "column",
        wrap = "nowrap",
        justifyContent = defaultJustifyContent,
        alignItems = defaultAlignItems,
        scroll = false,
        style = {},
        ...otherProps
    } = props;

    const fgrow = typeof grow === "boolean" ? 1 : grow;
    const fshrink = typeof shrink === "boolean" ? 1 : shrink;
    const fbasis = (typeof basis === "number" && basis !== 0) ? `${basis}px` : basis;

    let flexShorthand = `${fgrow} ${fshrink} ${fbasis}`;

    const styleBuilder = {
        flexDirection: direction,
        flexShrink: shrink,
        flexWrap: wrap,
        display: "flex",
        justifyContent,
        alignItems,
        flex: flexShorthand
    };

    if (scroll) {
        if (scroll === "x") {
            styleBuilder.overflowX = "auto";
        } else if (scroll === "y") {
            styleBuilder.overflowY = "auto";
        } else {
            styleBuilder.overflow = "auto";
        }
    }

    const divStyle = {
        ...styleBuilder,
        ...style
    }

    return (
        <div style={divStyle} {...otherProps}>{children}</div>
    )
}

export const Container = ({ children, style, ...otherProps }) => {
    return (<Flex grow {...otherProps}>{children}</Flex>);
};
export const Col = ({ children, ...otherProps }) => <Flex {...otherProps}>{children}</Flex>;
export const Row = ({ children, ...otherProps }) => <Flex direction="row" {...otherProps}>{children}</Flex>;