const calculate = require("./calculator");

test("test addition", function() {
  expect(calculate(1, 1, "+")).toEqual(2);
});
