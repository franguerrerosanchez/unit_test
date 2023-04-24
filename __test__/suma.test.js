const sum = require('../utils/suma.js');


test("sumar 1+2 igual a 3", () => {
    expect(sum(1,2)).toBe(3);
})


describe('calculator', () => {
    test.each`
      firstValue | secondValue | expectedResult    
      ${3}       | ${1}        | ${4}
      ${-4}      | ${1}        | ${-3}
      ${0}       | ${1}        | ${1}
      ${44}      | ${1}        | ${45}
      ${4}       | ${1}        | ${5}
    `('$firstValue + $secondValue should return $expectedResult', ({firstValue, secondValue, expectedResult}) => {
      expect(sum(firstValue, secondValue)).toBe(expectedResult);
    });
  });