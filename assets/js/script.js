// global variable declaration start here
const form = document.querySelector(".form"),
    firstName = document.querySelector(".first-name"),
    lastName = document.querySelector(".last-name"),
    radioMale = document.querySelector(".male"),
    radioFemale = document.querySelector(".female"),
    success = document.querySelector(".success"),
    textArea = document.querySelector(".text-area"),
    checkBox = document.querySelector(".checked"),
    btn = document.querySelectorAll(".sub-btn"),
    NameError = document.querySelector(".firstName"),
    lasError = document.querySelector(".lastName"),
    addressErroe = document.querySelector(".address-error"),
    genderError = document.querySelector(".gender-error"),
    checkError = document.querySelector(".checkbox-error"),
    nameRagex = /^([a-zA-Z]){3,12}$/,
    addRagex = /^([0-9-a-z-A-z\.\-]){5,50}/;
var array = [];
// global variable declaration start here
// form event start here
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const errors = document.querySelectorAll(".text-active")
    if ((firstName.value) && (lastName.value) && (textArea.value) && (radioMale.checked || radioFemale.checked) && (checkBox.checked) && (errors.length === 0)) {
        
        // array.push(firstName.value, lastName.value, textArea.value, (radioMale.checked ? radioMale.value : radioFemale.value), checkBox.checked);
        let userData = {
            firstName : firstName.value,
            lastName : lastName.value,
            textArea: textArea.value,
            radio : (radioMale.checked ? radioMale.value : radioFemale.value)
        }
        array.push(userData);
        success.classList.add("show");
        firstName.value = "";
        lastName.value = "";
        radioFemale.checked = false;
        radioMale.checked = false;
        textArea.value = "";
        checkBox.checked = false;
        setTimeout(function () {
            success.classList.remove("show");
        }, 2000);
        showData();
    } else {
        success.classList.remove("show");
        showError(firstName, NameError, 'please enter a valid first name');
        showError(lastName, lasError, 'please enter a valid last name');
        addError();
        validGender();
        terms();
    }
});
// form event end here
// validation for name  start here
function showError(input, errorMSg, message) {
    let str = input.value;
    if (nameRagex.test(str)) {
        errorMSg.classList.remove("text-active");
    }

    else {
        errorMSg.innerText = message
        errorMSg.classList.add("text-active")
    }
};

firstName.addEventListener("blur", function () {
    showError(firstName, NameError, 'please enter a valid first name');
});


lastName.addEventListener("blur", function () {
    showError(lastName, lasError, 'please enter a valid last name');
});
// validation for name  start here
// validation for  address start here
function addError() {
    let str = textArea.value;
    if (nameRagex.test(str)) {
        addressErroe.classList.remove("text-active");
    }
    else {
        addressErroe.innerText = 'please enter a valid a address'
        addressErroe.classList.add("text-active")
    }
};

textArea.addEventListener("blur", function () {
    addError();
});
// validation for  address end here
// validation for radio and terms start here
function validGender() {
    if ((radioMale.checked != true) && (radioFemale.checked != true)) {
        genderError.innerText = "please select your gender"
        genderError.classList.add("text-active");
    }
    else {
        genderError.classList.remove("text-active");
    }
};

function terms(){
    console.log(checkBox.checked);
     if (!checkBox.checked ) {
        checkError.innerText = "please select our T&C"
        checkError.classList.add("text-active");
        console.log("if of check");
    }  else {
        checkError.classList.remove("text-active");
        console.log("JIJI");
    }
};
// validation for radio and terms end here
// form value showing start
function showData() {
    console.log(array);
    array.forEach(function (element) {
    let storageList = document.querySelector(".storage-list");
    let list = document.createElement("li");
    list.classList.add("storage-item");
    list.innerHTML = `<ul class="form-list">
    <li class="form-item">${element.firstName}</li>
    <li class="form-item">${element.lastName}</li>
    <li class="form-item">${element.textArea}</li>
    <li class="form-item">${element.radio}</li>
    <li class="form-item"><button class="e-btn edit-btn">edit</button></li>
    <li class="form-item"><button class="e-btn delete-btn">delete</button></li>
  </ul>`;
  storageList.appendChild(list);
    })
};
