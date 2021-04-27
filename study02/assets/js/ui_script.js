/* eslint-disable no-undef */

const commonFunc = function() {

    const common = {
        menuEvent: () => {
            const vw = window.innerWidth / 2;
            const btnHamburger = document.querySelector('.hamburger');
            const contentBody = document.querySelector('body');
            btnHamburger.onclick = function () {
                if (!contentBody.classList.contains('open')) {
                    contentBody.classList.add('open')
                    TweenMax.to('.bg-menu-mobile', 1, {
                        x:-vw,
                        ease: Expo.easeInOut
                    });
                    TweenMax.to(document.querySelector('.menu-mobile ul'), 1.2, {
                        x:-vw,
                        scaleX: 1,
                        delay: 0,
                        ease: Expo.easeInOut
                    });
                } else {
                    TweenMax.to('.bg-menu-mobile', 0.5, {
                        x:0,
                        ease: Expo.easeNone
                    });
                    TweenMax.to(document.querySelector('.menu-mobile ul'), 0.5, {
                        x:0,
                        delay: 0,
                        ease: Expo.easeNone
                    });
                    contentBody.classList.remove('open')
                }
            };
        },
    };

    const obj = {
        init: () => {
            
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
});

// Scroll Event
window.addEventListener('scroll', () => {
});

// resize Event
window.addEventListener('resize', () => {
    commonFunc.resizeEvent();
});
