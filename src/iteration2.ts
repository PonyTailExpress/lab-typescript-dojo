//
// Iteration 2 | Functions
//

//2.1 - Implement the function calcMultiplication() //
function calcMultiplication(a: number, b: number): number {
  return a * b;
}

// 2.2 - Implement the function isEven() //

function isEven(n: number): boolean {
  return n % 2 === 0;
}

// 2.3 - Implement the function calcArrayAverage() //

function calcArrayAverage(numbersArr: number[]): number | string {
  if (numbersArr.length === 0) {
    return "Please provide an array with at least one element.";
  }

  const sum = numbersArr.reduce((acc, curr) => acc + curr, 0);

  const average = sum / numbersArr.length;

  return average;
}
