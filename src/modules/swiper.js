const swiper = () => {
    console.log('hello');
    let swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
        },
    });
};
export default swiper;