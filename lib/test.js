var window;

if (typeof exports === "object") window = require("./window");

this.test_exports = function() {
  console.log(window.foo);
  return window.foo;
};
