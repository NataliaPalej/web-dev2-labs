"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg = lbl => `${lbl} must be a valid number greater than zero.`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const processEntries = () => {
    let mpg = 0;
    const miles = parseFloat($("#miles").value);
    const gallons = parseFloat($("#gallons").value);
    console.log(`Miles: ${miles}\nUsed gallons: ${gallons}`)

    if (isNaN(miles) || miles <= 0) {
        alert(getErrorMsg("Miles driven"));
        focusAndSelect("#miles");
    } else if (isNaN(gallons) || gallons <= 0) {
        alert(getErrorMsg("Gallons of gas used"));
        focusAndSelect("#gallons");
    } else {
        $("#mpg").value = (miles / gallons).toFixed(2);
        mpg = $("#mpg").value;
    }
    console.log(`Miles per gallon: ${mpg}`)
};

var clearEntries = () => {
    $("#miles").value = "";
    $("#gallons").value = "";
    $("#mpg").value = "";

    console.log("Fields reset")
};

document.addEventListener("DOMContentLoaded", () => {
    $("#miles").focus();
    $("#calculate").addEventListener("click", processEntries);
    $("#mpg").addEventListener("dblclick", clearEntries);
    $("#miles").addEventListener("focus", () => {
        $("#miles").value = "";
    });
    $("#gallons").addEventListener("focus", () => {
        $("#gallons").value = "";
    });
    $("#gallons").addEventListener("focusout", processEntries);
});