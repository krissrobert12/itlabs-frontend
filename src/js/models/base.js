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
    cookieBtn: '.cookie__btn',

    switch: '.switch',
    switchLeft: '.switch__text--left',
    switchRight: '.switch__text--right',

    postItem: '.post-item',
    postItemBtn: '.post-item__btn',

    visitedList: '.layout-blog__visited',
    
    visitedItem: '.visited-item',
    visitedItemThumb: '.visited-item__thumb',
    visitedItemContent: '.visited-item__content',
    visitedItemLink: '.visited-item__link',
    visitedItemDate: '.visited-item__date',

    postItem: '.post-item',
    //postItemImgWrapper: '.post-item__img',
    postItemImg: '.post-item__img img',
    postItemDate: '.post-item__date',
    postItemHeading: '.post-item__heading',
    postItemBtn: '.post-item__btn',
}

export const fmt = (str) => str.slice(1, str.length);

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