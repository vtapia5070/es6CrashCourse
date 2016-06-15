/* es6 demo code to be compiled by babel*/
class Person {

  constructor(name) {
    this.name = name;
  }

  greet () {
    return this.name + ' says hello.';
  }

}

console.log(new Person('Victoria').greet());
