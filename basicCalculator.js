const calculator = document.querySelectorAll('calculatorButton');

function clearInputs() {
    const input = document.getElementById("input");
    input.value = '';
}

const AC = (() => document.getElementById('AC'))();
AC.addEventListener('click', clearInputs);

function addInputs(){
    let sum = 0;
    input.value += sum;
}

const add = (()=> document.getElementById('add'))();
add.addEventListener('click', addInputs);



const positiveNegative = document.getElementById('positiveNegative');

const percent = document.getElementById('percent');

const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

        