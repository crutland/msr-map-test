import { actionTypes } from "./actions";

export const defaultState = {
    drawerOpen: false,
    title: process.env.REACT_APP_PAGE_TITLE,
    theme: 'light',
    loading: false,
    showInfoPanel: false,
};

export const reducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case actionTypes.setTheme:
            if (payload !== 'light' && payload !== 'dark')
                return state;
            return { ...state, theme: payload };

        case actionTypes.openDrawer:
            return { ...state, drawerOpen: true };

        case actionTypes.closeDrawer:
            return { ...state, drawerOpen: false };

        case actionTypes.setLoading:
            return { ...state, loading: !!payload };

        case actionTypes.setShowInfoPanel:
            return { ...state, showInfoPanel: !!payload };

        default:
            return state;
    }
}