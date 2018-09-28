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
        basis = null,
        direction = "column",
        wrap = "nowrap",
        justifyContent = defaultJustifyContent,
        alignItems = defaultAlignItems,
        scroll = false,
        style = {},
        ...otherProps
    } = props;

    const styleBuilder = {
        flexDirection: direction,
        flexShrink: shrink,
        flexWrap: wrap,
        display: "flex",
        justifyContent,
        alignItems
    };

    if(basis != null) {
        styleBuilder.flexBasis = basis;
    }

    if (typeof grow === 'number') {
        styleBuilder.flexGrow = grow;
    } else if (typeof grow === 'boolean' && grow) {
        styleBuilder.flexGrow = 1;
    } else {
        styleBuilder.flexGrow = 0;
    }

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