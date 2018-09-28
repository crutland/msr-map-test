import { all } from "redux-saga/effects";
import uiSaga from "./ui/sagas";
import propertiesSaga from "./properties/sagas";
import mapSaga from "./map/sagas";

export default function* rootSaga() {
    yield all([
        uiSaga(),
        propertiesSaga(),
        mapSaga()
    ]);
}