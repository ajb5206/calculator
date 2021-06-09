//const number1 = parseInt(prompt("Enter a number"));
//const number2 = parseInt(prompt("Enter another number:"));

function subtract(number1, number2) {
  return number1 - number2;
}

function add(number1, number2) {
  return number1 + number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}


//const result = divide(number1, number2);
//alert(result);

function caltofahr(number1){
  return number1 * (9/5) + 32;
}

const number1 = parseInt(prompt("Enter the temperature in Celcius."));
const result = caltofahr(number1);
alert("The temperature is " + result + " degrees!");