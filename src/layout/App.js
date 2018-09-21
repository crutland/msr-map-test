import React from 'react';
import { Provider } from "react-redux";
import configureStore from "../store/store";
import MainContent from "./MainContent";

const store = configureStore();

export default () => (
    <Provider store={store}>
        <MainContent />
    </Provider>
)