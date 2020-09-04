import {domStrings, fmt} from '../models/base';

// export const switches = document.querySelectorAll(domStrings.switch);

// export const left = document.querySelectorAll(domStrings.switchLeft);

// export const right = document.querySelectorAll(domStrings.switchRight);

const updateSwitch = (btn) => {
    btn.classList.toggle("active");
};

export const toggleSwitch = (e) => {

    const type = e.target.dataset.type;
    const btn = e.target.closest(domStrings.switch);
    const active = btn.classList.contains('active');
    const hasChanged = type === 'left' ^ !active;

    if(hasChanged) {
        updateSwitch(btn);
    }

    return {
        type,
        btn,
        active,
        hasChanged
    }
}   
