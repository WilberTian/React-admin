export default (container, el, duration = 300) => {
    window.requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;

    const from = container.scrollTop;
    const to = container.scrollTop + el.getBoundingClientRect().top;
    const beginTime = new Date().getTime();
    const endTime = beginTime + duration;

    const scroll = () => {
        requestAnimationFrame(() => {
            const now = new Date().getTime();
            if (now < endTime) {
                /* eslint-disable no-mixed-operators */
                const current = (to - from) / duration * (now - beginTime) + from;
                /* eslint-enable */
                container.scrollTop = current;
                scroll();
            } else {
                container.scrollTop = to;
            }
        });
    };

    scroll();
};
