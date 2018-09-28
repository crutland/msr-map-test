import { actionTypes } from "./actions";

export const defaultState = {
    metros: null,
    selectedMetro: null,
    properties: null,
    selectedProperty: null
};

export const reducer = (state = defaultState, { type, payload }) => {
    switch(type) {
        case actionTypes.getMetrosComplete: 
            return { ...state, metros: payload };

        case actionTypes.selectMetro:
            return { ...state, selectedMetro: payload };

        case actionTypes.getMetroPropertiesComplete:
            return { ...state, properties: payload };

        case actionTypes.clearMetroProperties:
            return { ...state, properties: null, selectedMetro: null };

        case actionTypes.selectProperty:
            return { ...state, selectedProperty: payload };

        default:
            return state;
    }
}