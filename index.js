'use strict';

var factorial = require('big-factorial');

module.exports = function permutationsCount(n, r) {

  if (typeof n !== 'number' || typeof r !== 'number') {
    throw new Error('Arguments must be numbers');
  }

  if (n < r) {
    throw new Error('n must be >= r');
  }

  return factorial(n).divide(factorial(n - r)).toJSNumber();
};
