/*
 * Rest Parameters
 */

function sum (...numbers) {
  return numbers.reduce(function (prev, current) {
    return prev + current;
  })
}

sum(1,2,3); // 6

sum(3,0); // 3

sum(10, 2, 4, 6, 1); // 23

/* Warning! */
// If adding another parameter,
// use the rest syntax as the second parameter.
function sum2 (foo, ...numbers) {
  return numbers.reduce(function (prev, current) {
    return prev + current;
  })
}

sum("hi", 1, 6, 2); // "hi 9"
sum("total is ", 3, 9, 1, 5, 0); // "total is 18"
