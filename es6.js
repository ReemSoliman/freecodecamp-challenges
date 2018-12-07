//An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignment.
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  
  let x= s.pop();
  s.unshift(x);
  console.log(s);
  // change code above this line
}
editInPlace();

//Use arrow function syntax to compute the square of only the positive integers (decimal numbers are not integers) in the array realNumberArray and store the new array in the variable squaredIntegers.
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  
  const squaredIntegers= arr.filter( (num)=> Number.isInteger(num) && num >0 ).map((num)=> Math.pow(num,2));
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);