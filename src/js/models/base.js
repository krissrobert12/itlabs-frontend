export const domStrings = {
    navBtn: '.nav__button',
    navMenu: '.nav__menu'
}

export const resizeAwait = (callback) => {
    var rtime;
    var timeout = false;
    var delta = 200;

    window.addEventListener('resize', () => {
        rtime = new Date();
        if (timeout === false) {
            timeout = true;
            setTimeout(resizeend, delta);
        }
    });

    const resizeend = () => {
        if (new Date() - rtime < delta) {
            setTimeout(resizeend, delta);
        } else {
            timeout = false;
            callback();
        }               
    }
}