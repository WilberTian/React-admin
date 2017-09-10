import fetch from '../utils/fetch';
import requestPrefix from '../utils/requestPrefix';

const prefix = requestPrefix('URI_FOR_PROD_ENV');

export default {
    validateLogin: async () => {
        const request = {
            url: `${prefix}/validateLogin`
        };

        const result = await fetch(request);
        return result;
    }
};
