const swiper = () => {
    const slideItem = document.querySelectorAll('.slide__item');
    const slideText = document.querySelectorAll('.table');

    let count = 1;

    slideItem[0].style.display = 'block';
    slideText[0].classList.add('active');

    const timer = setInterval(() => {
        count++;
        if (count == 1) {
            slideItem[2].style.display = 'none';
            slideItem[0].style.display = 'block';
        }
        if (count == 2) {
            slideItem[0].style.display = 'none';
            slideItem[1].style.display = 'block';
            slideText[1].classList.add('active');

        }
        if (count == 3) {
            slideItem[1].style.display = 'none';
            slideItem[2].style.display = 'block';
            slideText[2].classList.add('active');
            count = 0;
        }
    }, 3000);


    if (window.screen.width < 576) {

        const swiper2 = new Swiper(".mySwiper2", {

            slidesPerView: 1,
            spaceBetween: 30,

            navigation: {
                nextEl: ".arrow-right",
                prevEl: ".arrow-left",
            },

        });

    } else {
        const swiper2 = new Swiper(".mySwiper2", {

            slidesPerView: 3,
            spaceBetween: 30,

            navigation: {
                nextEl: ".arrow-right",
                prevEl: ".arrow-left",
            },

        });
    }





};
export default swiper;