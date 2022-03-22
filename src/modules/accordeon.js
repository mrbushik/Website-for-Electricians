const accordeon = () => {
    const accordeonList = document.querySelector('.accordeon');
    const questionItem = document.querySelectorAll('.question__item');
    const questionItemContent = document.querySelectorAll('.question__item-content');


    accordeonList.addEventListener('click', (e) => {

        if (e.target.closest('.question__item')) {
            const targetBtn = e.target.closest('.question__item');
            questionItemContent.forEach((textElem, index) => {
                textElem.style.display = 'none';
            });

            questionItem.forEach((element, index) => {

                if (element === targetBtn) {
                    element.classList.add('active');
                    questionItemContent[index].style.display = 'block';

                } else {
                    element.classList.remove('active');
                }

            });

        }
    });
};
export default accordeon;