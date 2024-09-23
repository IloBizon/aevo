let popup = document.querySelector(".popup");
let popupTitle = document.querySelector(".popup__title")
let popupForm = document.querySelector(".popup__form")
let nameInput = document.getElementById("name");
let phoneInput = document.getElementById("name");
let addressInput = document.getElementById("name");

let sendBtn = document.querySelector("popup__form-btn");

function showPopup() {
    popup.classList.add("popup_show")
}
function hidePopup() {
    popup.classList.remove("popup_show")
}

function sendForm(event) {
    event.preventDefault();
    popupForm.classList.add("popup__form_hidden");
    popupTitle.innerHTML = "Заказ оформлен!"
}