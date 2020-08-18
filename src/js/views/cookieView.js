import {domStrings} from '../models/base';

const cookiePopup = document.querySelector(domStrings.cookiePopup);

export const createSessionValue = () => {
    window.sessionStorage.setItem('seenCookie', 1);
    cookiePopup.classList.remove('show');
};

export const checkSessionValue = () => {
    if (!window.sessionStorage.getItem('seenCookie')) {
        console.log('works');
        cookiePopup.classList.add('show');
    }
}