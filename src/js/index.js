import * as navView from './views/navView';
import {domStrings, resizeAwait} from './models/base';
import * as accordionView from './views/accordionView';


/**
 * MAIN APP CONTROLLER
 */

document.querySelector(domStrings.navBtn).addEventListener('click', navView.toggleMenu);

accordionView.init();
accordionView.addFirstActive();


/**
 * SLIDERS CONTROLLER
 */

// Functions
const mountSliders = (sliders) => {
    sliders.forEach(s => {
        s.mount();
    });
};

const updatePerPage = (nextSlider) => {
    if (nextSlider) {
        for(let i = 0; i < sliders.length; i++) {
            sliders[i].options.perPage = 1;
        }
    } else {
        for(let i = 0; i < sliders.length; i++) {
            sliders[i].options.perPage = perPage[i];
        }
    }
};

const isViewportSmall = () => (window.innerWidth < 816);


// Variable declarations
let sliders = [];
let perPage = [];
let activeSlider = isViewportSmall();

// Generate sliders
const generate = () => {
    sliders = [];
    perPage = [];

    sliders.push(new Splide('.splide', {
        type   : 'loop',
        perPage: 3,
    }));
    perPage.push(3);
}

generate();

updatePerPage(activeSlider);
mountSliders(sliders);


const updateSliders = () => {
    let nextSlider = isViewportSmall();
    if (activeSlider != nextSlider) {
        activeSlider = nextSlider;
        sliders.forEach(slider => slider.destroy());
        generate();
        updatePerPage(nextSlider);
        mountSliders(sliders);
    }
};

resizeAwait(updateSliders);
