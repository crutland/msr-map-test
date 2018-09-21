import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from '@material-ui/core';
import { darkTheme, lightTheme } from "../theme/amherst";
import { Container } from "./Flex";
import { connect } from "react-redux";

const mapState = ({ ui }) => ({ theme: ui.theme })

const App = ({ theme }) => {
    const t = theme === 'light' ? lightTheme : darkTheme;
    return (
        <MuiThemeProvider theme={t}>
            <CssBaseline />
            <Container>

            </Container>
        </MuiThemeProvider>
    )
};

export default connect(mapState)(App);