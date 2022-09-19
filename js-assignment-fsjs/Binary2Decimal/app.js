function convert(decimal) {
  let binaries = [1];
  let ans = [0];
  //   for (let i = 1; true; i++) {
  //     binaries.push(binaries[i - 1] * 2);
  //     ans.push(0);
  //     if (binaries[i] >= decimal) break;
  //   }
  let i = 0;
  while (binaries[i] < decimal) {
    binaries.push(binaries[i] * 2);
    ans.push(0);
    i++;
  }
  binaries.reverse();
  while (decimal > 0) {
    const index = binaries.findIndex((value) => value <= decimal);
    ans[index] = 1;
    decimal = decimal - binaries[index];
  }
  ans = ans.slice(ans.indexOf(1));
  return ans.join("");
}

console.log(convert(166));
