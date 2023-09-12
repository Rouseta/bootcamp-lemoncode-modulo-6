//1. Full name validation
// - El nombre no esté vacío, que no sed anull, o undefined
//Longitud mínima de 5 caracteres
var isValidFullName = fullname => fullname && (fullname.length >= 5);
var validateFullName = () => {
    var fullNameField = document.getElementById("fullName");
    var valid = isValidFullName(fullNameField.value)
    if (valid) {
        fullNameField.classList.remove("error")
    } else {
        fullNameField.classList.add("error")
    }
    return valid;
}

//2.Birthday validation
var isValidYear = year => year && year >= 1850 && year <= new Date().getFullYear();
var isValidMonth = month => month && month >= 1 && month <= 12;
var isLeapYear = year => year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)
var isValidDay = (day, month, year) => {
    var februaryLength = isLeapYear(year) ? 29 : 28
    var monthLength = [31, februaryLength, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return day > 0 && day <= monthLength[month - 1]
}



// 3. DNI Validation

//4 . Mobile validation
// 5. General Algorithm
function validateForm(event) {
    event.preventDefault();

    validateFullName();
}
//Events
document
    .getElementById('register')
    .addEventListener('submit', validateForm);
