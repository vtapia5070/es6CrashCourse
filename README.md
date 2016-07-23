# es6CrashCourse
Every thing es6 based off of [laracast](https://laracasts.com) tutorials.

## Contents
1. Babel Setup
  - A basic Babel CLI set up
2. Es6
  - A summary of es6 concepts
3. src
  - A directory of es6 conept demos
    1. Es6_Variables.js
      - var, let, and const
    2. Es6_Arrows.js
      - => syntax vs function keywords
    3. Es6_DefaultParameters.js
      - default parameter values
    4. Es6_RestAndSpread.js
      - ... syntax
    5. Es6_TemplateStrings.js
      - Template literals and the ${} syntax

### Development
Babel compiles ES6 files inside the src/ directory into ES5 inside the lib/ directory.
To build run:
``` npm run build ```
To run the files in the browser, add the following to index.html :
```<script src="lib/<file_name>.js">```
