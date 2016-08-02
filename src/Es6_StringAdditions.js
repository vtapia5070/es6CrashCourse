/*jshint esversion: 6 */

let title = 'Red Rising';

// ES5
if (title.indexOf('R') === 0) {
  console.log('R is the first letter');
}

if (title.indexOf('Blue') === -1) {
  console.log('This book does not begin with Blue');
}

// ES6 Includes
if (title.includes('R')) {
  console.log('R is the first letter');
}

if (title.includes('Blue')) {
  console.log('This book does not begin with Blue');
}

// ES6 Starts with
if (title.startsWith('Red')) {
  console.log('This book starts with Red');
}

if (title.startsWith('i', 5)) {
  console.log('It does');
}

// ES6 Ends with
if (title.endsWith('Rising')) {
  console.log('This book ends with Rising');
}

// ES6 Repeat
let str = 'tro';
console.log(
  str + 'lol'.repeat(100)
);
