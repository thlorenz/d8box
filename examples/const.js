#!/usr/bin/env node --allow-natives-syntax --print-opt-code --code-comments
'use strict'

// See: http://benediktmeurer.de/2017/06/29/javascript-optimization-patterns-part2/

function log(...args) {
  if (typeof print !== 'function') console.log(...args)
  else print(...args)
}

const INCREMENT = 1

function incr(x) { return x + INCREMENT }

// Warmup
incr(3)
incr(4)
;%OptimizeFunctionOnNextCall(incr)
log(incr(5))
