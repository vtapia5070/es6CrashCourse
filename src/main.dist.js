/*jshint esversion: 6 */

var ModuleCollection = function ModuleCollection(modules) {
  if ( modules === void 0 ) modules = [];

  this.modules = modules;
};

ModuleCollection.prototype.dump = function dump () {
  console.log(this.modules);
};

new ModuleCollection([
  'Classes',
  'Variables',
  'Arrows',
  'Template Strings'
]).dump();