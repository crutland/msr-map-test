import { takeLatest } from "redux-saga/effects";
import { actionTypes } from "./actions";
import { saveTheme } from "../../helpers/storage";


function* watchSetTheme({ type, payload }) {
    console.log(`type: ${type}, payload: ${payload}`);
    yield Promise.resolve(saveTheme(payload));
}

export default function* uiSaga() {
    yield takeLatest(actionTypes.setTheme, watchSetTheme);
}