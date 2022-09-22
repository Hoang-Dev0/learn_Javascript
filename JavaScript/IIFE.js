// IIFE - Immediately invoked function expression
//------------------

/**
 * 1. IIFE là hàm 'private'
 * 2. Nên sử dụng để bảo đảm tính an toàn cho ứng dụng or library
 */

// Syntax:
// ;(function () {})()

// Example

const app = {
  car: [],
  add(car) {
    this.cars.push(car);
  },
  edit(index, car) {
    this.cars[index] = car;
  },
  detele(index) {
    this.cars.splice(index, 1);
  },
};

const app = (function () {
  const car = [];
  return {
    add(car) {
      cars.push(car);
    },
    edit(index, car) {
      cars[index] = car;
    },
    detele(index) {
      cars.splice(index, 1);
    },
  };
})();
