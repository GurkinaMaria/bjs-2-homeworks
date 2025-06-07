function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;


  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
    else if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}
getArrayParams([-99, 99, 10]);



function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((sum, current) => sum + current, 0);
}
summElementsWorker([10, 10, 11, 20, 10]);


function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  
  if (arr.length === 0) return 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
    else if (arr[i] < min) {
      min = arr[i];
    }
  }

  return max - min;
}
differenceMaxMinWorker([10, 10, 11, 20, 10])


function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if (arr.length === 0) return 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}
differenceEvenOddWorker([1, 2, 3, 4, 5, 6, 7, 8, 9]);


function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (arr.length === 0) return 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      countEvenElement++;
    }
  }

  return sumEvenElement / countEvenElement;
}
averageEvenElementsWorker([1, 2, 3, 4, 5, 6, 7, 8, 9]);

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    result = func(...arrOfArr[i]);

    if (result > maxWorkerResult) {
      maxWorkerResult = result;

    }
  }
  return maxWorkerResult

}
makeWork([10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]);
