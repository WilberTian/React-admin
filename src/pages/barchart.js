import React from 'react';
import { render } from 'react-dom';

import routes from '../routes/barchart';
import Root from '../containers/common/Root';

import './barchart.less';

export default () => {
    render(
        <Root routes={routes} />,
        document.getElementById('root')
    );
};
