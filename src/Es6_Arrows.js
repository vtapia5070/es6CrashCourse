/*jshint esversion: 6 */

class TaskCollection {

  constructor (tasks = []) {
    this.tasks = tasks;
  }

  log() {
    this.tasks.forEach(task => console.log(task));
    /*
      same as:
      this.tasks.forEach(function (task) {
        console.log(task);
      });
    */
  }

  logWithTwoParams() {
    this.tasks.forEach((task, index) => console.log(task, index));
    /*
      same as:
      this.tasks.forEach(function (task, index) {
        console.log(task, index);
      });
    */
  }

  logWithOneParam() {
    this.tasks.forEach((task) => console.log(task));
    /*
      same as:
      this.tasks.forEach(function (task) {
        console.log(task);
      });
    */
  }

  logWithNoParams() {
    this.tasks.forEach(() => console.log(this));
    // this references the constructor class

    /*
     * same as below:
     * (uncomment to notice the different value the 'this' keyword uses)
     */
    // this.tasks.forEach(function () {
    //     console.log(this); // this is the window object - also undefined when strict mode is used.
    //  });
  }

}

/*
* caveat:
*/
// Using the arrow syntax will change the value of the 'this' keyword

class Task {}

new TaskCollection ([new Task(), new Task(), new Task()])
// .logWithTwoParams();
// .logWithOneParam();
.logWithNoParams();


