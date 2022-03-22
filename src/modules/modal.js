'use strict';
const modal = () => {
    const name = document.querySelector('.input__name');
    const phone = document.querySelector('.input__phone');
    const form = document.querySelector('.lead__form');
    name.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я]/, '');
    });
    phone.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\d\+]/, '');
    });
    const statusBlock = document.createElement('div');
    statusBlock.className = 'statusBlock';
    statusBlock.style.color = 'black';

    const loadText = 'загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо, наш менеджер с вами свяжется';
    const deleteStatusBlock = () => {
        statusBlock.textContent = '';
    };

    const validate = (list) => {
        name.value.trim();
        let success = true;
        list.forEach((input) => {
            //   if (!input.classList.contains('success')) {
            if (input.value.trim() === '') {
                success = false;
                //проверка на буквы в имени

            } else if (name.value.length < 2) {
                success = false;

                //проверка на количество цифр в номере
            } else if (phone.value.length < 4 || phone.value.length > 16) {
                success = false;
            }
        });
        return success;
    };

    const sendData = (data) => {
        return fetch(' https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    };

    const submitForm = () => {

        statusBlock.textContent = loadText;
        form.append(statusBlock);
        const formDate = new FormData(form);
        const formBody = {};
        const formElements = form.querySelectorAll('input');

        formDate.forEach((val, key) => {
            formBody[key] = val;
        });

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {

                    statusBlock.textContent = successText;
                    setTimeout(deleteStatusBlock, 3000);
                    formElements.forEach(input => {
                        input.value = '';
                    });
                })
                .catch(error => {
                    statusBlock.textContent = errorText;
                });
        } else {
            statusBlock.textContent = errorText;
            setTimeout(deleteStatusBlock, 3000);
            alert('заполните все формы');

        }
    };
    try {
        if (!form) {
            throw new Error('добавьте элемент');
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            submitForm();

        });
    } catch (error) {
        console.log(error.message);
    }
};

export default modal;