export { default as Row } from "./flex/Row";
export { default as Col } from "./flex/Col";
export { default as Container } from "./flex/Container";
export { default as Cell } from "./flex/Cell";

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