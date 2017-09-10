import dashboardPage from '../pages/dashboard';

dashboardPage();

if (module.hot) {
    module.hot.accept('../pages/dashboard', () => {
        const _new = require('../pages/dashboard').default;
        _new();
    });
}
