import React, { PureComponent } from 'react';
import { Router, hashHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';

export default class Root extends PureComponent {
    render() {
        const { routes } = this.props;

        return (
            <AppContainer>
                <Router history={hashHistory} routes={routes} key={Math.random()} />
            </AppContainer>
        );
    }
}
