const { callingFunction /*, isSameModule */ } = require('./calling-function.js');

// required to be defined outside jest.mock for visibility
function MockingFunc (a) {
  console.log('Inside mocking function:', a);
  this.b = a;
}

// jest.mock('./func-to-mock', () => MockingFunc);
jest.mock('./func-to-mock', () => jest.fn().mockImplementation(MockingFunc));
const F2M = require('./func-to-mock');
// Is the module same between files? => yes
// const F2M = require('./func-to-mock'); // not needed
// console.log(isSameModule(F2M)); // true

test('mock test', () => {
  console.log('Inside mock test');
  const result = callingFunction(123);
  console.log('Function result:', result);

  //  expect(result).toBeInstanceOf(MockingFunc);
  expect(F2M).toHaveBeenCalledWith(123);
  expect(result).toEqual({ b: 123 });
});
