 function print(result) {
  console.log("Answer is " + result);
}

function addNums(x, y, done) {
  let z = x + y;
  done(z);
}
addNums(4, 5, print);

function welcome(person, after) {
  console.log("Hi " + person);
  after();
}

function goodbye() {
  console.log("See you!");
}
welcome("Ravi", goodbye);

var message = "Good Day";
console.log(message);

{
  let animal = "Cat";
  const bird = "Parrot";
  console.log(animal);
  console.log(bird);
}

function makeSound() {
  var noise = "Meow";
  console.log(noise);
}
makeSound();

{
  var food = "Pizza";
}
console.log(food);

{
  let toy = "Ball";
  const game = "Chess";
  console.log(toy);
  console.log(game);
}