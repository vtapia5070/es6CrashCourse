/*jshint esversion: 6 */

export class ModuleCollection {

  constructor(modules = []) {
    this.modules = modules;
  }

  dump() {
    console.log(this.modules);
  }

}
