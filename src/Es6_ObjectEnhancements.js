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

// alert(getPerson().name);

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

// alert(getPerson2().greet());

// ES6 Object destructuring

let person = {
  name: 'karen',
  age: 32
};

let {name, age} = person;

// alert(name); // person.name
// alert(age); // person.age

let data = {
  name: 'Karen',
  age: 32,
  results: ['foo', 'bar'],
  count: 30
};

// let results = data.results;
// let count = data.count;

let {results, count} = data;

// ES5 example
function getData(data) {
  var results = data.results;
  var count = data.count;

  console.log(results, count);
}

getData(data);

// ES6 Example
function getData2({results, count}) {
  console.log(results, count);
}

getData2(data);
