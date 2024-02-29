document.addEventListener('DOMContentLoaded', function () {
    const showPopupBtn = document.getElementById('showPopupBtn');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');
    const requestForm = document.getElementById('requestForm');

    showPopupBtn.addEventListener('click', function () {
        popup.style.display = 'block';
    });

    closePopup.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    requestForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Здесь можно добавить логику отправки данных на сервер
        // например, с использованием AJAX или Fetch API
        popup.style.display = 'none';
    });
});
