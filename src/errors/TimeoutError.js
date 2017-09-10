import * as constant from '../configs/errors';

export default class TimeoutError extends Error {
    constructor(timeout) {
        super('timeout');
        this.timeout = timeout;
        this.name = constant.TIMEOUT;
    }
}

TimeoutError.create = (timeout) => {
    return new TimeoutError(timeout);
};
