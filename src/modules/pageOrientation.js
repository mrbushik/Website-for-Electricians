const pageOrientation = () => {
    const menuItem = document.querySelector('.top-menu');
    const menuLink = menuItem.querySelectorAll('a');


    menuLink[0].addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo(0, 550);
    });
    menuLink[1].addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo(0, 3525);
    });
    menuLink[2].addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo(0, 4045);
    });

};
export default pageOrientation;