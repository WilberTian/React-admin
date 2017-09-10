import App from '../containers/common/App';
import ComponentsExampleContainer from '../containers/componentsExample/ComponentsExampleContainer';

import NotFound from './NotFound';

import { componentsExampleNav } from '../configs/NavSettings';

const notFountRoute = {
    path: '*',
    component: NotFound,
};

const route = {
    path: '/',
    component: App,
    indexRoute: {
        component: ComponentsExampleContainer,
    },
    childRoutes: [
        notFountRoute
    ],
    navStatus: componentsExampleNav
};

export default route;
