//this is due to bug https://github.com/facebook/jest/issues/4545
const raf = (global.requestAnimationFrame = callback => {
    setTimeout(callback, 0);
});

export default raf;
