/**
 * DEFAULTS THAT EVERY PAGE NEEDS
 */

import * as navView from './views/navView';
import {domStrings, resizeAwait} from './models/base';
import * as cookieView from './views/cookieView';

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
 * Cookies
 */

window.addEventListener('load', cookieView.checkSessionValue);