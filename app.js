// Task 01 - Notification disable
document.querySelector(".wrong-pin").style.display = "none";
document.querySelector(".correct-pin").style.display = "none";

// Task 02 - Generate pin (4 digit pin)
function generatePin () {
    const pin = Math.floor(Math.random() * (9000) + 1000)
    document.querySelector(".generatedPin").value = pin;
    document.querySelector(".generatedPin").style.textAlign = "center";
}

// Task 03 - Showing the input value
function showInput(number) {
    const showValue = document.querySelector(".showValue")
    showValue.value = showValue.value + number;
    showValue.style.textAlign = "center";
}

// Task 04 - (clear all input) using C calculator
function clearInput() {
    document.querySelector(".showValue").value = " ";
}

// Task 05 (Remove element one by one) using < calculator
