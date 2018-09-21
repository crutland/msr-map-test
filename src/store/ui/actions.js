import { createAction, action } from "../action";

export const actionTypes = {
    setTheme: "@@ui/set_theme",
    openDrawer: "@@ui/open_drawer",
    closeDrawer: "@@ui/close_drawer"
};

export const openDrawer = action(actionTypes.openDrawer);
export const closeDrawer = action(actionTypes.closeDrawer);
export const setTheme = (theme) => createAction(actionTypes.setTheme, theme);

export const actions = {
    openDrawer,
    closeDrawer,
    setTheme
};