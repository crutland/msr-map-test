import { createAction, action, createNamespace } from "../action";

const ns = createNamespace("properties");

export const actionTypes = {
    getMetros: ns`get_metros`,
    getMetrosComplete: ns`get_metros_complete`,
    selectMetro: ns`select_metro`,
    selectProperty: ns`select_property`,
    getMetroProperties: ns`get_metro_properties`,
    getMetroPropertiesComplete: ns`get_metro_properties_complete`,
    clearMetroProperties: ns`clear_metro_properties`
};

const getMetros = action(actionTypes.getMetros);
const getMetrosComplete = (metros) => createAction(actionTypes.getMetrosComplete, metros);
const selectMetro = (metro) => createAction(actionTypes.selectMetro, metro);
const selectProperty = (property) => createAction(actionTypes.selectProperty, property);
const getMetroProperties = (metro) => createAction(actionTypes.getMetroProperties, metro);
const getMetroPropertiesComplete = (properties) => createAction(actionTypes.getMetroPropertiesComplete, properties);
const clearMetroProperties = action(actionTypes.clearMetroProperties);

export const actions = {
    getMetros,
    getMetrosComplete,
    selectMetro,
    selectProperty,
    getMetroProperties,
    getMetroPropertiesComplete,
    clearMetroProperties
};