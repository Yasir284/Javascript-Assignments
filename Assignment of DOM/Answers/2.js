//  Task
//  Fetch all the product name and store in an array

let arr = [];

document
  .querySelectorAll(".as-imagegrid-item")
  .forEach((e) => arr.push(e.innerText.replace("\nSupport", "")));

console.log(arr);
