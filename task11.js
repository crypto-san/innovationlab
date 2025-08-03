let marks = [15, 7, 25, 3];
let highMarks = marks.filter(function(score) {
  return score > 10;
});
console.log('Filter:', highMarks);

let prices = [100, 50, 25];
let totalPrice = prices.reduce(function(x, y) {
  return x + y;
});
console.log('Reduce (Sum):', totalPrice);

let animals = ['lion', 'tiger', 'elephant'];
let wildAnimals = animals.slice(1, 3);
console.log('Slice:', wildAnimals);
console.log('Original Array:', animals);

let cities = ['Delhi', 'Mumbai', 'Chennai'];
cities.splice(2, 1, 'Kolkata');
console.log('Splice:', cities);

let arrOne = [10, 20];
let arrTwo = [30, 40];
let copyArr = [...arrOne];
let combinedArr = [...arrOne, ...arrTwo];
console.log('Copied Array:', copyArr);
console.log('Joined Array:', combinedArr);