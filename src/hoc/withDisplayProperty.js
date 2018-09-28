import React from 'react';

export function withDisplayProperty(displayProp) {
    return function (Component) {
        // return function(props) {
        //     return !!props[displayProp] ? <Component {...props} /> : null;
        // }
        return class extends React.Component {
            render() {
                return !!this.props[displayProp] ? <Component {...this.props} /> : null;
            }
        }
    }
}