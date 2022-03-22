const swiper = () => {
    const swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

    });
    var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".arrow-right",
            prevEl: ".arrow-left",
        },
    });
};
export default swiper;