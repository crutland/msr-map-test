import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import { defaultState as uiDefaultState } from "./ui/reducer";
import { getSavedTheme } from "../helpers/storage";


export default function configureStore() {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const sagaMiddleware = createSagaMiddleware();

    const initialState = {
        ui: { ...uiDefaultState }
    };

    initialState.ui.theme = getSavedTheme();

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(sagaMiddleware)
        )
    );

    sagaMiddleware.run(rootSaga);
    return store;
}