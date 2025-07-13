// Get the display input element
const display = document.getElementById('display');

// Append value to the display
function appendValue(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Evaluate the expression
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
