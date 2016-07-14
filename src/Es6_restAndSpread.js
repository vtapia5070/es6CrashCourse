/*
 * Rest Parameters
 */

function sum (...numbers) {
  return numbers.reduce(function (prev, current) {
    return prev + current;
  })
}

console.log('Ex 1.1', sum(1,2,3)); // 6

// console.log('Ex 1.2', sum(3,0)); // 3

// console.log('Ex 1.3', sum(10, 2, 4, 6, 1)); // 23

/* Warning! */
// No other parameters will work with the rest syntax

/*
 * Spread Parameters
 */

function sum3 (x, y) {
  return x + y;
}

let nums = [1, 2];

console.log(sum3(...nums));
