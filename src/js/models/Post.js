import {domStrings} from './base';

export default class Post {

    constructor(elem) {
        this.id = elem.dataset.id;
        this.src = elem.querySelector(domStrings.postItemImg).getAttribute('src');
        this.heading = elem.querySelector(domStrings.postItemHeading).innerHTML;
        this.link = elem.querySelector(domStrings.postItemBtn).getAttribute('href');
        this.date = elem.querySelector(domStrings.postItemDate).innerHTML;
        this.elem = elem;
    }

    setDate() {
        const year = new Date().getFullYear();
        this.date = this.date.replace(/[1-9]{4}/, year);
    }

    updateDate() {
        this.elem.querySelector(domStrings.postItemDate).innerHTML = this.date;
    }
    
    //Add methods for missing properties?
}