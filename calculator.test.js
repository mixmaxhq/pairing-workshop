const calculate = require("./calculator");

test("test addition", function() {
  expect(calculate("+", 1, 1)).toEqual(2);
  expect(calculate("+", "1", "1")).toEqual("11");
});

test("test subtraction", function() {
  expect(calculate("-", 3, 2)).toEqual(1);
  expect(calculate("-", 2, -3)).toBe(5);
});

test("test power", function() {
  expect(calculate("^", 2, 3)).toEqual(8);
  expect(calculate("^", -2, -3)).toBe(-0.125);
});

test("test multiply", () => {
  expect(calculate("*", 2, 4)).toBe(8);
  expect(calculate("*", -4, 5)).toBe(-20);
});

test("test divide", () => {
  expect(calculate("/", Infinity, Infinity)).toBe(NaN);
  expect(calculate("/", 0, 0)).toBe(NaN);
  expect(calculate("/", 1, 0)).toBe(Infinity);
  expect(calculate("/", -1, 0)).toBe(-Infinity);
});

test("test sqrt", () => {
  expect(calculate("√", 9)).toBe(3);
  expect(calculate("√", -1)).toEqual(NaN);
});
