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
var isValidYear = year =>
    year && year >= 1850 && year < new Date().getFullYear();
var isValidMonth = month => month >= 1 && month <= 12;
var isLeapYear = year =>
    year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
var isValidDay = (day, month, year) => {
    var monthLength = [
        31,
        isLeapYear(year) ? 29 : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
    ];
    return day > 0 && day <= monthLength[month - 1];
};
var splitDateInParts = date => {
    var parts = date.split("/");
    return [parseInt(parts[0]), parseInt(parts[1]), parseInt(parts[2])];
};
var isValidDate = date => {
    if (date.length < 8 || date.length > 10) return false;
    var parts = splitDateInParts(date); // [day, month, year]
    return (
        isValidYear(parts[2]) &&
        isValidMonth(parts[1]) &&
        isValidDay(parts[0], parts[1], parts[2])
    );
};
var validateBirthdate = () => {
    var birthdayField = document.getElementById("birthday");
    var valid = isValidDate(birthdayField.value);
    if (isValidDate(birthdayField.value)) {
        birthdayField.classList.remove("error");
    } else {
        birthdayField.classList.add("error");
    }
    return valid;
}

// 3. DNI Validation
var DNI_LETTERS = "TRWAGMYFPDXBNJZSQVHLCKET";
var isValidDNILetter = (dniLetter, dniNumber) =>
    DNI_LETTERS[dniNumber % 23] === dniLetter.toUpperCase();
var isValidDNINumber = number => number >= 0 && number <= 99999999;
var isValidDNI = dni => {
    if (dni.length !== 9) return false;
    var dniNumber = dni.slice(0, 8);
    var dniLetter = dni.slice(8, 9);
    return isValidDNINumber(dniNumber) && isValidDNILetter(dniLetter, dniNumber);
};
var validateDNI = () => {
    var dniField = document.getElementById("dni");
    var valid = isValidDNI(dniField.value);
    if (valid) {
        dniField.classList.remove("error");
    } else {
        dniField.classList.add("error");
    }
    return valid;
};

//4 . Mobile validation

var isValidMobile = mobile => {
    return (
        parseInt(mobile) &&
        mobile.length === 9 &&
        (mobile.startsWith(9) ||
            mobile.startsWith(8) ||
            mobile.startsWith(7) ||
            mobile.startsWith(6))
    );
};
var validateMobile = () => {
    var mobileField = document.getElementById("mobile");
    var valid = isValidMobile(mobileField.value);
    if (valid) {
        mobileField.classList.remove("error");
    } else {
        mobileField.classList.add("error");
    }
}
// 5. General Algorithm
function validateForm(event) {
    event.preventDefault();

    validateFullName();
    validateBirthdate();
    validateDNI();
    validateMobile();
}
//Events
document
    .getElementById('register')
    .addEventListener('submit', validateForm);
