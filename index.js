/*
add values on button press, 

adds operator on operation press,

if operator is pressed when there is a value ready to be calculated, Calculate the result and then add operator

provides results on equals press

build array, push numpad button to array, push operator , push numpad (if operator is pressed while one is already present, evaluate the numbers.)
*/

const operators = ["*", "+", "-", "/"];
let displayvalue = ["20", "4", "+", "1", "3"];
console.log(displayvalue)
// split the array at the operator into 3 items, first string , operator, second string

let str1 = displayvalue.join("");
const test1 = operators.some((item) => str1.includes(item));

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
if (test1) {
  displayvalue = evaluator(displayvalue);
}

function evaluator(arr) {
    let currentString = arr.join('')

  for (let i = 0; i < currentString.length; i++) {
    if (currentString[i] == "-" || currentString[i] == "+" || currentString[i] == "*" || currentString[i] == "/") {
        console.log(i)
      let str1 = arr.join("").substring(0, i);
      console.log(str1)
      let op = arr.join("").substring(i, i + 1);
      console.log(op)
      let str2 = arr.join("").substring(i + 1);
      console.log(str2)
      if (op === "+") {
       return (+str1 + +str2).toString();
        
      } else if (op === "-") {
        console.log(+str1 - +str2);
      } else if (op === "*") {
        console.log(+str1 * +str2);
      }
    }
  }
}

console.log('new display = ' , displayvalue)