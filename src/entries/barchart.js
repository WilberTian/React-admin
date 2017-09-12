import barchartPage from '../pages/barchart';

barchartPage();

if (module.hot) {
    module.hot.accept('../pages/barchart', () => {
        const _new = require('../pages/barchart').default;
        _new();
    });
}
