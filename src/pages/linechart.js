import React from 'react';
import { render } from 'react-dom';

import routes from '../routes/linechart';
import Root from '../containers/common/Root';

import './linechart.less';

export default () => {
    render(
        <Root routes={routes} />,
        document.getElementById('root')
    );
};
