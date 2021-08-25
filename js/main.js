(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
      }
    };
})();
//handler burger menu
(function () {
    const burgerItem = document.querySelector('.header__burger');
    const closeItem = document.querySelector('.header__nav-close');
    const menu = document.querySelector('.header__nav');
    const links = document.querySelectorAll('.header__link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('burger__nav-active');
    })
    closeItem.addEventListener('click', () => {
        menu.classList.remove('burger__nav-active');
    })
    if (window.innerWidth < 769) {
        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', () => {
            menu.classList.remove('burger__nav-active');
            })
        }
    }
})();

(function () {
    const smoothScrool = function (targetEl, duration) {
        const headerElHeight = document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function (currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }
        requestAnimationFrame(animation);
    }

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScrool(currentTarget, 1000);
            });
        });
    };
    scrollTo();
})();