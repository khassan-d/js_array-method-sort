'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => String(a) > String(b),
  ) {
    for (let i = 1; i <= this.length; i++) {
      if (compareFunction(this[i - 1], this[i]) > 0) {
        const toSwapValue = this[i];

        this[i] = this[i - 1];
        this[i - 1] = toSwapValue;

        i = 0;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
