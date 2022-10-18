// global variable declaration start here
const form = document.querySelector(".form"),
    firstName = document.querySelector(".first-name "),
    lastName = document.querySelector(".last-name"),
    radioMale = document.querySelector(".male"),
    radioFemale = document.querySelector(".female"),
    success = document.querySelector(".success")
textArea = document.querySelector(".text-area"),
    checkBox = document.querySelector(".checked"),
    btn = document.querySelectorAll(".sub-btn"),
    NameError = document.querySelector(".firstName"),
    lasError = document.querySelector(".lastName"),
    addressErroe = document.querySelector(".address-error"),
    genderError = document.querySelector(".gender-error"),
    checkError = document.querySelector(".checkbox-error"),
    // validName = false,
    // validLast = false,
    // validAddress = false,
    // validRadio = false,
    // validCheckbox = false,
    nameRagex = /^([a-zA-Z]){3,12}$/,
    addRagex = /^([0-9-a-z-A-z\.\-]){5,50}/;
// global variable declaration start here
form.addEventListener("submit", function (e) {

    e.preventDefault();
    if ((firstName.value) && (lastName.value) && (textArea.value) && (radioMale.checked || radioFemale.checked) && (checkBox.checked)){
        success.classList.add("show");
        firstName.value = "";
        setTimeout(function(){
            success.classList.remove("show");
        },2000);
    } else{
        success.classList.remove("show");
        showError(firstName, NameError, 'please enter a valid first name');
        showError(lastName, lasError, 'please enter a valid last name');
        showError(textArea, addressErroe, 'please enter a valid a address')
        validGender();
    }
})
function showError(input, errorMSg, message) {
    let str = input.value;
    if (nameRagex.test(str)) {
        errorMSg.classList.remove("text-active");
    }
    else if (addRagex.test(str)) {
        errorMSg.classList.remove("text-active");

    }
    else {
        errorMSg.innerText = message
        errorMSg.classList.add("text-active")
    }
}

firstName.addEventListener("blur", function () {
    showError(firstName, NameError, 'please enter a valid first name');
})


lastName.addEventListener("blur", function () {
    showError(lastName, lasError, 'please enter a valid last name');
})

textArea.addEventListener("blur", function () {
    showError(textArea, addressErroe, 'please enter a valid a address')
})

function validGender() {
    if (radioMale.checked || radioFemale.checked) {
        genderError.classList.remove("text-active")
    }
    else if (checkBox.checked) {
        checkError.classList.remove("text-active")
    }
    else {
        genderError.innerText = "please select your gender"
        checkError.innerText = "please select our T&C"
        genderError.classList.add("text-active")
        checkError.classList.add("text-active")
    }
}

