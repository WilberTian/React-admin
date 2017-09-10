import * as constant from '../configs/errors';

export default class ServerError extends Error {
    constructor(response) {
        super(response.message);
        this.response = response;
        this.name = constant.SERVER;
    }
}

ServerError.create = (response) => {
    return new ServerError(response);
};
