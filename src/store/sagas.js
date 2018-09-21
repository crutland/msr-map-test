import { all } from "redux-saga/effects";
import uiSaga from "./ui/sagas";

export default function* rootSaga() {
    yield all([
        uiSaga()
    ]);
}