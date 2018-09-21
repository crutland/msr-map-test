import { actionTypes } from "./actions";

export const defaultState = {
    leftDrawerOpen: false,
    title: process.env.REACT_APP_PAGE_TITLE,
    theme: 'light'
};

export const reducer = (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.setTheme:
            if (payload !== 'light' && payload !== 'dark')
                return state;
            return { ...state, theme: payload };
        default:
            return state;
    }
}