// eslint-disable-next-line no-magic-numbers
const numbers = [1, 2, 3, 4, 5];

const FIRST_ITEM = 0;
const SECOND_ITEM = 1;
const LAST_ITEM = 1;
const REST_INDEX = 2;

{
  const first = numbers[FIRST_ITEM];
  const second = numbers[SECOND_ITEM];
  const last = numbers[numbers.length - LAST_ITEM];
  const rest = numbers.slice(REST_INDEX);
  console.log(first, second, last, rest);
}

{
  // destructuring
  // spread operator
  const [first, second, ...rest] = numbers;
  const last = numbers[numbers.length - LAST_ITEM];
  console.log(first, second, last, rest);

  const point = [2, 0, 3];
  const [x, , z] = point;
  console.log(x, z);

  console.log([...rest]);
}

numbers[3] = 7;
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.shift();
console.log(numbers);
numbers.push(1);
console.log(numbers);
numbers.unshift(2);
console.log(numbers);
numbers.splice(2, 2, 8, 9, 10);
console.log(numbers);

for (const item of numbers) {
  const index = numbers.indexOf(item);
  console.log(item, index);
}

delete numbers[3];
console.log(numbers);

numbers.forEach((item, index) => {
  console.log(item, index);
});
