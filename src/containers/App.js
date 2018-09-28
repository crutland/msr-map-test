import React, { Component } from 'react';
import { Provider, connect } from "react-redux";
import { MuiThemeProvider } from '@material-ui/core';
import { CssBaseline } from "../components/mui";
import LeftDrawer from "../components/navigation/LeftDrawer";
import configureStore from "../store/store";
import TitleBar from "../components/navigation/TitleBar";
import { Container } from "../components/layout/Flex";
import MainContent from "./MainContent";
import { darkTheme, lightTheme } from "../theme/amherst";
import Loading from "../components/Loading";
import { actions } from "../store/properties/actions";

const store = configureStore();

class App2 extends Component {
    componentDidMount() {
        this.props.actions.getMetros();
    }

    render() {
        const theme = this.props.theme === "light" ? lightTheme : darkTheme;
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <LeftDrawer />
                <Container>
                    <TitleBar />
                    <MainContent />
                </Container>
                <Loading />
            </MuiThemeProvider>
        );
    }
}

const mapState = ({ ui }) => ({ theme: ui.theme });
const mapDispatch = (dispatch) => {
    return {
        actions: {
            getMetros: () => dispatch(actions.getMetros())
        }
    }
};
const ConnectedApp = connect(mapState, mapDispatch)(App2);

export default () => {
    return (
        <Provider store={store}>
            <ConnectedApp />
        </Provider>
    )
}