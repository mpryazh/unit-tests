const _ = require('./object');

describe('merge', () => {
  test('should merge objects with the same properties', () => {
    expect(_.merge({ 1: 'a' }, { 2: 'b' }, { 1: 'abc' })).toEqual({
      1: 'abc',
      2: 'b',
    });
  });

  test('should merge nested objects', () => {
    expect(
      _.merge({ a: [{ b: 2 }, { d: 4 }] }, { a: [{ c: 3 }, { e: 5 }] })
    ).toEqual({
      a: [
        { b: 2, c: 3 },
        { d: 4, e: 5 },
      ],
    });
  });

  test('should merge objects with undefined', () => {
    expect(_.merge({ a: [{ b: 2 }, { d: 4 }] }, { a: undefined })).toEqual({
      a: [{ b: 2 }, { d: 4 }],
    });
  });
});

describe('omit', () => {
  test('should omit', () => {
    expect(_.omit({ 1: 'January', 2: 'February', 3: 'March' }, [1, 2])).toEqual(
      {
        3: 'March',
      }
    );
  });

  test('should return the same object as was passed when called without the second argument', () => {
    expect(_.omit({ 1: 'January', 2: 'February', 3: 'March' })).toEqual({
      1: 'January',
      2: 'February',
      3: 'March',
    });
  });

  test('should omit by key when called with a string', () => {
    expect(_.omit({ 1: 'January', 2: 'February', 3: 'March' }, '3')).toEqual({
      1: 'January',
      2: 'February',
    });
  });
});

describe('omitBy', () => {
  test('omit a property based on a predicate by key', () => {
    expect(
      _.omitBy(
        { 1: 'January', 2: 'February', 3: 'March' },
        (val, key) => key == 3
      )
    ).toEqual({
      1: 'January',
      2: 'February',
    });
  });

  test('omit a property based on a predicate by value', () => {
    expect(_.omitBy({ a: 1, b: 2, c: 3 }, (val) => val > 2)).toEqual({
      a: 1,
      b: 2,
    });
  });
});

describe('pick', () => {
  test('should pick properties based on keys', () => {
    expect(_.pick({ 1: 'January', 2: 'February', 3: 'March' }, [1, 2])).toEqual(
      {
        1: 'January',
        2: 'February',
      }
    );
  });

  test('should return the same object as was passed when called without the second argument', () => {
    expect(_.pick({ 1: 'January', 2: 'February', 3: 'March' })).toEqual({});
  });

  test('should pick by key when called with a string', () => {
    expect(_.pick({ 1: 'January', 2: 'February', 3: 'March' }, '3')).toEqual({
      3: 'March',
    });
  });
});

describe('pickBy', () => {
  test('should pick properties based on a predicate by key', () => {
    expect(
      _.pickBy(
        { 1: 'January', 2: 'February', 3: 'March' },
        (val, key) => key == 3
      )
    ).toEqual({
      3: 'March',
    });
  });

  test('should pick properties based pn a predicate by value', () => {
    expect(_.pickBy({ a: 1, b: 2, c: 3 }, (val) => val > 2)).toEqual({
      c: 3,
    });
  });
});

describe('toPairs', () => {
  test('should return ar array of pairs when passed an object', () => {
    expect(
      _.toPairs({
        a: 1,
        b: 2,
      })
    ).toEqual([
      ['a', 1],
      ['b', 2],
    ]);
  });
});
