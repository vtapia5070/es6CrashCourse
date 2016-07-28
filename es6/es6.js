/* Summary Notes here:
 * See code in src/Main.js
 * See demo in html browser console.
 */

/*
 * Variables
 */

// var - will allow variable hoisting
// let - block level variable declaration
// const - immutable variable declaration (although the value is not immutable and can be modified!)


/*
 * Arrows
 */

// Parameters can be surrounded by opening and closing parenthesis
// If one parameter exists, the parens are optional.
// If two params exist, parens are required.
// caveat: the value of the this keyword refers to the collection/function scope it is used within
// return keyword is implicit when the arrow syntax is used

/*
 * Default Parameters
 */

// when a value is not passed into a function, it's parameter defaults to undefined.
// In Es6, you can set default parameters to catch edge cases that result from missing parameters.

/*
 * Rest and Spread
 */

// Rest:
// for a function you can use the ... syntax before a parameter as an anlternative
// for using the arguments keyword when there is an unknown number of parameters.
// When using this with other parameters, the rest parameter must be at the end.

// Spread:
// Spread in the opposite of Rest. You can use the ... syntax to reference an array.


/*
 * Template Strings or Template Literals
 */

// Template Strings are a way to construct html without the need of methods or string concatination.
// The syntax allows for a multi line string, flexability to use indentation for formatting
// purposes, and requires only an opening and closing back tick.
// Template literals also alow the use of variables using this syntax: ${<variable_name_here}

/*
 * Object Enhancements
 */

// Object and method Shorthand:
// See example in src/Es6_ObjectEnhancements.js for syntax

// Object deconstructuring:
// You can declare an object and use the shorthand syntax to assign variables to the object
// in alternative of assigning variables to each property in the object to avoid boilerplate code.

/*
 * Es6 Classes
 */

// syntactic sugar on the old way of creating classes.
// es6 classes can be passed in anonymousely to function invocations
// you can use get and set accessor methods
// statics - prefix the word statics before a method to access the method straight off of the class
// without having to first create an instance of a class.
// More on static: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static

/*
 * Es6 Modules
 */

// instead of including numerous script tage into index.html, many devlopers use common.js,
// require.js, webpack, browserify, UMD, AMD, rollup, and other wrappers that serve as
// file or module loaders/bundlers.
// Es6 offeres a way to do this with the keywords 'import' and 'export', although
// a file loader is still needed to support this action.

/*
 * Es6 Modules with Rollup
 */

// As proven in es6 Modules lesson, the import/export keywords for es6 modules are not suppoted.
// Using rollup.js is one solution.
// 1) install rollup globally or locally, run rollup <source of code> and rollup will grab the pieces
// of code imported within that source file.
// 2) to save access of utilize a main file you can do: `rollup </src/of/main/file> > <destination file`
// the destination file will be saved and can now be included as a main javascript file.
// 3) create rollup.config.js to configure any plugind like babel or buble. These plugins will compile the modules
// to ES5. Using `rollup -c > <name of output file>` will apply options in configuration file.

/*
 * Promises
 */

// An intro to promises. A promise is a placeholder for operations that take place within time.

/*
 * String Additions
 */

// ES6 provides the following string methods:
  // str.includes(searchString[, position]) which can return true or false if the string at the
  // optionally specified position is found.

  // str.beginsWith(searchString[,positon]) which will return a boolean if the string begins with
  // specified string at the specified position

  // str.endswith(searchString[, position]) which will return a boolean if the string ends with
  // specified string at the specified position

  // str.repeat(count) that will reapeat the string the specified number of times


