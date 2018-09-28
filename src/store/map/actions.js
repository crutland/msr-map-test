import { createAction, createNamespace, action } from "../action";
const ns = createNamespace("map");

export const actionTypes = {
    setCenter: ns`set_center`,
    setZoom: ns`set_zoom`,
    resetToDefault: ns`reset_to_default`
};

const resetToDefault = action(actionTypes.resetToDefault);
const setCenter = (position) => createAction(actionTypes.setCenter, position);
const setZoom = (zoom) => createAction(actionTypes.setZoom, zoom);

export const actions = {
    setCenter,
    setZoom,
    resetToDefault
};