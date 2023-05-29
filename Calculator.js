
function clearScreen() {
    document.getElementById("answer").value = "";
}

function display(value) {
    document.getElementById("answer").value += value;
}

function calculate() {
    var num1 = document.getElementById("answer").value;
    var num2 = eval(num1);
    document.getElementById("answer").value = num2;
}

function back() {
    var ev = document.getElementById('answer');
    ev.value = ev.value.slice(0, -1);
}