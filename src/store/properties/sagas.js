import { takeLatest, put, call, select } from "redux-saga/effects";
import { actionTypes, actions as propertyActions } from "./actions";
import { actions as uiActions } from "../ui/actions";
import { actions as mapActions } from "../map/actions";
import { getMetros, getMetroProperties } from "../../api/msrApi";

function getZoom(state) { return state.map.zoom };

function* watchClearMetroProperties() {
    yield put(uiActions.setShowInfoPanel(false));
}

function* watchGetMetros() {
    yield put(uiActions.setLoading(true));
    const metros = yield call(getMetros);
    yield put(propertyActions.getMetrosComplete(metros));
    yield put(uiActions.setLoading(false));
}

function* watchSelectMetro({ payload: metro }) {
    const { latitude: lat, longitude: lng, name } = metro;
    yield put(uiActions.setLoading(true));
    yield put(mapActions.setCenter({ lat, lng }));
    yield put(mapActions.setZoom(10));
    const properties = yield call(getMetroProperties, name);
    yield put(propertyActions.getMetroPropertiesComplete(properties));
    yield put(uiActions.setShowInfoPanel(true));
    yield put(uiActions.setLoading(false));
}

function* watchSelectProperty({ payload: property }) {
    const { latitude: lat, longitude: lng } = property;
    yield put(uiActions.setShowInfoPanel(true));
    yield put(mapActions.setCenter({ lat, lng }));
    const currentZoom = yield select(getZoom);
    if (currentZoom < 12) {
        yield put(mapActions.setZoom(13));
    }
}

export default function* propertiesSaga() {
    yield takeLatest(actionTypes.getMetros, watchGetMetros);
    yield takeLatest(actionTypes.selectMetro, watchSelectMetro);
    yield takeLatest(actionTypes.clearMetroProperties, watchClearMetroProperties);
    yield takeLatest(actionTypes.selectProperty, watchSelectProperty);
}