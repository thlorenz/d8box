'use strict'

class A extends Object {}
class B {}

const a = new A()
const b = new B()

function getPrototypeChainOfConstructor(obj) {
  const chain = []
  for (
    var proto = Object.getPrototypeOf(obj.constructor);
    proto != null;
    proto = Object.getPrototypeOf(proto)) {
    chain.push(proto.toString())
  }
  return chain.join(':')
}

console.log({ a: getPrototypeChainOfConstructor(a), b: getPrototypeChainOfConstructor(b) })

// { a: 'function Object() { [native code] }:function () { [native code] }:[object Object]',
//   b: 'function () { [native code] }:[object Object]' }
