/* eslint-disable no-undef */

const commonFunc = function() {

    const common = {
        menuEvent: () => {
        },
        scrollEffectEvent: () => {
        }
    };

    const obj = {
        init: () => {
            common.scrollEffectEvent();
        },
        resizeEvent: () => {
            common.menuEvent();
        }
    };
    return obj;
}();


// Load Event
window.addEventListener('load', () => {
    commonFunc.resizeEvent();
    commonFunc.init();
});

// Scroll Event
window.addEventListener('scroll', () => {
    
});

// resize Event
window.addEventListener('resize', () => {
    commonFunc.resizeEvent();
});
