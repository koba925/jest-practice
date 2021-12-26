
const F2M = require('./func-to-mock');

function isSameModule (m) {
  return m === F2M;
}

function callingFunction (a) {
  console.log('Inside CallingFunction:', a);
  const obj = new F2M(a);
  console.log('Obj Created:', obj);

  return obj;
}

module.exports = { callingFunction, isSameModule };
