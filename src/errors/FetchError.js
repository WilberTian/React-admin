import * as constant from '../configs/errors';

export default class FetchError extends Error {
    constructor(response) {
        super(response.statusText);
        this.response = response;
        this.name = constant.FETCH;
    }
}

FetchError.create = (response) => {
    return new FetchError(response);
};
