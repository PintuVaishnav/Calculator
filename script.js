let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString(); // Convert the result to a string
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    const display = document.getElementById("display");
    display.value = displayValue;
}

function backspace() {
    if (displayValue.length > 0) {
        displayValue = displayValue.slice(0, -1);
        updateDisplay();
    }
}


