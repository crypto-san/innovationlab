let users = [
  { name: 'Arun', age: 23, city: { place: 'Trichy' } },
  { name: 'Sneha', age: 21, city: { place: 'Erode' } }
];

console.log(users[0].name);
console.log(users[1].city.place);

function listNames(...friends) {
  console.log(friends);
}

listNames('Rani', 'Deepa');
let arr1 = [5];
let arr2 = [10];
let combined = [...arr1, ...arr2];
console.log(combined);
let details = { name: 'Karthik', age: 28 };
let detailsCopy = { ...details };
console.log(detailsCopy);
function display({ name, age }) {
  console.log(name);
  console.log(age);
}
display({ name: 'Lakshmi', age: 18 });