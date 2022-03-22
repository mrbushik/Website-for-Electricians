const pageOrientation = () => {
    const menuItem = document.querySelector('.top-menu');
    const menuLink = menuItem.querySelectorAll('a');
    const toUpBtn = document.querySelector('.up');


    //animation function
    const animationTransition = (target) => {
        let currentPagePosition = window.pageYOffset;
        if (currentPagePosition < target) {
            let stop = target - 50;
            const timeToUp = setInterval(() => {
                let currentPagePosition = window.pageYOffset;
                let position = currentPagePosition + 50;
                let check = window.pageYOffset < target;
                window.scrollTo(0, position);
                if (currentPagePosition > stop) {
                    clearInterval(timeToUp);
                }
            }, 10);
        }
        if (currentPagePosition > target) {
            const timeToUp = setInterval(() => {
                let currentPagePosition = window.pageYOffset;
                let position = currentPagePosition - 50;
                let check = window.pageYOffset < target;
                window.scrollTo(0, position);
                if (currentPagePosition <= target) {
                    clearInterval(timeToUp);
                }
            }, 10);
        }
    };

    //header link
    menuLink[0].addEventListener('click', (e) => {
        e.preventDefault();
        animationTransition(550);

    });
    menuLink[1].addEventListener('click', (e) => {
        e.preventDefault();
        animationTransition(3025);
    });
    menuLink[2].addEventListener('click', (e) => {
        e.preventDefault();
        animationTransition(3350);
    });


    //up btn 
    window.addEventListener('scroll', () => {
        if (window.pageYOffset < 350) {
            toUpBtn.style.display = 'none';
        }
        if (window.pageYOffset > 350) {
            toUpBtn.style.display = 'block';
        }

    });
    // smoothScroll
    toUpBtn.addEventListener('click', () => {

        animationTransition(0);

    });



};
export default pageOrientation;