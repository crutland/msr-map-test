import React, { Fragment } from 'react';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { compose } from "redux";
import { Flex } from "../components/layout/Flex";
import InfoPanel from "../components/infoPanel/InfoPanel";
import PropertyMap from "../components/map/PropertyMap";


const MainContent = ({ width }) => {
    //const direction = isWidthUp("md", width) ? "row" : "column";
    const direction = "column";
    return (
        <Fragment>
            <Flex grow direction={direction}>
                <PropertyMap />
                <InfoPanel />
            </Flex>
        </Fragment>
    )
};

export default compose(
    withWidth()
)(MainContent);