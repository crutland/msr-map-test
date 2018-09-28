import { takeLatest, put } from "redux-saga/effects";
import { actionTypes } from "./actions";
import { actions as propertyActions } from "../properties/actions";


function* clearMetroProperties() {
    yield put(propertyActions.clearMetroProperties());
}

function* watchZoom({ payload: zoom }) {
    if (zoom < 7) {
        yield clearMetroProperties();
    }
}

export default function* mapSaga() {
    yield takeLatest(actionTypes.setZoom, watchZoom);
    yield takeLatest(actionTypes.resetToDefault, clearMetroProperties);
}