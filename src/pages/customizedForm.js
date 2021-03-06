import React from 'react';
import { render } from 'react-dom';

import routes from '../routes/customizedForm';
import Root from '../containers/common/Root';

import './customizedForm.less';

export default () => {
    render(
        <Root routes={routes} />,
        document.getElementById('root')
    );
};
