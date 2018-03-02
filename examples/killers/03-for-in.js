'use strict'

/* global print */

const obj = {
    hello: 1
  , hola: 2
  , hallo: 3
}

var sum = 0

// problem here was use of non-local var as interator
// for (const k in obj) also didn't optimize for different reason
// with turbofan both these cases are fine
var k
function forin() {
  for (k in obj) {
    sum += obj[k]
  }
}

const ITER = 1E6
function test() {
  for (var i = 0; i < ITER; i++) {
    forin()
  }
}

// Warmup
test()

const startTime = Date.now()
test()
const endTime = Date.now()
print(sum)
print('Time: ' + (endTime - startTime) + 'ms.')
