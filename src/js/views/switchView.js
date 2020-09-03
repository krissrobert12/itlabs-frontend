import {domStrings} from '../models/base';

// export const switches = document.querySelectorAll(domStrings.switch);

export const left = document.querySelectorAll(domStrings.switchLeft);

export const right = document.querySelectorAll(domStrings.switchRight);

const updateSwitch = (btn) => {
    btn.classList.toggle("active");
};

export const checkState = (e) => {

    const type = e.target.dataset.type;
    const switchBtn = e.target.closest(domStrings.switch);
    const active = switchBtn.classList.contains('active');

    if(type === 'left' ^ !active) {
        updateSwitch(switchBtn);
    }
}   

