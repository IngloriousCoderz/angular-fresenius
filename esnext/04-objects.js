const person = {
  name: "Matteo Antony",
  "date-of-birth": "1982-10-17",
  legs: 2,
};

console.log(person.name);
console.log(person["name"]);
const property = "name";
console.log(person[property]);
console.log(person["date-of-birth"]);

person.arms = 2;
console.log(person);
person.arms = 6;
console.log(person);
delete person.arms;
console.log(person);

{
  const name = person.name;
  const dateOfBirth = person["date-of-birth"];
  console.log(name, dateOfBirth);
}

{
  const { name, "date-of-birth": dateOfBirth, ...rest } = person;
  console.log(name, dateOfBirth, rest);

  console.log({ ...rest });
}

function sum(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
console.log(2, 3, 5, sum(2, 3, 5));
