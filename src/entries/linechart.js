import linechartPage from '../pages/linechart';

linechartPage();

if (module.hot) {
    module.hot.accept('../pages/linechart', () => {
        const _new = require('../pages/linechart').default;
        _new();
    });
}
