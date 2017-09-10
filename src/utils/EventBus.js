export default class EventBus {
    constructor() {
        this._subscribers = {};
    }

    subscribe(event, callback) {
        if (!this._subscribers[event]) {
            this._subscribers[event] = [];
        }

        this._subscribers[event].push(callback);
    }

    unsubscribe(event, callback = undefined) {
        if (!this._subscribers[event]) {
            return;
        }

        if (callback === undefined) {
            this._subscribers[event] = [];
        } else {
            const callbacks = this._subscribers[event];
            const idx = callbacks.indexOf(callback);
            callbacks.splice(idx, 1);
        }
    }

    publish(event, args) {
        if (!this._subscribers[event]) {
            return;
        }

        this._subscribers[event].forEach((callback) => {
            callback(event, args);
        });
    }
}
