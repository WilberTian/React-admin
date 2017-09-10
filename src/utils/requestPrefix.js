export default (requestUrl) => {
    let prefix = '';
    const href = window.location.href;

    if (href.indexOf('HOST_FOR_PROD_ENV') > -1) {
        prefix = requestUrl;
    } else {
        prefix = '/api';
    }

    return prefix;
};
