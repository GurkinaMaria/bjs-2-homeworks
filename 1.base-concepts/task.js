"use strict"
function solveEquation(a,b,c) {
  let arr = [];
  let d = b**2-4*a*c;
  if (d == 0) {
    arr.push(-b/(2*a));
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d) )/(2*a) , (-b - Math.sqrt(d) )/(2*a));
    
  }
  return arr;
} 
solveEquation(1, 5, 4);



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
 let bid = (percent / 100) / 12;
 let credit = amount-contribution;
 let monthlyPayment = credit * (bid + (bid / (((1 + bid) ** countMonths) - 1)));
 let result = monthlyPayment * countMonths;
 result = parseFloat(result.toFixed(2));
 
 return result;
}

calculateTotalMortgage(10, 0, 50000, 12);