// Personalized Calculator Script
/*Author: [M. Balo] */

    // Grab references to the display and result elements
let display = document.getElementById('display');
let result = document.getElementById('result');
let currentNumber = '';  // Stores the current number being entered
let previousNumber = ''; // Stores the previous number for operations
let operation = undefined; // StoreS the current operation

    // The following is used append a number to the current input
function appendNumber(number) {
    // Prevent multiple decimals
    if (number === '.' && currentNumber.includes('.')) return;
    currentNumber = currentNumber.toString() + number.toString();
    updateDisplay();
}

    // Here I use function to choose an operation
function chooseOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate(); // If there's a previous number, calculate first
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
    updateDisplay();
}

    // To perform the calculation
function calculate() {
    let computation;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return; // Ensure that both numbers are valid
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    result.value = `${previousNumber} ${operation} ${currentNumber} = ${computation}`;
    currentNumber = computation;
    operation = undefined;
    previousNumber = '';
    updateDisplay();
}

    // This is will allow to clear the display
function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = undefined;
    result.value = '';
    updateDisplay();
}

    // For display update
function updateDisplay() {
    display.value = currentNumber;
}

    // Conversion functions with personalized design
function convertKgToLbs() {
    if (currentNumber === '') return;
    const kg = parseFloat(currentNumber);
    if (isNaN(kg)) return;
    const lbs = kg * 2.20462;
    result.value = `${kg} kg = ${lbs.toFixed(2)} lbs`;
    currentNumber = lbs.toFixed(2);
    updateDisplay();
}

function convertFeetToMeters() {
    if (currentNumber === '') return;
    const feet = parseFloat(currentNumber);
    if (isNaN(feet)) return;
    const meters = feet * 0.3048;
    result.value = `${feet} ft = ${meters.toFixed(2)} m`;
    currentNumber = meters.toFixed(2);
    updateDisplay();
}
zx
function convertCelsiusToFahrenheit() {
    if (currentNumber === '') return;
    const celsius = parseFloat(currentNumber);
    if (isNaN(celsius)) return;
    const fahrenheit = (celsius * 9/5) + 32;
    result.value = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
    currentNumber = fahrenheit.toFixed(2);
    updateDisplay();
}

function convertFahrenheitToCelsius() {
    if (currentNumber === '') return;
    const fahrenheit = parseFloat(currentNumber);
    if (isNaN(fahrenheit)) return;
    const celsius = (fahrenheit - 32) * 5/9;
    result.value = `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
    currentNumber = celsius.toFixed(2);
    updateDisplay();
}

function convertInchesToCm() {
    if (currentNumber === '') return;
    const inches = parseFloat(currentNumber);
    if (isNaN(inches)) return;
    const cm = inches * 2.54;
    result.value = `${inches} in = ${cm.toFixed(2)} cm`;
    currentNumber = cm.toFixed(2);
    updateDisplay();
}

    // Backspace
function backspace() {
    if (currentNumber !== '') {
        currentNumber = currentNumber.toString().slice(0, -1);
        updateDisplay();
    }
}

    // Square the current number
function square() {
    if (currentNumber === '') return;
    const num = parseFloat(currentNumber);
    if (isNaN(num)) return;
    const squared = num * num;
    result.value = `${num}² = ${squared}`;
    currentNumber = squared;
    updateDisplay();
}

    // The following part will allow to calculate the square root of the current number
function squareRoot() {
    if (currentNumber === '') return;
    const num = parseFloat(currentNumber);
    if (isNaN(num)) return;
    const sqrt = Math.sqrt(num);
    result.value = `√${num} = ${sqrt}`;
    currentNumber = sqrt;
    updateDisplay();
}
