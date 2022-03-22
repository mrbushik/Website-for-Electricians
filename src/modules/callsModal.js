const callsModal = () => {
    const orderCallBtn = document.querySelectorAll('.callback-btn ');
    const modal = document.querySelector('.modal-callback ');
    const modalOverlay = document.querySelector('.modal-overlay');
    const close = document.querySelector('.modal-close');
    const helpBtn = document.querySelector('.button-services');
    const repairItem = document.querySelectorAll('.repair__item');

    orderCallBtn[1].addEventListener('click', () => {
        modal.style.display = 'block';
        modalOverlay.style.display = 'block';

    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
        modalOverlay.style.display = 'none';
    });

    modalOverlay.addEventListener('click', () => {
        modal.style.display = 'none';
        modalOverlay.style.display = 'none';
    });

    //task 5
    repairItem.forEach((item) => {
        item.addEventListener('click', () => {
            modal.style.display = 'block';
            modalOverlay.style.display = 'block';
        });
    });

    //task 6 
    helpBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        modalOverlay.style.display = 'block';
    });

};
export default callsModal;