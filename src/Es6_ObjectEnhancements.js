/*jshint esversion: 6 */

// ES5

function getPerson () {
  let name = 'John';
  let age = 25;

  return {
    name: name,
    age: age,
    greet: function(){
      return 'Hello ' + this.name;
    }
  };

}

alert(getPerson().name);

// ES6 object and method shorthand

function getPerson2 () {
  let name = 'John';
  let age = 25;

  return {
    name,
    age,
    greet(){
      return `Hello ${this.name}`;
    }
  };
}

alert(getPerson2().greet());

// ES6 Object destructuring

