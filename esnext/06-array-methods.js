/* eslint-disable no-magic-numbers */
const numbers = [1, 2, 3, 4, 5];

const square = (num) => num ** 2;
const isEven = (num) => num % 2 === 0;
const sum = (num1, num2) => num1 + num2;

// squares: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]

{
  const squares = [];
  numbers.forEach((item) => {
    squares.push(square(item));
  });
  console.log(squares);
}

{
  const squares = numbers.map(square);
  console.log(squares);
}

// evens: [1, 2, 3, 4, 5] -> [2, 4]

{
  const evens = [];
  numbers.forEach((item) => {
    if (isEven(item)) {
      evens.push(item);
    }
  });
  console.log(evens);
}

{
  const evens = numbers.filter(isEven);
  console.log(evens);
}

// firstEven: [1, 2, 3, 4, 5] -> 2

{
  let firstEven = undefined;
  numbers.forEach((item) => {
    if (firstEven == null && isEven(item)) {
      firstEven = item;
    }
  });
  console.log(firstEven);
}

{
  const firstEven = numbers.find(isEven);
  console.log(firstEven);
}

// hasEven: [1, 2, 3, 4, 5] -> true

{
  let hasEven = false;
  numbers.forEach((item) => {
    if (isEven(item)) {
      hasEven = true;
    }
  });
  console.log(hasEven);
}

{
  const hasEven = numbers.some(isEven);
  console.log(hasEven);
}

// summation: [1, 2, 3, 4, 5] -> 15

{
  let summation = 0; // init
  numbers.forEach((item) => {
    summation += item; // acc
  });
  console.log(summation);
}

{
  const [firstItem, ...rest] = numbers;
  let summation = firstItem; // init
  rest.forEach((item) => {
    summation += item; // acc
  });
  console.log(summation);
}

{
  const summation = numbers.reduce((acc, item, index, arr) => {
    acc += item;
    return acc;
  }, 0);
  console.log(summation);
}

{
  const summation = numbers.reduce(sum);
  console.log(summation);
}

// sumOfSquareEvens: [1, 2, 3, 4, 5] -> [2, 4] -> [4, 16] -> 20

{
  let result = 0;
  numbers.forEach((item) => {
    if (isEven(item)) {
      result = sum(result, square(item));
    }
  });
  console.log(result);
}

{
  const result = numbers.filter(isEven).map(square).reduce(sum);
  console.log(result);
}
