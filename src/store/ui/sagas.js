import { takeLatest } from "redux-saga/effects";
import { actionTypes } from "./actions";
import { saveTheme } from "../../helpers/storage";

function* watchSetTheme({ payload }) {
    yield Promise.resolve(saveTheme(payload));
}

export default function* uiSaga() {
    yield takeLatest(actionTypes.setTheme, watchSetTheme);
}