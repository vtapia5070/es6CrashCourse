/*
 * Var
 */

function fire (bool) {

  if (bool) {

    var foo = 'bar';

    console.log(foo);

  } else {

    console.log(someVarThatIsntDeclared); // Uncaught ReferenceError

    console.log(foo); // would log undefined
    // why? foo gets hoisted to the top of the function scope
    // it is only assigned the value 'bar' inside the conditional.

  }

}

// fire(true);
// fire(false);

/*
 * let
 */

function water (bool) {

  if (bool) {

    let foo = 'bar';

    console.log(foo); // 'bar'

  } else {

    console.log(someVarThatIsntDeclared);
    // Uncaught ReferenceError: someVarThatIsntDeclared is not defined

    console.log(foo);
    // Uncaught ReferenceError: foo is not defined
    // why? - let is a block level variable declaration

  }

}

// water(true);
// water(false);

/*
 * Const
 */

// ex1: Makes a variable assignment immutable, preventing the value of the variable to be reassigned.
const example1 = ['this is', 'an example'];
example1 = ['I am not allowed to reassign', 'this variable'];
console.log(example1);
// Uncaught TypeError: Assignment to constant variable
// If an es6 linter is intalled, the build will not succeed.

// ex2: it doesn't not make the variable value immutable, allowing the value to be mutated in some ways.
const example2 = ['this is', 'an example'];
example2.push('I can mutate the value of this constant variable');
console.log(example2); // ['this is', 'an example', 'I can mutate the value of this constant variable']
