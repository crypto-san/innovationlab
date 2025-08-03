let person = {
  fullName: "Sanjana",
  age: 22,
  level: "Graduate",
  display: function() {
    console.log("Full Name: " + this.fullName);
    console.log("Age: " + this.age);
    console.log("Level: " + this.level);
  }
};

person.display();

person.age = 23;
person.level = "Postgraduate";

console.log("New Age: " + person.age);
console.log("New Level: " + person.level);

console.log("Person Name: " + person.fullName);
console.log("Person Level: " + person["level"]);

person.institute = "KG College";

person.showInstitute = function() {
  console.log("Institute: " + this.institute);
};

person.showInstitute();