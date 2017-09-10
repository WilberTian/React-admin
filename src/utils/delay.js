export default (timespan) => {
    return new Promise((resolve) => {
        setTimeout(resolve, timespan);
    });
};
