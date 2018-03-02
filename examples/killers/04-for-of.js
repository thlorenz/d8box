'use strict'

/* global print */

const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
var sum = 0

// for of adds implicit try/finally as per spec
function forof() {
  for (var k of arr) {
    sum += k
  }
}

const ITER = 1E4
function test() {
  for (var i = 0; i < ITER; i++) {
    forof()
  }
}

// Warmup
test()

const startTime = Date.now()
test()
const endTime = Date.now()
print(sum)
print('Time: ' + (endTime - startTime) + 'ms.')
