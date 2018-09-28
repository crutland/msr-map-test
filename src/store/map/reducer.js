import { actionTypes } from "./actions";

export const defaultState = {
    center: { lat: 38.012239, lng: -94.183569 },
    zoom: 5
};

export const reducer = (state = defaultState, { type, payload }) => {
    switch(type) {
        case actionTypes.setCenter:
            return { ...state, center: {...payload} };
        
        case actionTypes.setZoom: 
            return { ...state, zoom: payload };

        case actionTypes.resetToDefault:
            return { ...defaultState };

        default:
            return state;
    }
}