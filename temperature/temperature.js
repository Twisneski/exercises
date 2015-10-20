/*
  ...........YOUR MISSION...........

  Write a program that will convert a temperature from
  fahrenheit to celsius, or from celsius to fahrenheit.

  1. In the HTML, have one input field where someone can enter
      in a temperature. 
  2. Create a radio button group where Celsius or Fahrenheit 
      can be selected as the scale that the number should be 
      converted to. 
  3. Create a block level element that will hold the text of the
      converted temperature.
  4. Create a button that, when clicked, displays the converted.
  5. Create another button that, when clicked, clears any text
      in the input field.
  6. Add an event handler to the input field that checks if the 
      user pressed the enter key, and if that happens, perform
      the conversion.
  7. If the temperature is greater than 90F/32C the color of 
      the converted temperature should be red.
  8. If the temperature is less than 32F/0C the color of 
      the converted temperature should be blue.
  9. For any other temperature, the color should be green.
*/



// Get a reference to the button element in the DOM use this with color change tempResult
var button = document.getElementById("converter");
console.log(button);
var clearButton = document.getElementById("clearButton");
console.log(clearButton);
// This function should determine which conversion should
// happen based on which radio button is selected.  connect to tempChoice
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
  var fahrenheit = document.getElementById("f").checked; 
  var celsius = document.getElementById("c").checked;
  var input = document.getElementById("enteredAmount").value
  console.log(fahrenheit)
  console.log(celsius)
  if(fahrenheit === true){
    var result = toFahrenheit(input)
    document.getElementById("output").value = result
  } else if (celsius === true) { 
    var result = toCelsius(input)
    document.getElementById("output").value = result 
  } else{

  };
    var output = document.getElementById("output").value
    var outputElement = document.getElementById("output")
    if ((output >= 90 && fahrenheit) || (output >= 32 && celsius)) {
    outputElement.style.color = "red";
  } 
    else if ((output <= 32 && fahrenheit) || (output <= 0 && celsius)) {
    
    outputElement.style.color = "blue";}
    else if (((output >= 32 || output <= 90) && fahrenheit) 
      || (output >= 0 || output <= 32) && celsius) {
    
    outputElement.style.color = "green"
}
}
  
  


function determineClear (clickEvent) {
  console.log("event", clickEvent);
  document.getElementById("output").value = null

}

function toCelsius (input) {
  var convert;
  // var fButton = document.getElementById("c")
  convert = (input-32) * 5/9;
  return convert;
}

function toFahrenheit (input) {
  var convert;
  // var fButton= document.getElementById("f")
  convert = 9/5 * input+32;
  return convert;
}

// Assign a function to be executed when the button is clicked. connect toconvert button
button.addEventListener("click", determineConverter);
clearButton.addEventListener("click", determineClear);

// Grab Radio buttons (var fButton = document.getElementById())
// Same for C
// Check to see which is checked (google: "javascript radio checked")


// Run toCelsius or toFahrenheit depending on which Radio button is checked
// ^^^^^ if (f.checked === true) {  
//
//}
// Figure out what input is/grab the number value from the input field (google: "javascript input value")
// Use that input value in each temp function
// Display the return of the conversion function on the DOM










