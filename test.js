'use strict';

var test = require('ava');
var permutationsCount = require('./');

test(function (t) {
	t.assert(permutationsCount(2, 0) === 1);
	t.assert(permutationsCount(0, 0) === 1);
	t.assert(permutationsCount(10, 10) === 3628800);
	t.assert(permutationsCount(10, 1) === 10);
	t.assert(permutationsCount(12, 3) === 1320);
	t.assert(permutationsCount(1000, 30) === 6.444605211972133e+89);
	t.end();
});
