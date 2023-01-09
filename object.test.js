const _ = require("./object");

test("Merge objects with the same properties", () => {
  expect(_.merge({ 1: "a" }, { 2: "b" }, { 1: "abc" })).toEqual({
    1: "abc",
    2: "b",
  });
});

test("Merge nesting objects", () => {
  expect(
    _.merge({ a: [{ b: 2 }, { d: 4 }] }, { a: [{ c: 3 }, { e: 5 }] })
  ).toEqual({
    a: [
      { b: 2, c: 3 },
      { d: 4, e: 5 },
    ],
  });
});

test("Merge objects with undefined", () => {
  expect(_.merge({ a: [{ b: 2 }, { d: 4 }] }, { a: undefined })).toEqual({
    a: [{ b: 2 }, { d: 4 }],
  });
});

test("Omit", () => {
  expect(_.omit({ 1: "January", 2: "February", 3: "March" }, [1, 2])).toEqual({
    3: "March",
  });
});

test("Omit without second argument", () => {
  expect(_.omit({ 1: "January", 2: "February", 3: "March" })).toEqual({
    1: "January",
    2: "February",
    3: "March",
  });
});

test("Omit with a string", () => {
  expect(_.omit({ 1: "January", 2: "February", 3: "March" }, "3")).toEqual({
    1: "January",
    2: "February",
  });
});

test("OmitBy predicate", () => {
  expect(
    _.omitBy(
      { 1: "January", 2: "February", 3: "March" },
      (val, key) => key == 3
    )
  ).toEqual({
    1: "January",
    2: "February",
  });
});

test("OmitBy predicate", () => {
  expect(_.omitBy({ a: 1, b: 2, c: 3 }, (val) => val > 2)).toEqual({
    a: 1,
    b: 2,
  });
});

test("Pick", () => {
  expect(_.pick({ 1: "January", 2: "February", 3: "March" }, [1, 2])).toEqual({
    1: "January",
    2: "February",
  });
});

test("Pick without second argument", () => {
  expect(_.pick({ 1: "January", 2: "February", 3: "March" })).toEqual({});
});

test("Pick with a string", () => {
  expect(_.pick({ 1: "January", 2: "February", 3: "March" }, "3")).toEqual({
    3: "March",
  });
});

test("OmitBy predicate", () => {
  expect(
    _.pickBy(
      { 1: "January", 2: "February", 3: "March" },
      (val, key) => key == 3
    )
  ).toEqual({
    3: "March",
  });
});

test("OmitBy predicate", () => {
  expect(_.pickBy({ a: 1, b: 2, c: 3 }, (val) => val > 2)).toEqual({
    c: 3,
  });
});

test("ToPairs", () => {
  expect(
    _.toPairs({
      a: 1,
      b: 2,
    })
  ).toEqual([
    ["a", 1],
    ["b", 2],
  ]);
});
