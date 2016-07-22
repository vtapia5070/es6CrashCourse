/*
 * Rest Parameters
 */

function sum (...numbers) {
  return numbers.reduce(function (prev, current) {
    return prev + current;
  })
}

// console.log(sum(1,2,3)); // 6

// console.log(sum(3,0)); // 3

// console.log(sum(10, 2, 4, 6, 1)); // 23


/* Warning! - Rest syntax with other parameters */
// When using other parameters, the rest parameter must be at the end.
function sum2 (str, ...nums) {
  var total = nums.reduce(function (prev, current) {
    return prev + current;
  });
  return str + total;
}
var myStr = 'The total is: ';
// console.log(sum(myStr, 1, 2, 3)); // The total is: 6

/*
 * Spread Parameters
 */

function sum3 (x, y) {
  return x + y;
}

let nums = [1, 2];

// console.log(sum3(...nums));
