'use strict'

/* global print */

var counter = 0

function checkBool(add) {
  if (!add) add = 0
  counter += add
}

function checkOr(add) {
  add = add || 0
  counter += add
}

function checkVoid(add) {
  if (add === void 0) add = 0
  counter += add
}

function checkUndefined(add) {
  if (add === undefined) add = 0
  counter += add
}

function checkNull(add) {
  if (add == null) add = 0
  counter += add
}

function defaultParam(add = 0) {
  counter += add
}

const ITER = 1E6
function test(fn, name) {
  const startTime = Date.now()
  for (let i = 0; i < ITER; ++i) {
    fn()
    fn(i)
  }
  const endTime = Date.now()
  print(name + '\t' + (endTime - startTime) + 'ms')
}

function runSync() {
  test(checkBool, 'if(add)  ')
  gc()
  test(checkOr, '||       ')
  gc()
  test(checkVoid, '=== void 0')
  gc()
  test(checkUndefined, '=== undefined')
  gc()
  test(checkNull, '== null      ')
  gc()
  test(defaultParam, 'default param')
}

const TIMEOUT = 200
function runAsync() {
  setTimeout(() => test(checkBool, 'if(add)  '), TIMEOUT)
  setTimeout(() => test(checkOr, '||       '), TIMEOUT * 2)
  setTimeout(() => test(checkVoid, '=== void 0'), TIMEOUT * 3)
  setTimeout(() => test(checkUndefined, '=== undefined'), TIMEOUT * 4)
  setTimeout(() => test(checkNull, '== null      '), TIMEOUT * 5)
  setTimeout(() => test(defaultParam, 'default param'), TIMEOUT * 6)
}
runSync()

// force v8 to keep our counter
print('counter ' + counter)
