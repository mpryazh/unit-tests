const _ = {
  chunk: (arr, num = 1) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += num) {
      chunks[Math.floor(i / num)] = _.slice(
        arr,
        i,
        arr[i + num - 1] ? i + num - 1 : arr.length - 1
      );
    }
    return chunks;
  },

  slice: (arr, start, end) => {
    const result = [];
    const length = end - start;

    for (let i = 0; i <= length; i++) {
      result[i] = arr[i + start];
    }
    return result;
  },

  compact: (arr) => {
    return _.filter(arr, (elem) => Boolean(elem));
  },

  filter: (arr, func) => {
    const result = [];
    let i = 0;
    for (const elem of arr) {
      if (func(elem)) {
        result[i] = elem;
        i++;
      }
    }
    return result;
  },

  drop: (arr, num = 1) => {
    const result = [];
    let j = 0;
    for (let i = num; i < arr.length; i++) {
      result[j++] = arr[i];
    }
    return result;
  },

  dropWhile: (arr, func) => {
    const result = [];
    let dropping = true;
    let i = 0;

    for (const elem of arr) {
      if (!func(elem)) {
        dropping = false;
      }
      if (!dropping) {
        result[i++] = elem;
      }
    }
    return result;
  },

  take: (arr, num = 1) => {
    const result = [];
    for (let i = 0; i < num; i++) {
      result[i] = arr[i];
    }
    return result;
  },

  find: (arr, func, fromIndex = 0) => {
    for (let i = fromIndex; i < arr.length; i++) {
      if (func(arr[i])) {
        return arr[i];
      }
    }
  },

  includes: (collection, value, fromIndex = 0) => {
    let valIndex = 0;
    if (typeof collection === "string") {
      for (let i = fromIndex; i < collection.length; i++) {
        if (collection[i] === value[valIndex]) {
          valIndex++;
          if (valIndex === value.length) {
            return true;
          }
        } else {
          valIndex = 0;
        }
      }
      return false;
    }
    for (let i = fromIndex; i < collection.length; i++) {
      if (collection[i] == value) {
        return true;
      }
    }
    return false;
  },

  map: (arr, func) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result[i] = func(arr[i], i, arr);
    }
    return result;
  },

  zip: (...arrs) => {
    const result = [];
    const maxLength = _.findBiggestArrLength(arrs);

    for (let i = 0; i < arrs.length; i++) {
      for (let j = 0; j < maxLength; j++) {
        result[j] = result[j] ? result[j] : [];
        result[j][i] = arrs[i][j];
      }
    }
    return result;
  },

  findBiggestArrLength: (arrs) => {
    let maxLength = 0;
    for (let i = 0; i < arrs.length; i++) {
      const length = arrs[i].length;
      if (length > maxLength) {
        maxLength = length;
      }
    }
    return maxLength;
  },
};

module.exports = _;
