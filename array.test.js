const _ = require('./array');

describe('slice', () => {
  test('should slice array', () => {
    expect(_.slice([1, 2, 3, 4], 0, 2)).toEqual([1, 2, 3]);
  });
});

describe('chunk', () => {
  test('should divide [1, 2, 3, 4] into groups of 2', () => {
    expect(_.chunk([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  test('should divide [1, 2, 3, 4] into groups of 3', () => {
    expect(_.chunk([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
  });

  test('should divide [1, 2, 3, 4] into groups of 7', () => {
    expect(_.chunk([1, 2, 3, 4], 7)).toEqual([[1, 2, 3, 4]]);
  });

  test('should divide [1, 2, 3, 4], number of chunks unset', () => {
    expect(_.chunk([1, 2, 3, 4])).toEqual([[1], [2], [3], [4]]);
  });

  test('should not divide an empty array', () => {
    expect(_.chunk([], 3)).toEqual([]);
  });
});

describe('compact', () => {
  test('should remove falsy values', () => {
    expect(_.compact([0, '', {}, 3, 4, false])).toEqual([{}, 3, 4]);
  });

  test('should return an empty array', () => {
    expect(_.compact([])).toEqual([]);
  });
});

describe('filter', () => {
  test('should filter an array', () => {
    expect(_.filter([1, 2, 3, 4, 5], (x) => x > 3)).toEqual([4, 5]);
  });

  test('should throw a TypeError when predicate is unset', () => {
    expect(() => _.filter([1, 2, 3, 4, 5])).toThrow(TypeError);
  });
});

describe('drop', () => {
  test('should drop n first values', () => {
    expect(_.drop([1, 2, 3, 4, 5], 3)).toEqual([4, 5]);
  });

  test('should drop 1 first values with n unset', () => {
    expect(_.drop([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5]);
  });
});

describe('drop while thuthy', () => {
  test('should drop numbers based on a condition', () => {
    expect(_.dropWhile([1, 2, 3, 4, 5], (x) => x !== 4)).toEqual([4, 5]);
  });

  test('should drop object properties based on a condition', () => {
    var users = [
      { user: 'barney', active: false },
      { user: 'fred', active: false },
      { user: 'pebbles', active: true },
    ];

    expect(
      _.dropWhile(users, function (o) {
        return !o.active;
      })
    ).toEqual([{ user: 'pebbles', active: true }]);
  });

  test('should throw a TypeError when predicate is unset', () => {
    expect(() => _.dropWhile([1, 2, 3, 4, 5])).toThrow(TypeError);
  });
});

describe('take', () => {
  test('should return n first values', () => {
    expect(_.take([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
  });

  test('should return n first values, n > array.length', () => {
    expect(_.take([1, 2, 3, 4, 5], 7)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should return 1 first value when n is unset', () => {
    expect(_.take([1, 2, 3, 4, 5])).toEqual([1]);
  });

  test('should return an empty array when passed a negative n', () => {
    expect(_.take([1, 2, 3, 4, 5], -3)).toEqual([]);
  });
});

describe('find', () => {
  test('should return the first element predicate returns truthy for', () => {
    expect(_.find([1, 2, 3, 4, 5], (x) => x > 2)).toBe(3);
  });

  test('shiuld throw a TypeError when predicate is unset', () => {
    expect(() => _.find([1, 2, 3, 4, 5]).toThrow(TypeError));
  });
});

describe('includes', () => {
  test('should return true for an array of numbers', () => {
    expect(_.includes([1, 2, 3, 4, 5], 3)).toBe(true);
  });

  test('should return false for an array of numbers', () => {
    expect(_.includes([1, 2, 3, 4, 5], 10)).toBe(false);
  });

  test('should return true for an array of strings', () => {
    expect(_.includes(['1', '2', '3', 'cat', '5'], 'cat', 2)).toBe(true);
  });

  test('should return true for a substring inside a string', () => {
    expect(_.includes('Canada', 'da')).toBe(true);
  });

  test('should return false for a substring inside a string', () => {
    expect(_.includes('Canada', 'can')).toBe(false);
  });

  test('should throw a TypeError when invoked with only 1 argument', () => {
    expect(() => _.includes('Canada')).toThrow(TypeError);
  });
});

describe('map', () => {
  test('should map an array', () => {
    expect(_.map([1, 2, 3], (x) => x ** 3)).toEqual([1, 8, 27]);
  });

  test('Should throw a TypeError when predicate is unset', () => {
    expect(() => _.map([1, 2, 3]).toThrow(TypeError));
  });
});

describe('zip', () => {
  test('should zip arrays', () => {
    expect(_.zip(['a', 'b'], [1, 2], [true, false])).toEqual([
      ['a', 1, true],
      ['b', 2, false],
    ]);
  });

  test('should return an array of array when called with just one argument', () => {
    expect(_.zip(['a', 'b', 'c'])).toEqual([['a'], ['b'], ['c']]);
  });

  test('should return an empty array when called with no arguments', () => {
    expect(_.zip()).toEqual([]);
  });

  test('should add undefined for arrays with different lengths', () => {
    expect(_.zip(['a', 'b', 'c'], [1, 2], [true, false])).toEqual([
      ['a', 1, true],
      ['b', 2, false],
      ['c', undefined, undefined],
    ]);
  });

  test('should add undefined for arrays with different lengths', () => {
    expect(_.zip(['a'], [1, 2, 3, 4], [true, false])).toEqual([
      ['a', 1, true],
      [undefined, 2, false],
      [undefined, 3, undefined],
      [undefined, 4, undefined],
    ]);
  });
});
