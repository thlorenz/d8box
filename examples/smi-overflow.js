function add(a, b) {
  return a + b
}

add(1, 2)
add(1, 2)
%OptimizeFunctionOnNextCall(add)
add(2 ** 31 - 2, 20)
