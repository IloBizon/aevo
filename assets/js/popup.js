let popup = document.querySelector(".popup");
let popupTitle = document.querySelector(".popup__title")
let popupForm = document.querySelector(".popup__form")
let nameInput = document.getElementById("name");
let phoneInput = document.getElementById("phone");
let addressInput = document.getElementById("address");

let sendBtn = document.querySelector("popup__form-btn");

function showPopup() {
    popup.classList.add("popup_show")
}
function hidePopup() {
    popup.classList.remove("popup_show")
}

async function sendForm(event) {
    event.preventDefault();
    let response = await fetch("http://127.0.0.1:5000/forms", {
        method: "POST",
        body: JSON.stringify({
            "id": "order",
            "fields": [{
                "name": "Name",
                "value": nameInput.value
            },
            {
                "name": "Phone",
                "value": phoneInput.value
            },
            {
                "name": "Address",
                "value": addressInput.value
            }]    
        }),
        headers: {
            'Content-Type': 'application/json'
          }
    })

    popupForm.classList.add("popup__form_hidden");
    popupTitle.innerHTML = "Заказ оформлен!";
}