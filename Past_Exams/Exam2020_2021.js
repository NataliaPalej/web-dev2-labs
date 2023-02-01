"use strict";

function sumNum (x, y) {
    let sum = x+y;
    return sum;
};

let x = sumNum(2, 5);
console.log(x);

var calculateTax = function(subtotal, taxRate){
    tax= subtotal * taxRate;
    tax = tax.toFixed(2);
};
alert("Tax is " + tax);