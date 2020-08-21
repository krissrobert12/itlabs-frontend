import {domStrings} from '../models/base';
import $ from 'jquery';

const speed = 200;
const btn = document.querySelector(domStrings.navBtn);


export const toggleMenu = () => btn.classList.toggle('active');
export const closeMenu = () => btn.classList.remove('active');


const navItems = $(domStrings.navItem);
const navSubs = navItems.find(domStrings.navSubMenu);
export const closeItems = () => {
    navItems.removeClass('active');
    navSubs.slideUp(speed);
}

export const toggleItemActive = (e) => {
    if (btn.classList.contains('active')) {
        const elem = $(e.target.closest(domStrings.navItem));
        if (!elem.hasClass('active')) {
            closeItems();
            elem.addClass('active');
            elem.find(domStrings.navSubMenu).slideDown(speed);
        } else {
            elem.removeClass('active');
            elem.find(domStrings.navSubMenu).slideUp(speed);
        }
    }
}

