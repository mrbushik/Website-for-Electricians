const slider = () => {
    const sliderBlock = document.querySelector('.top-slider');
    const slides = document.querySelectorAll('.slide__item-card');
    const dotsList = document.querySelector('.slider__dots');
    const table = document.querySelectorAll('.table');

    let currentSlide = 0;
    let interval;
    const timeInterval = 3000;
    let quantityDots = slides.length;
    let dots = [];


    table[0].classList.add('active');
    dotsList.style.marginTop = -35 + 'px';

    //создание dots
    const createDots = () => {
        while (quantityDots) {
            let dotsElem = document.createElement('li');
            dotsElem.classList.add('dot');

            dotsList.append(dotsElem);
            dots.push(dotsElem);
            quantityDots--;

        }
        dots[0].classList.add('dot-active');
    };


    const pervSlide = (elems, index, strClass) => {
        elems[index].style.display = 'none';
    };

    const nextSlide = (elems, index, strClass) => {
        elems[index].style.display = 'block';

    };

    const pervDot = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    };



    const nextDot = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    };



    const autoSlide = () => {
        pervSlide(slides, currentSlide, 'portfolio-item-active');
        pervDot(dots, currentSlide, 'dot-active');
        pervDot(table, currentSlide, 'active');
        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextDot(dots, currentSlide, 'dot-active');
        nextDot(table, currentSlide, 'active');

    };


    const startSlide = (timer = 3000) => {
        interval = setInterval(autoSlide, timer);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };


    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();
        if (!e.target.matches('.dot, .portfolio-btn')) {
            return;
        }

        pervSlide(slides, currentSlide, 'portfolio-item-active');
        pervDot(dots, currentSlide, 'dot-active');
        pervDot(table, currentSlide, 'active');

        if (e.target.matches('#arrow-right')) {
            currentSlide++;

        } else if (e.target.matches('#arrow-left')) {
            currentSlide--;

        } else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {

                if (e.target === dot) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextDot(dots, currentSlide, 'dot-active');
        nextDot(table, currentSlide, 'active');
    });


    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide();
        }
    }, true);

    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timeInterval);
        }
    }, true);

    createDots();
    startSlide(timeInterval);
};
export default slider;