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

    updateDate() {
        
    }
    
    //Add methods for missing properties?
}