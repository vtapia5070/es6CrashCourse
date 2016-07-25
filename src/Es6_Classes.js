/*jshint esversion: 6 */

// ES5

// create new constructor
function User (username, email) {

  this.username = username;

  this.email = email;

}

// assign methd to prototype so all isntances have access
User.prototype.changeEmail = function (newEmail) {
  this.email = newEmail;
};

var user = new User('Jeffrey Way', 'support@laracasts.com');

user.changeEmail('foo@example.com');

console.dir(user);

/*********************************************************************************************/

// ES6

class User2 {

  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }

}

let user2 = new User2('JeffreyWay', 'support@laracasts.com');

user2.changeEmail('foo@example.com');

console.dir(user2);

/*********************************************************************************************/

// Static methods

class User3 {

  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  static register(username, email) {
    return new User3(user, email);
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }

}

let user3 = User3.register('JeffreyWay', 'support@laracasts.com');

console.dir(user3);

/*********************************************************************************************/

// Static methods with rest and spread operator

class User4 {

  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  static register(...args) {
    return new User4(...args);
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }

}

let user4 = User4.register('JeffreyWay', 'support@laracasts.com');

console.dir(user4);

/*********************************************************************************************/

// strategy pattern (design principal)

function log(strategy) {
  strategy.handle();
}

// log(new class{
//   handle() {
//     alert('Using the alert strategy to log.');
//   }
// });

class ConsoleLogger {
  handle() {
    console.log('Using the console strategy to log.');
  }
}

log(new ConsoleLogger);
