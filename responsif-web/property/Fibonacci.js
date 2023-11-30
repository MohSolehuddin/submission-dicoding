function fibonacci(value) {
  let result = [0, 1];
  for (let i = value -2 ; i >= 0; i--) {
    let nextNumber = result[result.length -1] + result[result.length -2];
    result.push(nextNumber);
  }
  return result;
}
console.log(fibonacci(5));