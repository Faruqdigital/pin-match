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
function removeElement () {
    const currentValue = document.querySelector(".showValue").value;
    const newValue = currentValue.substring(0, currentValue.length - 1);
    document.querySelector(".showValue").value = newValue;
}

// Task 06 - (Check pin) if the pin matched or not
function checkPin () {
    const generatedPin = document.querySelector(".generatedPin").value;
    const newPin = document.querySelector(".showValue").value;

    if(generatedPin == newPin) {
        document.querySelector(".correct-pin").style.display = "block";
        document.querySelector(".wrong-pin").style.display = "none";
        document.querySelector(".generate-btn").style.backgroundColor = "green";
        document.querySelector(".submit-btn").style.backgroundColor = "green";
        document.querySelector(".submit-btn").disabled = true;
        document.querySelector(".generate-btn").disabled = true;
    }
    else{
        document.querySelector(".correct-pin").style.display = "none";
        document.querySelector(".wrong-pin").style.display = "block";
        document.querySelector(".generate-btn").style.backgroundColor = "red";
        document.querySelector(".submit-btn").style.backgroundColor = "red";
        document.querySelector(".submit-btn").disabled = false;
        document.querySelector(".generate-btn").disabled = true;
        
    let tryLeft = document.querySelector("#tryLeft").innerText
    let newTryLeft = parseInt(tryLeft)
    if(newTryLeft > 0){
        newTryLeft = newTryLeft - 1;
    }
    
    document.querySelector("#tryLeft").innerText = newTryLeft
    document.querySelector(".showValue").value = ""

    if(newTryLeft === 0) {
        document.querySelector(".submit-btn").disabled = true;
        document.querySelector(".submit-btn").style.backgroundColor = "black";
        document.querySelector(".submit-btn").innerText = "PIN LOCKED"
    }

    }

} 
