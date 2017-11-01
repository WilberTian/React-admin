import customizedFormPage from '../pages/customizedForm';

customizedFormPage();

if (module.hot) {
    module.hot.accept('../pages/customizedForm', () => {
        const _new = require('../pages/customizedForm').default;
        _new();
    });
}
