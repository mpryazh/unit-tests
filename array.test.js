const _ = require("./array");

test("Slice array", () => {
  expect(_.slice([1, 2, 3, 4], 0, 2)).toEqual([1, 2, 3]);
});

test("Chunks [1, 2, 3, 4] into groups of 2", () => {
  expect(_.chunk([1, 2, 3, 4], 2)).toEqual([
    [1, 2],
    [3, 4],
  ]);
});

test("Chunks [1, 2, 3, 4] into groups of 3", () => {
  expect(_.chunk([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
});

test("Chunks [1, 2, 3, 4] into groups of 7", () => {
  expect(_.chunk([1, 2, 3, 4], 7)).toEqual([[1, 2, 3, 4]]);
});

test("Chunks [1, 2, 3, 4], number of chunks unset", () => {
  expect(_.chunk([1, 2, 3, 4])).toEqual([[1], [2], [3], [4]]);
});

test("Chunks [] returns []", () => {
  expect(_.chunk([], 3)).toEqual([]);
});

test("Compact: remove falsy values", () => {
  expect(_.compact([0, "", {}, 3, 4, false])).toEqual([{}, 3, 4]);
});

test("Compact: remove falsy values with empty array", () => {
  expect(_.compact([])).toEqual([]);
});

test("Filter array", () => {
  expect(_.filter([1, 2, 3, 4, 5], (x) => x > 3)).toEqual([4, 5]);
});

test("Filter array with predicate unset throws TypeError", () => {
  expect(() => _.filter([1, 2, 3, 4, 5])).toThrow(TypeError);
});

test("Drop n first values", () => {
  expect(_.drop([1, 2, 3, 4, 5], 3)).toEqual([4, 5]);
});

test("Drop n first values, n unset", () => {
  expect(_.drop([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5]);
});

test("Drop while truthy: array of numbers", () => {
  expect(_.dropWhile([1, 2, 3, 4, 5], (x) => x !== 4)).toEqual([4, 5]);
});

test("Drop while truthy: array of objects", () => {
  var users = [
    { user: "barney", active: false },
    { user: "fred", active: false },
    { user: "pebbles", active: true },
  ];

  expect(
    _.dropWhile(users, function (o) {
      return !o.active;
    })
  ).toEqual([{ user: "pebbles", active: true }]);
});

test("Drop while truthy with predicate unset throws TypeError", () => {
  expect(() => _.dropWhile([1, 2, 3, 4, 5])).toThrow(TypeError);
});

test("Take n first values", () => {
  expect(_.take([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
});

test("Take n first values, n > array.length", () => {
  expect(_.take([1, 2, 3, 4, 5], 7)).toEqual([1, 2, 3, 4, 5]);
});

test("Take n first values, n unset", () => {
  expect(_.take([1, 2, 3, 4, 5])).toEqual([1]);
});

test("Take n first values, negative n", () => {
  expect(_.take([1, 2, 3, 4, 5], -3)).toEqual([]);
});

test("Find first element predicate returns truthy for", () => {
  expect(_.find([1, 2, 3, 4, 5], (x) => x > 2)).toBe(3);
});

test("Find with predicate unset throws TypeError", () => {
  expect(() => _.find([1, 2, 3, 4, 5]).toThrow(TypeError));
});

test("Includes: array includes a number", () => {
  expect(_.includes([1, 2, 3, 4, 5], 3)).toBe(true);
});

test("Includes: array includes a number", () => {
  expect(_.includes([1, 2, 3, 4, 5], 10)).toBe(false);
});

test("Includes: array includes a string", () => {
  expect(_.includes([1, 2, 3, "cat", 5], "cat", 2)).toBe(true);
});

test("Includes: string includes a substring", () => {
  expect(_.includes("Canada", "da")).toBe(true);
});

test("Includes: string includes a substring", () => {
  expect(_.includes("Canada", "can")).toBe(false);
});

test("Includes with 1 argument throws TypeError", () => {
  expect(() => _.includes("Canada")).toThrow(TypeError);
});

test("Map array", () => {
  expect(_.map([1, 2, 3], (x) => x ** 3)).toEqual([1, 8, 27]);
});

test("Map array with no predicate throws TypeError", () => {
  expect(() => _.map([1, 2, 3]).toThrow(TypeError));
});

test("Zip arrays", () => {
  expect(_.zip(["a", "b"], [1, 2], [true, false])).toEqual([
    ["a", 1, true],
    ["b", 2, false],
  ]);
});

test("Zip with just one argument", () => {
  expect(_.zip(["a", "b", "c"])).toEqual([["a"], ["b"], ["c"]]);
});

test("Zip with no arguments", () => {
  expect(_.zip()).toEqual([]);
});

test("Zip arrays with different lengths", () => {
  expect(_.zip(["a", "b", "c"], [1, 2], [true, false])).toEqual([
    ["a", 1, true],
    ["b", 2, false],
    ["c", undefined, undefined],
  ]);
});

test("Zip arrays with different lengths", () => {
    expect(_.zip(["a"], [1, 2, 3, 4], [true, false])).toEqual([
      ["a", 1, true],
      [undefined, 2, false],
      [undefined, 3, undefined],
      [undefined, 4, undefined],
    ]);
  });
