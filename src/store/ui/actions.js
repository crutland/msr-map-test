import { createAction, action, createNamespace } from "../action";

const ns = createNamespace("ui");

export const actionTypes = {
    setTheme: ns`set_theme`,
    openDrawer: ns`open_drawer`,
    closeDrawer: ns`close_drawer`,
    setLoading: ns`set_loading`,
    setShowInfoPanel: ns`set_show_info_panel`
};

const openDrawer = action(actionTypes.openDrawer);
const closeDrawer = action(actionTypes.closeDrawer);
const setTheme = (theme) => createAction(actionTypes.setTheme, theme);
const setLoading = (loading) => createAction(actionTypes.setLoading, loading);
const setShowInfoPanel = (show) => createAction(actionTypes.setShowInfoPanel, show);

export const actions = {
    openDrawer,
    closeDrawer,
    setTheme,
    setLoading,
    setShowInfoPanel
};