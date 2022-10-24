"use strict";
const $ = selector => document.querySelector(selector);

const calculateFV = () => {

    //taking entered
    let investment = $("#investment").value;
    let rate = $("#annual_rate").value;
    let years = $("#years").value;

    //error handling
    if (isNaN(investment) || investment < 0 || investment > 10000) {
        $("#investment_error").innerHTML = "Must be > 0 and < 10000";
        console.log(`Investment error. Value entered: ${investment}`);
    }
    else {
        $("#investment_error").innerHTML = " ";
        console.log(`Investment €${investment}`);
    }
    if (isNaN(rate) || rate < 0 || rate > 12) {
        $("#rate_error").innerHTML = "Must be > 0 and <= 12";
        console.log(`Rate error. Value entered: ${rate}`)
    }
    else {
        $("#rate_error").innerHTML = " ";
        console.log(`Rate: ${rate}%`)
    }
    if (isNaN(years) || years < 0 || years > 50) {
        $("#years_error").innerHTML = "Must be > 0 and <= 50";
        console.log(`Years error. Value entered: ${years}`)
    }
    else {
        $("#years_error").innerHTML = " ";
        console.log(`Years: ${years}`)
    }

    //confition to calculate future value
    if (investment > 0 && investment < 10000 && rate > 0 && rate <= 12 && years > 0 && years < 50) {
        //calculate future value of an ivestment
        var x = (1 + (rate / 100))
        var fv = investment * (Math.pow(x, years));
        fv = fv.toFixed(2);
        $("#future_value").value = "€" + fv;
        console.log("Future Value -> €", fv);
        return fv;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // add event handlers
    $("#calculate").addEventListener("click", calculateFV);

    // move focus
    $("#investment").focus();
});