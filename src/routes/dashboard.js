import App from '../containers/common/App';
import DashboardContainer from '../containers/dashboard/DashboardContainer';

import NotFound from './NotFound';

import { dashboardNav } from '../configs/NavSettings';

const notFountRoute = {
    path: '*',
    component: NotFound,
};

const route = {
    path: '/',
    component: App,
    indexRoute: {
        component: DashboardContainer,
    },
    childRoutes: [
        notFountRoute
    ],
    navStatus: dashboardNav
};

export default route;
