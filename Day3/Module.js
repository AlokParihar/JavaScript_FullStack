/* Module in JavaScript is a way to encapsulate code and create reusable components.
It allows you to organize your code into separate files and import/export functionality as needed.
Modules help in maintaining a clean codebase, avoiding global namespace pollution, and promoting code reusability.
In JavaScript, there are two main types of modules: CommonJS modules (used in Node.js)
and ES6 modules (used in modern JavaScript). 
CommonJS modules use the require() function to import modules and module.exports to export functionality.
ES6 modules use the import and export keywords for importing and exporting functionality. 

Module has three Categories:
1. Named Exports: In this type of module, you can export multiple values from a module using the export keyword. Each exported value is given a name, and you can import them using their respective names in other modules. For example:
// math.js
export const add = (a, b) => a + b;
2. Default Exports: In this type of module, you can export a single value as the default export using the export default keyword. When importing a default export, you can give it any name you want. For example:
// math.js
const multiply = (a, b) => a * b;
3. Importing Modules: To use the functionality exported from a module, you can import it into another module using the import keyword. You can import named exports using their respective names or import the default export with any name you choose. For example:
// main.js
import { add } from './math.js';

Type of Modules:
1. Core Modules: These are built-in modules provided by the JavaScript runtime environment (e.g., Node.js).
They provide essential functionality like file system operations, networking, and more. 
Examples include fs, http, path, etc.

2. Third-Party Modules: These are modules created by the community and can be installed using package managers 
like npm (Node Package Manager). They provide additional functionality and can be easily integrated into your
projects. Examples include Express, Lodash, Axios, etc.

3. User-Defined Modules: These are modules created by developers to encapsulate their own code and functionality.
You can create your own modules by defining functions, classes, or variables in separate files and exporting them 
for use in other parts of your application.

4. ES6 Modules: These are modules introduced in ECMAScript 2015 (ES6) and are now widely supported in modern
JavaScript environments. They use the import and export syntax and provide a standardized way to organize and
share code across different files. ES6 modules can be used in both browser and server-side JavaScript environments.

5. CommonJS Modules: These are modules used in Node.js and follow the CommonJS module system. 
They use the require() function to import modules and module.exports to export functionality. 
CommonJS modules are synchronous and are commonly used in server-side JavaScript applications.
*/