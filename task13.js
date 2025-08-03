let employee = {
  fullName: "Karthik",
  years: 30
};

let { fullName, years } = employee;
console.log(fullName);
console.log(years);

let userInfo = {
  first: "Divya"
};

let { first, last = "Shree" } = userInfo;
console.log(first);
console.log(last);

let profile = {
  username: "Mohan",
  contact: {
    town: "Salem",
    pinCode: 636007
  }
};

let { username, contact: { town, pinCode } } = profile;
console.log(username);
console.log(town);
console.log(pinCode);

let laptop = {
  make: "HP",
  version: "Pavilion"
};

let laptopCopy = { ...laptop };
console.log(laptopCopy);

let data1 = { p: 10 };
let data2 = { q: 20 };

let combinedData = { ...data1, ...data2 };
console.log(combinedData);