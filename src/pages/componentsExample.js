import React from 'react';
import { render } from 'react-dom';

import routes from '../routes/componentsExample';
import Root from '../containers/common/Root';

import './componentsExample.less';

export default () => {
    render(
        <Root routes={routes} />,
        document.getElementById('root')
    );
};
