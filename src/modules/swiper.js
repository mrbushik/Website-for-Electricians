const swiper = () => {
    // const slideItem = document.querySelectorAll('.slide__item');
    // const slideText = document.querySelectorAll('.table');
    // const dotsList = document.querySelector('.slider__dots');

    // let time = 3000;
    // let timer;
    // let count = 1;
    // let dotQuantity = 0;
    // let dotsArray = [];
    // slideItem[0].style.display = 'block';
    // slideText[0].classList.add('active');



    // while (dotQuantity < 3) {
    //     dotQuantity++;
    //     let dotsElem = document.createElement('div');
    //     dotsElem.classList.add('dot');
    //     dotsList.append(dotsElem);
    //     dotsArray.push(dotsElem);
    // }


    // dotsArray.forEach((item, index) => {
    //     item.addEventListener('mouseenter', (e) => {
    //         stopSlide();
    //         time = 3000;
    //     });
    // });
    // dotsArray.forEach((item, index) => {
    //     item.addEventListener('mouseleave', (e) => {
    //         startSlide();
    //     });
    // });
    // dotsArray.forEach((item, index) => {
    //     item.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         time = 3000;
    //         // count = item;
    //         console.log(count);
    //         if (index === 0) {
    //             slideItem[2].style.display = 'none';
    //             slideItem[1].style.display = 'none';
    //             slideItem[0].style.display = 'block';
    //             count = 1;
    //         }
    //         if (index === 1) {
    //             slideItem[1].style.display = 'block';
    //             slideItem[0].style.display = 'none';
    //             slideItem[2].style.display = 'none';
    //             count = 2;

    //         }
    //         if (index === 2) {
    //             slideItem[2].style.display = 'block';
    //             slideItem[0].style.display = 'none';
    //             slideItem[1].style.display = 'none';
    //             count = 0;

    //             console.log('job');
    //         }
    //         startSlide();
    //         console.log('good');
    //     });
    // })

    // const startSlide = () => {
    //     timer = setInterval(slider, time);
    // };
    // const stopSlide = () => {
    //     clearInterval(timer);
    // };


    // const slider = () => {
    //     count++;
    //     if (count == 1) {
    //         slideItem[2].style.display = 'none';
    //         slideItem[0].style.display = 'block';
    //         slideText[0].classList.add('active');
    //         slideText[2].classList.remove('active');
    //         dotsArray[0].classList.add('dot__active');
    //         dotsArray[2].classList.remove('dot__active');

    //     }
    //     if (count == 2) {
    //         slideItem[0].style.display = 'none';
    //         slideItem[1].style.display = 'block';
    //         slideText[1].classList.add('active');
    //         slideText[0].classList.remove('active');
    //         dotsArray[1].classList.add('dot__active');
    //         dotsArray[0].classList.remove('dot__active');



    //     }
    //     if (count == 3) {
    //         slideItem[1].style.display = 'none';
    //         slideItem[2].style.display = 'block';
    //         slideText[2].classList.add('active');
    //         slideText[1].classList.remove('active');
    //         dotsArray[2].classList.add('dot__active');
    //         dotsArray[1].classList.remove('dot__active');



    //         count = 0;
    //     }
    // }




    const swiper2 = new Swiper(".mySwiper2", {

        slidesPerView: 'auto',
        // setWrapperSize: true,
        centerSlides: true,

        navigation: {
            nextEl: ".arrow-right",
            prevEl: ".arrow-left",
        },

    });


    // startSlide();




};
export default swiper;