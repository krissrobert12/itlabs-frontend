export const domStrings = {
    navBtn: '.nav__button',
    navMenu: '.nav__menu',
    navItem: '.nav__item',
    navLink: '.nav__link',
    navSubMenu: '.nav__sub-menu',
    accordion: '.accordion',
    accordionBar: '.accordion__bar',
    accordionContent: '.accordion__content',
    accordionItem: '.accordion__item',
    circuitCanvas: '.circuit__canvas',
    circuitBackground: '.circuit__background',
    cookiePopup: '.cookie',
    cookieBtn: '.cookie__btn'
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