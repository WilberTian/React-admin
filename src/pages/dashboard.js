import React from 'react';
import { render } from 'react-dom';

import routes from '../routes/dashboard';
import Root from '../containers/common/Root';

import './dashboard.less';

export default () => {
    render(
        <Root routes={routes} />,
        document.getElementById('root')
    );
};
