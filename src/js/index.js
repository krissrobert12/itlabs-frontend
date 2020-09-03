/**
 * DEFAULTS THAT EVERY PAGE NEEDS
 */

import * as navView from './views/navView';
import {domStrings, resizeAwait} from './models/base';
import * as cookieView from './views/cookieView';
import * as switchView from './views/switchView';

/**
 * Navigation
 */

document.querySelector(domStrings.navBtn).addEventListener('click', navView.toggleMenu);
document.querySelectorAll(domStrings.navItem).forEach(elem => {
    elem.addEventListener('click', navView.toggleItemActive);
});

const resetMenu = () => {
    if (window.innerWidth >= 816) {
        navView.closeItems();
        navView.closeMenu();
    }
}
resizeAwait(resetMenu);


/**
 * Switch btn
 */

if (switchView.left.length) {
    switchView.left.forEach(leftBtn => leftBtn.addEventListener('click', switchView.checkState));
    switchView.right.forEach(rightBtn => rightBtn.addEventListener('click', switchView.checkState));
}

/**
 * Cookies
 */

window.addEventListener('load', cookieView.checkSessionValue);