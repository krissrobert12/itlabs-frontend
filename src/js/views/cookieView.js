import {domStrings} from '../models/base';

const markup = `
    <div class="cookie show">
        <div class="cookie__text">
            Folosim cookie-uri pentru a-ți oferi cea mai bună experiență pe situl nostru. Poți afla mai multe despre cookie-uri
            <a href="cookie-policy.html" class="cookie__link">aici</a>.
        </div>
        <div class="cookie__btn">Am inteles</div>
    </div>
`;

export const createSessionValue = () => {
    window.sessionStorage.setItem('seenCookie', 1);
    document.querySelector(domStrings.cookiePopup).classList.remove('show');
};

export const checkSessionValue = () => {
    if (!window.sessionStorage.getItem('seenCookie')) {
        let popup = document.createElement('div');
        popup.innerHTML = markup;
        popup.querySelector(domStrings.cookieBtn).addEventListener('click', createSessionValue);
        document.querySelector('body').appendChild(popup);
    }
    
}