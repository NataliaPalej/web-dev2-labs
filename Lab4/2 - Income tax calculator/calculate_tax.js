"use strict";
const $ = selector => document.querySelector(selector);

const processEntries = () => {
    const income = parseFloat($("#income").value);
	console.log("Income: ", income);

	if (isNaN(income) || income < 0) {
		alert("Enter valid positive number.\nPlease try again.");
		$("#income").focus();
	}
	else 
	calculateTax();
	$("#income").focus();
}

const calculateTax = () => {
	let salary = 0
	let tax = 0
	const income = parseFloat($("#income").value);

	if (income < 9225 && income >= 0) {
		$("#tax").value = (income*0.10).toFixed(2);
		tax = parseFloat($("#tax").value);
		console.log("Income tax bracket 1.\n\tIncome Tax: $", tax);
		salary = income - tax;
		console.log("You will only bring ", salary, " home :(")
	}
	else if (income >= 9225 && income < 37450){
		$("#tax").value = ((income*0.15)+922.50).toFixed(2);
		tax = parseFloat($("#tax").value)
		console.log("Income tax bracket 2.\n\tIncome Tax: $", tax);
		salary = income - tax;
		console.log("You will only bring ", salary, " home :(")
	}
	else if (income >= 37450 && income < 90750){
		$("#tax").value = ((income*0.25)+5156.25).toFixed(2);
		tax = parseFloat($("#tax").value);
		console.log("Income tax bracket 3.\n\tIncome Tax: $", tax);
		salary = income - tax;
		console.log("You will only bring ", salary, " home :(")
	}
	else if (income >= 90750 && income < 189300){
		$("#tax").value = ((income*0.28)+18481.25).toFixed(2);
		tax = parseFloat($("#tax").value);
		console.log("Income tax bracket 4.\n\tIncome Tax: $", tax);
		salary = income - tax;
		console.log("You will only bring ", salary, " home :(")
	}
	else if (income >= 189300 && income < 411500){
		$("#tax").value = ((income*0.33)+46075.25).toFixed(2);
		tax = parseFloat($("#tax").value);
		console.log("Income tax bracket 5.\n\tIncome Tax: $", tax);
		salary = income - tax;
		console.log("You will only bring ", salary, " home :(")
	}
	else if (income >= 411500 && income < 413200){
		$("#tax").value = ((income*0.35)+119401.25).toFixed(2);
		tax = parseFloat($("#tax").value);
		console.log("Income tax bracket 6.\n\tIncome Tax: $", tax);
		salary = income - tax;
		console.log("You will only bring ", salary, " home :(")
	}
	else if (income >= 413200) {
		$("#tax").value = ((income*0.396)+119996.25).toFixed(2);
		tax = parseFloat($("#tax").value);
		console.log("Income tax bracket 7.\n\tIncome Tax: $", tax);
		salary = income - tax;
		console.log("You will only bring ", salary, " home :(")
	}
	
}

//const clear = () => {
//    $("#income").value = " ";
//    $("#tax").value = " ";
//    $("#income").focus();
//    console.log("\tReset Fields")
//}

document.addEventListener("DOMContentLoaded", () => {
	$("#income").focus();
	$("#calculate").addEventListener("click", processEntries);
    //$("#clear").addEventListener("click", clear);
});

