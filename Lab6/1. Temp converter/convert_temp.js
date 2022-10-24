"use strict";
const $ = selector => document.querySelector(selector);

/*********************
*  helper functions  *
**********************/
const calculateCelsius = temp => { 
	temp = ((temp-32) * 5/9).toFixed(2);
	return temp;
}

const calculateFahrenheit = temp => {
	temp = (temp * 9/5 + 32).toFixed(2);
	return temp;
}

const toggleDisplay = (label1Text, label2Text) => {
		$("#degree_label_1").innerHTML = label1Text;
		$("#degree_label_2").innerHTML = label2Text;
		
}

/****************************
*  event handler functions  *
*****************************/
const convertTemp = () => {   
	let temp = $("#degrees_entered").value;

	if (isNaN(temp)) {
		document.getElementById("message").innerHTML = "You must enter a valid number!";
		console.log(`ERROR\nEntered:\t ${temp}`)
	}
	else if ($("#to_celsius").checked) {
		console.log("Convert to celsius")
		calculateCelsius();
		console.log("Converted: " + calculateCelsius(temp));
		document.getElementById("message").innerHTML = "Celsius temperature is: " + calculateCelsius(temp);
		$("#degrees_computed").value = calculateCelsius(temp);
		console.log(`Temp entered: ${temp}`);
		 
	}
	else if ($("#to_fahrenheit").checked) {
		console.log("Convert to Farehaint")
		calculateFahrenheit();
		console.log("Converted: " + calculateFahrenheit(temp));
		document.getElementById("message").innerHTML = `Fagrenheit temperature is: ${calculateFahrenheit(temp)}`;
		console.log(`Temp entered: ${temp}`);
	}
};

const toCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toFahrenheit = () => toggleDisplay("Enter Celsius degrees:", "Degrees Fahrenheit:");

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#convert").addEventListener("click", convertTemp);
    $("#to_celsius").addEventListener("click", toCelsius);
    $("#to_fahrenheit").addEventListener("click", toFahrenheit);
	
	// move focus
	$("#degrees_entered").focus();
});