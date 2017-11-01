import App from '../containers/common/App';
import CustomizedFormContainer from '../containers/customizedForm/CustomizedFormContainer';

import NotFound from './NotFound';

import { customizedFormNav } from '../configs/NavSettings';

const notFountRoute = {
    path: '*',
    component: NotFound,
};

const route = {
    path: '/',
    component: App,
    indexRoute: {
        component: CustomizedFormContainer,
    },
    childRoutes: [
        notFountRoute
    ],
    navStatus: customizedFormNav
};

export default route;
