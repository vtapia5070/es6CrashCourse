/*jshint esversion: 6 */

import "babel-polyfill"; // TODO

/*
 * Es6 Generators
 */

function *numbers () {

  console.log('Begin');

  yield 1;

  yield 2;

  yield 3;

}

console.log(numbers());

let iterator = numbers();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

function *range (start, end) {
  while (start < end) {

    yield start;

    start ++;

  }

}

let rangeIterator = range(1, 5);

console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());

for (let i of iterator) console.log(i);

console.log(
  [...range(1, 5)]
);
