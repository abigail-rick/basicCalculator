function ButtonClicked(value) {
    input.value += value;
}

const one = (() => document.getElementById('one'))();
one.addEventListener("click", () => ButtonClicked('1')
);

const two = (() => document.getElementById('two'))();
two.addEventListener("click", () => ButtonClicked('2')
);

const three = (() => document.getElementById('three'))();
three.addEventListener("click", () => ButtonClicked('3')
);
const four = (() => document.getElementById('four'))();
four.addEventListener("click", () => ButtonClicked('4')
);
const five = (() => document.getElementById('five'))();
five.addEventListener("click", () => ButtonClicked('5')
);
const six = (() => document.getElementById('six'))();
six.addEventListener("click", () => ButtonClicked('6')
);

const seven = (() => document.getElementById('seven'))();
seven.addEventListener("click", () => ButtonClicked('7')
);
const eight = (() => document.getElementById('eight'))();
eight.addEventListener("click", () => ButtonClicked('8')
);
const nine = (() => document.getElementById('nine'))();
nine.addEventListener("click", () => ButtonClicked('9')
);
const zero = (() => document.getElementById('zero'))();
zero.addEventListener("click", () => ButtonClicked('0')
);
 


function clearInputs() {
    const input = document.getElementById("input");
    input.value = '';
}

const AC = (() => document.getElementById('AC'))();
AC.addEventListener('click', clearInputs);

const output = document.getElementById('output');

function addInputs(){
    let sum = 0;
    output = input + input;
    output = output.textContent;
}

const add = (()=> document.getElementById('add'))();
add.addEventListener('click', addInputs);

function equalsOutput(){
   let result = input + input;
}
const equals = (()=> document.getElementById('equals'))();
    