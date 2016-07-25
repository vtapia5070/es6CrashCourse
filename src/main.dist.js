/*jshint esversion: 6 */

class ModuleCollection {

  constructor(modules = []) {
    this.modules = modules;
  }

  dump() {
    console.log(this.modules);
  }

}

new ModuleCollection([
  'Classes',
  'Variables',
  'Arrows',
  'Template Strings'
]).dump();