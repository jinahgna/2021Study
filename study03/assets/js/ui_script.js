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
        scrollEffectEvent: () => {
            const actions = {
                birdFlies(key) {
                    if(key) {
                        document.querySelector('[data-index="2"] .bird').style.transform = `translateX(${window.innerWidth}px)`
                    } else {
                        document.querySelector('[data-index="2"] .bird').style.transform = `translateX(-100%)`
                    }
                },
                birdFlies2(key) {
                    if(key) {
                        document.querySelector('[data-index="5"] .bird').style.transform = `translate(${window.innerWidth}px, ${-window.innerHeight * 0.7}px)`
                    } else {
                        document.querySelector('[data-index="5"] .bird').style.transform = `translate(10%, 10%)`
                    }
                }
            }
            const stepElems = document.querySelectorAll('.step');
            const graphicElems = document.querySelectorAll('.graphic-item');
            let currentItem = graphicElems[0];
            let ioIndex;

            const io = new IntersectionObserver((entries, observer) => {
                ioIndex = entries[0].target.dataset.index * 1;
                console.log('observer', observer);
            })

            for(let i=0; i<stepElems.length; i++) {
                io.observe(stepElems[i]);
                stepElems[i].dataset.index = i;
                graphicElems[i].dataset.index = i;
            }

            function activate(action) {
                currentItem.classList.add('visible');
                if (action) {
                    actions[action](true);
                }
            }

            function inActivate(action) {
                currentItem.classList.remove('visible');
                if (action) {
                    actions[action](false);
                }
            }

            window.addEventListener('scroll', () => {
                let step;
                let boundingRect;

                // for(let i=0; i<stepElems.length; i++) {
                for(let i = ioIndex-1; i < ioIndex+2; i++) {
                    step = stepElems[i];
                    if (!step) continue;
                    boundingRect = step.getBoundingClientRect();

                    if (boundingRect.top > window.innerHeight * 0.1 && boundingRect.top < window.innerHeight * 0.8 ) {
                        inActivate(currentItem.dataset.action);
                        currentItem = graphicElems[step.dataset.index];
                        activate(currentItem.dataset.action);
                    }
                }
            })
            activate();
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
    setTimeout(() => scrollTo(0,0),100);
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
