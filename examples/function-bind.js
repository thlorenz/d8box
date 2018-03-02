'use strict'

/* global print */

function foo(x, y, z) {
  return this + x + y + z
}
const foo1 = foo.bind(1, 0)
const foo2 = foo.bind(2, 1)

function test() {
  var sum = 0
  const limit = 1000
  for (var y = 0; y < limit; ++y) {
    for (var z = 0; z < limit; ++z) {
      sum += foo1(y, z) + foo2(y, z)
    }
  }
  return sum
}

const ITER = 1E2

// Warmup
for (let i = 0; i < ITER; ++i) test()

// Starting Test
const startTime = Date.now()
for (let i = 0; i < ITER; ++i) test()
const endTime = Date.now()
print('Time: ' + (endTime - startTime) + 'ms.')

/*
// Need to run with --allow-natives-syntax
function checkCrankshaft() {
  print('foo optimized ' + %GetOptimizationCount(foo) + ' times')
  // the below crashes due to functions being bound?
  print('foo1 optimized ' + %GetOptimizationCount(foo1) + ' times')
  print('foo2 optimized ' + %GetOptimizationCount(foo2) + ' times')
}

function checkTurboFan() {
  print('foo'); %DebugPrint(foo)
  print('foo1'); %DebugPrint(foo1)
  print('foo2'); %DebugPrint(foo2)
}
*/
