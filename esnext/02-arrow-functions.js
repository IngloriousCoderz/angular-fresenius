{
  console.log(sum(2, 3));

  // function declaration
  // HOISTING
  function sum(a, b) {
    return a + b;
  }
}

{
  // function expression
  const sum = function (a, b) {
    return a + b;
  };

  console.log(sum(2, 3));
}

{
  // arrow function
  const sum = (a, b) => a + b;

  console.log(sum(2, 3));
}
