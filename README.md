# permutations-count

Calculate the number of possible permutations given the size of a set and
the size of the ordered sub-sets (permutations).

## Install

`$ npm install --save permutations-count`

## Usage

```js
var permutationsCount = require('permutations-count');

var numPermutations = permutationsCount(12, 3);
console.log(numPermutations); // => 1320

console.log(permutationsCount(1000, 30));
// ... this will take a few seconds
// => 6.444605211972133e+89
```

## permutationsCount(n, r)

* Returns `number`
* Requires `n >= r`

The returned number is the number of ways of obtaining an ordered subset of
`r` elements from a set of `n` elements.


## Large numbers
Works for large numbers thanks to
[big-integer](https://www.npmjs.com/package/big-integer) via
[big-factorial](https://www.npmjs.com/package/big-factorial). But when the
numbers get large the calculations are slow, and you loose precision when the
result is > 9007199254740992.

From the `big-integer` readme:

> `bigInt("18446744073709551616").toJSNumber() => 18446744073709552000`
