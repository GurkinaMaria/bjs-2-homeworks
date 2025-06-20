function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i]
    }
    sum += arr[i];
  }
  let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}




function summElementsWorker(...arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}


function differenceMaxMinWorker(...arr) {
   if (arr.length === 0) {
    return 0;
 }

  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {

  if (arr[i] < min) {
      min = arr[i];
    }
    
   
 if (arr[i] > max) {
      max = arr[i]
    }
  }

  return max - min;
}


function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}


function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (arr.length === 0) return 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  return sumEvenElement / countEvenElement;
}


function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
   const result = func(...arrOfArr[i]);

    if (result > max) {
      max = result;

    }
  }
  return max;

}
