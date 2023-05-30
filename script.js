var op = document.getElementById('display');

// function to add a character to the display
function display(char) {
    op.value += char;
}

// function to clear the display
function clearDisplay() {
    op.value = '';
}

// function to remove the last character from the display
function backspace() {
    op.value = op.value.slice(0, -1);
}

// function to calculate the result
function calculate() {
    try {
        op.value = eval(op.value);
    } catch (error) {
        op.value = 'Error';
    }
}

// key press function
function onKeyPress(event) {
    var key = event.key;
    if (!/[0-9+\-*/.%]/.test(key)) {
        event.preventDefault();
        alert("Please enter only numbers and operators!");
    }
}

// listen for key press events
document.addEventListener('keydown', onKeyPress);