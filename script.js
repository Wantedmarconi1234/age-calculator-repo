//inputs
const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');
const form = document.querySelector(".form-group");

//label
const dayLabel = document.querySelector('#day-label');
const monthLabel = document.querySelector('#month-label');
const yearLabel = document.querySelector('#year-label');

//outputs
const daysOutput = document.querySelector('.days-results');
const monthsOutput = document.querySelector('.months-results');
const yearsOutput = document.querySelector('.years-results');

// error_msg
const day_error = document.querySelector('.day-error');
const month_error = document.querySelector('.month-error');
const year_error = document.querySelector('.year-error');

//submit
const submit = document.querySelector(".submit-button")

//date declarations

let isValid = true;

submit.addEventListener("click", myCalculator)
dayInput.addEventListener("input", () => {
    if (dayInput.value >= 32 || dayInput.value < 0) {
        day_error.innerHTML = "Must be a valid day";
        dayLabel.style.color = "#ff5757";
        form.style.margin = "5px";
        isValid = false;
    }
    else {
        isValid;
    }
})

monthInput.addEventListener("input", () => {
    if (monthInput.value > 12 || monthInput.value < 0) {
        month_error.innerHTML = "Must be a valid month";
        monthLabel.style.color = "#ff5757"
        form.style.margin = "1px";
        isValid = false
    }
    else {
        isValid;
    }
})

yearInput.addEventListener("input", () => {
    if (yearInput.value > new Date().getFullYear()) {
        year_error.innerHTML = "Must be a valid year";
        yearLabel.style.color = "#ff5757"
        form.style.margin = "5px";
        isValid = false;
    }
    else {
        isValid;
    }
})

function myCalculator(e) {
    e.preventDefault();
    if (isValid) {
        let data = `${monthInput.value}/${dayInput.value}/${yearInput.value}`
        let ageDiff = Date.now() - new Date(data);
        let ageYear = new Date(ageDiff).getFullYear() - 1970;
        let ageMonth = new Date(ageDiff).getMonth();
        // let ageDay =  new Date(ageDiff)

    // Display
    yearsOutput.innerHTML = ageYear;
    monthsOutput.innerHTML = ageMonth;
    daysOutput.innerHTML = ageDay;
    }

    if (isValid = false) {
        alert("Please you can't proceed till all information is accurate")
    }
}


