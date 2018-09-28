import { combineReducers } from "redux";
import { reducer as ui } from "./ui/reducer";
import { reducer as properties } from "./properties/reducer";
import { reducer as map } from "./map/reducer";

export default combineReducers({
    ui,
    properties,
    map
});