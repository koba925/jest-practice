function FuncToMock (a) {
  console.log('Inside FuncToMock:', a);
  this.a = a;
}

module.exports = FuncToMock;
