'use strict'

/* global print */

function calc(val) {
  if (val < 0) throw new Error('val needs to be >= 0')
  return val * 2
}

function catcher(val) {
  try {
    return calc(val)
  } catch (err) {
    print(err.toString())
  }
}

const ITER = 1E6
function test() {
  var res = 0
  for (let i = 0; i < ITER; ++i) {
    res += catcher(i)
  }
  return res
}


// Warmup
var res = test()
print(res)

// Starting Test
const startTime = Date.now()
test()
const endTime = Date.now()
print(res)
print('Time: ' + (endTime - startTime) + 'ms.')
