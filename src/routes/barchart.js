import App from '../containers/common/App';
import BarchartContainer from '../containers/barchart/BarchartContainer';

import NotFound from './NotFound';

import { barchartNav } from '../configs/NavSettings';

const notFountRoute = {
    path: '*',
    component: NotFound,
};

const route = {
    path: '/',
    component: App,
    indexRoute: {
        component: BarchartContainer,
    },
    childRoutes: [
        notFountRoute
    ],
    navStatus: barchartNav
};

export default route;
