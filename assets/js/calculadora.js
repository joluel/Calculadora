let display = document.getElementById("display");
let ecuacion = "";

function appenValue (value) {
    ecuacion += value;
    display.value = ecuacion;
}

function clearDisplay() {
    ecuacion = "";
    display.value = "";
}

function calculate() {
    try {
        let resultado = eval(ecuacion);
        display.value = resultado;
        ecuacion = resultado.toString();
    } catch (error) {
        display.value = "Error";
    }
}