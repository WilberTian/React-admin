import EventBus from './EventBus';

import environment from './environment';
import * as environmentConstant from '../configs/environments';

export default (domain) => {
    domain.eventBus = new EventBus();

    domain.components = [];
    domain.currentModel = domain.model;

    domain.getCurrentModel = () => {
        return domain.currentModel;
    };

    domain.dispatch = (modelUpdator) => {
        if (typeof modelUpdator !== 'function') {
            throw new Error('modelUpdator should be function');
        }

        domain.currentModel = modelUpdator(domain.currentModel);

        domain.components.forEach((component) => {
            domain.eventBus.publish(`${component}@@MODEL_UPDATE`, domain);
        });
    };

    if (environment === environmentConstant.DEVELOPMENT) {
        window.$$domain = domain;
    }

    return domain;
};
