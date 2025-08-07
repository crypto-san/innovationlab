let animals = ['Dog', 'Cat'];
console.log(animals[0]);
console.log(animals[1]);
let user = { firstName: 'Kiran', age: 22 };
console.log(user.firstName);
console.log(user['age']);
let location = { area: { name: 'Delhi' } };
console.log(location.area.name);
let bike = { brand: 'Hero', model: 'Splendor' };
for (let key in bike) {
  console.log(key);
  console.log(bike[key]);
}