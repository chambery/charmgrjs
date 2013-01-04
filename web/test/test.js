var test_file;

test_file = require("../web/test");

exports["test"] = function(test) {
  test_file.races();
  return test.done();
};
