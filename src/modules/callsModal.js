const callsModal = () => {
    const orderCallBtn = document.querySelectorAll('.callback-btn ');
    const modal = document.querySelector('.modal-callback ');
    const modalOverlay = document.querySelector('.modal-overlay');
    const close = document.querySelector('.modal-close');
    const helpBtn = document.querySelector('.button-services')


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

    //task 6 
    helpBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        modalOverlay.style.display = 'block';
    });

};
export default callsModal;