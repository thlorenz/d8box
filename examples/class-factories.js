'use strict'

function getPrototypeChainOf(clazz) {
  const chain = []
  for (
    var proto = Object.getPrototypeOf(clazz);
    proto != null;
    proto = Object.getPrototypeOf(proto)) {
    chain.push(proto.toString())
  }
  return chain.join(':')
}

function createClassBasedOn(BaseClass) {
  return class Foo extends BaseClass { }
}

class Bar {}

const JustFoo = createClassBasedOn(Object)
console.log({ JustFoo: getPrototypeChainOf(JustFoo) })
// { JustFoo: 'function Object() { [native code] }:function () { [native code] }:[object Object]' }

const FooBar = createClassBasedOn(Bar)
console.log({ FooBar: getPrototypeChainOf(FooBar) })
// { FooBar: 'class Bar {}:function () { [native code] }:[object Object]' }
