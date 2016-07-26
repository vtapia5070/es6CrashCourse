/*
 * "At its core, a promise is nothing more than a stand-in or placeholder
 * for an action that has not yet taken place.
*/

/* A simulation of asyncronous javascript */

var button = document.querySelector('button');

console.log('Before');

button.onclick = function() {
  console.log('I was clicked');
};

console.log('After');
