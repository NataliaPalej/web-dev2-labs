"use strict";

const $ = selector => document.querySelector(selector);

const processEntries = () => {
    const subtotal = parseFloat($("#subtotal").value);
    const taxRate = parseFloat($("#tax_rate").value);
    let taxSales = 0;
    let total = 0;

    if (isNaN(subtotal) || subtotal < 0 || subtotal > 10000) {
        alert("Subtotal must be a valid number between 0 and 10000.\nTry again.")
        $("#subtotal").focus();
        console.log("Wrong Subtotal input")
    }
    else if (isNaN(taxRate) || taxRate < 0 || taxRate > 12) {
        alert("Tax Rate must be a valid number between 0 and 12.\nTry agian.")
        $("#tax_rate").focus();
        console.log("Wrong Tax Rate input")
    }
    else {
        $("#sales_tax").value = (subtotal * taxRate/100).toFixed(2);  
        $("#total").value = parseFloat(subtotal) + parseFloat($("#sales_tax").value);
        taxSales = $("#sales_tax").value;
        total = $("#total").value;
        console.log("Subtotal: ", subtotal, "\nTax Rate: ", taxRate, "\nSales Tax: ", taxSales, "\nTotal: ", total)
        $("#subtotal").focus();
    }
}

const clear = () => {
    $("#subtotal").value = " ";
    $("#tax_rate").value = " ";
    $("#sales_tax").value = " ";
    $("#total").value = " ";
    $("#subtotal").focus();
    console.log("\tReset Fields")
}

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener(
        "click", processEntries)
    $("#clear").addEventListener("click", clear)
})