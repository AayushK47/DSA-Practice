function fibonacci(n) {
  if(n===1 || n === 0) {
    return n;
  }

  return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(50));