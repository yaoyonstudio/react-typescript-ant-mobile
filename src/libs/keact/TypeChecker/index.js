export default {
  isString (value) {
    return typeof value === 'string' || value instanceof String;
  },
  isNumber (value) {
    return typeof value === 'number' && isFinite(value);
  },
  isArray (value) {
    return value && typeof value === 'object' && value.constructor === Array;
  },
  isFunction (value) {
    return typeof value === 'function';
  },
  isObject (value) {
    return value && typeof value === 'object' && value.constructor === Object;
  },
  isNull (value) {
    return value === null;
  },
  isUndefined (value) {
    return typeof value === 'undefined';
  },
  isBoolean (value) {
    return typeof value === 'boolean';
  },
  isRegExp (value) {
    return value && typeof value === 'object' && value.constructor === RegExp;
  },
  isDate (value) {
    return value instanceof Date;
  },
  isError (value) {
    return value instanceof Error && typeof value.message !== 'undefined';
  },
  isSymbol (value) {
    return typeof value === 'symbol';
  }
}