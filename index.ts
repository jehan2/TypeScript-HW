import { question } from "readline-sync";

type Operator = '+' | '-' | '*' | '/';

function main(): void
{
    const string1: string = question('Enter first number: \n');
    const op: string = question('Enter operator: \n');
    const string2: string = question('Enter second number: \n');

    const vInput: boolean = isNumber(string1) && isOperator(op) && isNumber(string2);

    //console.log(vInput);
    // const num1 =isNumber(string1)
    // console.log(num1);
    // const op1 =isOperator(op)
    // console.log(op1);
    
    if (vInput) {
        // console.log('is valid')
        const num1: number = parseInt(string1);
        const num2: number = parseInt(string2);
        const result = calculate(num1, op as Operator, num2);
        console.log(result);
      }
      else {
        console.log('\n invalid input \n');
        main();
      }
}

function calculate(num1: number, op: Operator, num2: number) {
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

function isOperator(operator: string): boolean {
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
function isNumber(str: string): boolean {
    const maybeNum = parseInt(str);
    const isNum: boolean = !isNaN(maybeNum); // const isNum: boolean = Boolean(isNaN(maybeNum)); => output false
    return isNum
  }
main();