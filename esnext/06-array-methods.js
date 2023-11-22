/* eslint-disable no-magic-numbers */
const numbers = [1, 2, 3, 4, 5];

const square = (num) => num ** 2;
const isEven = (num) => num % 2 === 0;

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
