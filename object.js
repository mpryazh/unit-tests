const arrayMethods = require("./array");

const _ = {
  merge: (obj, ...args) => {
    for (const source of args) {
      for (const key in source) {
        if (source[key]) {
          if (
            obj[key] &&
            typeof obj[key] === "object" &&
            typeof source[key] === "object"
          ) {
            _.merge(obj[key], source[key]);
          } else {
            obj[key] = source[key];
          }
        }
      }
    }
    return obj;
  },

  omit: (obj, paths = []) => {
    const result = {};
    for (key in obj) {
      if (arrayMethods.includes(paths, key) || paths === key) {
        continue;
      }
      result[key] = obj[key];
    }
    return result;
  },

  omitBy: (obj, func) => {
    const result = {};
    for (key in obj) {
      if (!func(obj[key], key)) {
        result[key] = obj[key];
      }
    }
    return result;
  },

  pick: (obj, paths = []) => {
    const result = {};
    for (key in obj) {
      if (arrayMethods.includes(paths, key) || paths === key) {
        result[key] = obj[key];
      }
    }
    return result;
  },

  pickBy: (obj, func) => {
    const result = {};
    for (key in obj) {
      if (func(obj[key], key)) {
        result[key] = obj[key];
      }
    }
    return result;
  },

  toPairs: (obj) => {
    const result = [];
    let i = 0;
    for (const key in obj) {
      result[i++] = [key, obj[key]];
    }
    return result;
  },
};

module.exports = _;
