import componentsExamplePage from '../pages/componentsExample';

componentsExamplePage();

if (module.hot) {
    module.hot.accept('../pages/componentsExample', () => {
        const _new = require('../pages/componentsExample').default;
        _new();
    });
}
