function sumArray(numbers) {
  let summ = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    summ += numbers[i];
  }
  return summ;
}

console.log(summArray([1, 2, 3, 4, 5])); 
console.log(summArray([10, 20, 30]));   

module.exports = sumArray;


//  _._     _,-'""`-._
// (,-.`._,'(       |\`-/|
//     `-.-' \ )-`( , o o)
//           `-    \`_`"'-