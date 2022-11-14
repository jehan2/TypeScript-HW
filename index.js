"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var string1 = (0, readline_sync_1.question)('Enter first number: \n');
    var op = (0, readline_sync_1.question)('Enter operator: \n');
    var string2 = (0, readline_sync_1.question)('Enter second number: \n');
    var vInput = isNumber(string1) && isOperator(op) && isNumber(string2);
    //console.log(vInput);
    // const num1 =isNumber(string1)
    // console.log(num1);
    // const op1 =isOperator(op)
    // console.log(op1);
    if (vInput) {
        // console.log('is valid')
        var num1 = parseInt(string1);
        var num2 = parseInt(string2);
        var result = calculate(num1, op, num2);
        console.log(result);
    }
    else {
        console.log('\n invalid input \n');
        main();
    }
}
function calculate(num1, op, num2) {
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
    }
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
// نحول النص الى رقم
// "26" => 26
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum); // const isNum: boolean = Boolean(isNaN(maybeNum)); => output false
    return isNum;
}
main();
