//Create an HTML file that has two input fields to accept the two numbers to perform operations on.
//Create 4 buttons to perform each of the basic mathematical functions (add, subtract, multiply, divide).
// In your JavaScript, put an event listener on each of the buttons.
// Copy the code below an implement a basic calculator.
// When the user performs one of the operations, output the result to another DOM element of your choice.
/*
 /*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiply(num1, num2) {
  return num1 * num2;
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function add(num1, num2) {
  return num1 + num2;
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtract(num1, num2) {
  return num1 - num2;
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

function divide(num1, num2) {
  return num1 / num2;
}

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them
  Return the value of the operation.
 */
function calc(num1, num2, function1) {
  return function1(parseInt(num1), parseInt(num2));
}


var resultBox = document.getElementById("result");

document.getElementById("addition").addEventListener("click", function() {
  var number1 = document.getElementById("firstnum").value;
  var number2 = document.getElementById("secondnum").value;
  var result = calc(number1, number2, add);

  document.getElementById("firstnum").value = "";
  document.getElementById("secondnum").value = "";
  resultBox.innerHTML = result;
});

document.getElementById("subtraction").addEventListener("click", function() {
  var number1 = document.getElementById("firstnum").value;
  var number2 = document.getElementById("secondnum").value;
  var result = calc(number1, number2, subtract);

  document.getElementById("firstnum").value = "";
  document.getElementById("secondnum").value = "";
  resultBox.innerHTML = result;
});

document.getElementById("multiplication").addEventListener("click", function() {
  var number1 = document.getElementById("firstnum").value;
  var number2 = document.getElementById("secondnum").value;
  var result = calc(number1, number2, multiply);

  document.getElementById("firstnum").value = "";
  document.getElementById("secondnum").value = "";
  resultBox.innerHTML = result;
});

document.getElementById("division").addEventListener("click", function() {
  var number1 = document.getElementById("firstnum").value;
  var number2 = document.getElementById("secondnum").value;
  var result = calc(number1, number2, divide);

  document.getElementById("firstnum").value = "";
  document.getElementById("secondnum").value = "";
  resultBox.innerHTML = result;
});
