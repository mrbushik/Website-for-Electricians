const pageOrientation = () => {
    const menuItem = document.querySelector('.top-menu');
    const menuLink = menuItem.querySelectorAll('a');
    const toUpBtn = document.querySelector('.up');


    //header link
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


    //up btn 
    window.addEventListener('scroll', () => {
        if (window.pageYOffset < 350) {
            toUpBtn.style.display = 'none';
        }
        if (window.pageYOffset > 350) {
            toUpBtn.style.display = 'block';
        }
        toUpBtn.addEventListener('click', () => {
            window.scrollTo(0, 0);
        });
    });


};
export default pageOrientation;