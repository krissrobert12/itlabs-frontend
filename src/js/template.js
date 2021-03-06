import Splide from '@splidejs/splide';
import * as navView from './views/navView';
import {domStrings, resizeAwait} from './models/base';
import * as accordionView from './views/accordionView';
import * as data from './models/Data';
import * as circuitCtrl from './circuitController';
import * as cookieView from './views/cookieView';

/**
 * MAIN APP CONTROLLER
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

    sliders.push(new Splide('.splide-test-3', {
        type   : 'loop',
        perPage: 3,
    }));
    perPage.push(3);

    sliders.push(new Splide('.splide-test-full', {
        type   : 'loop',
        perPage: 1,
    }));
    perPage.push(1);
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



/**
 * CIRCUIT CONTROLLER
 */

circuitCtrl.create(
    'circuit0',
    {
        staticData: data.staticData,
        dynamicData: data.dynamicData
    },
    {
        x: 100,
        y: 100
    },
    'rgb(250, 250, 250)'
);



/**
 * COOKIE CONTROLLER
 */

window.addEventListener('load', cookieView.checkSessionValue);