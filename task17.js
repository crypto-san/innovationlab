let x = { name: 'Anil' };
function greet() {
  console.log('Hello ' + this.name);
}
greet.call(x);
let y = { name: 'Reema' };
function say(msg, sign) {
  console.log(msg + ' ' + this.name + sign);
}
say.apply(y, ['Hey', '!']);
let z = { name: 'Nisha' };
function invite() {
  console.log('Welcome ' + this.name);
}
let callFunc = invite.bind(z);
callFunc();