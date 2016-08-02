/*jshint esversion: 6 */

var nums = [2, 4, 6, 8, 10];

// ES5

console.log(nums.indexOf(8)); // 3
console.log(nums.indexOf(3)); // -1

// ES6 - find first method
console.log(nums.find(function (item) {
  return item === 8;
})); // 8

class User {

  constructor(name, isAdmin) {
    this.name = name;
    this.isAdmin = isAdmin;
  }

}

let users = [
  new User('Jeffrey', false),
  new User('Jack', true),
  new User('Jane', false)
];

console.log(users.find(user => user.isAdmin)); // Jack
console.log(users.find(user => user.isAdmin).name); // Jack

// let items1 = ['jeff', 'jordan', 'way'].fill(); // ???
let items2 = ['jeff', 'jordan', 'way'].entries();
let items3 = ['jeff', 'jordan', 'way'].values();
let items4 = ['jeff', 'jordan', 'way'].keys();
let items5 = ['jeff', 'jordan', 'way'].entries();

for (let name of items2) console.log("entries - ", name);
for (let name of items3) console.log("values - ", name);
for (let name of items4) console.log("keys - ", name);
for (let name of items5) console.log("entries - ", name);

// ES2017 ?
console.log(nums.includes(8)); // true

