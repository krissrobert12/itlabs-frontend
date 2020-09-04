import {domStrings, fmt} from '../models/base';

const visitedList = document.querySelector(domStrings.visitedList);

export const addItem = (data) => {
    const mockup = `
        <div class="${fmt(domStrings.visitedItem)}" data-id="${data.id}">
            <div class="${fmt(domStrings.visitedItemThumb)}">
                <img src="${data.src}" alt="Post thumbnail">
            </div>
            <div class="${fmt(domStrings.visitedItemContent)}">
                <a href="${data.link}" class="${fmt(domStrings.visitedItemLink)}">${data.heading}</a>
                <div class="${fmt(domStrings.visitedItemDate)}">${data.date}</div>
            </div>
        </div>
    `;
    visitedList.innerHTML += mockup;
};

let order = 9999;

export const updateOrder = (state) => {
    
};