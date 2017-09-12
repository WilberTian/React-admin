import App from '../containers/common/App';
import LinechartContainer from '../containers/linechart/LinechartContainer';

import NotFound from './NotFound';

import { linechartNav } from '../configs/NavSettings';

const notFountRoute = {
    path: '*',
    component: NotFound,
};

const route = {
    path: '/',
    component: App,
    indexRoute: {
        component: LinechartContainer,
    },
    childRoutes: [
        notFountRoute
    ],
    navStatus: linechartNav
};

export default route;
