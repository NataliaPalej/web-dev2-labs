"use strict";
const $ = selector => document.querySelector(selector);

const calculateFV = () => {
    let investment = $("#investment").value;
    let rate = $("#annual_rate").value;
    let years = $("#years").value;
    let result;
    console.log(`Interest: ${investment}\tRate: ${rate}\tYears: ${years}`);

    if (isNaN(investment) || investment < 0 || investment > 10000) {
        $("#investment_error").innerHTML = "Must be > 0 and < 10000";
    }
    if (isNaN(rate) || rate < 0 || rate > 12) {
        $("#rate_error").innerHTML = "Must be > 0 and <= 12";
    }
    if (isNaN(years) || years < 0 || years > 50) {
        $("#years_error").innerHTML = "Must be > 0 and <= 50";
    }
    else {
        let i;
        for (i = 1; i <= years; i++) {
            result += result*rate/100;
            result += investment;
        }
        $("#future_value").innerHTML = result;
        console.log("Future value: " + result);
    }
}

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", calculateFV);
	
	// move focus
	$("#investment").focus();
});