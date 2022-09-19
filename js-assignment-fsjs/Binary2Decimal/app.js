function convert(decimal) {
  let length = Math.floor(Math.log2(decimal));
  let ans = 0;
  while (length >= 0) {
    const number = 2 ** length;
    if (number <= decimal) {
      ans += 10 ** length;
      decimal -= number;
    }
    length--;
  }
  return ans;
}
const start = Date.now();

console.log(convert(165));

const end = Date.now();
console.log(`Execution time: ${end - start} ms`);
