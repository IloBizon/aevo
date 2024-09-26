let callForm = document.getElementById("call_form");
let callInput = callForm.querySelector(".form__input");
let callStatus = callForm.querySelector(".form__status")


let subscribeForm = document.getElementById("subscribe_form")
let subscribeInput = subscribeForm.querySelector(".form__input");
let subscribeStatus = subscribeForm.querySelector(".form__status")


if (callForm.attachEvent) {
    callForm.attachEvent('submit', function(event){
        event.preventDefault();
        callFormHandler(event);   
    });
} 
else {
    callForm.addEventListener("submit", function(event){
        event.preventDefault();
        callFormHandler(event);
    })
}

if (subscribeForm.attachEvent) {
    subscribeForm.attachEvent('submit', function(event){
        event.preventDefault();
        subscribeFormHandler(event);   
    });
} 
else {
    subscribeForm.addEventListener("submit", function(event){
        event.preventDefault();
        subscribeFormHandler(event);
    })
}


function validatePhoneNumber() {
    const phoneNumber = callInput.value;
    const phoneNumberPattern = /^[9|8][0-9]{10}$/;
    if (!phoneNumberPattern.test(phoneNumber))
    {
        return false;
    }
    else {
        return true;
    }
}


function callFormHandler (event) {
    if(validatePhoneNumber()) {
        if(callStatus.classList.contains("form__status_error"))
        {
            callStatus.classList.remove("form__status_error")
        }
        fetch("http://127.0.0.1:5000/forms", {
            method: "POST",
            body: JSON.stringify({
                "id": "callForm",
                "fields": [{
                    "name": "Phone",
                    "value": callInput.value
                },]    
            }),
            headers: {
                'Content-Type': 'application/json'
              }
        })


        callStatus.innerHTML = "Данные успешно отправлены!"
    }
    else {
        callStatus.innerHTML = "Введите номер в правильном формате!"
        callStatus.classList.add("form__status_error")
    }
    
}

function subscribeFormHandler(event) {
    fetch("http://127.0.0.1:5000/forms", {
        method: "POST",
        body: JSON.stringify({
            "id": "subscribeForm",
            "fields": [{
                "name": "Email",
                "value": subscribeInput.value
            },]    
        }),
        headers: {
            'Content-Type': 'application/json'
          }
    })
    subscribeStatus.innerHTML = "Данные успешно отправлены!"
}