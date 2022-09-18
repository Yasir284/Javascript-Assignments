// Topics
//    Remove Elements

// Tasks
//  Remove alternate languages from the home page languages listed

let arr = document.querySelectorAll("#SIvCob a");

for (i = 0; i < arr.length; i++) {
  if (i % 2 == 0) {
    arr[i].remove();
  }
}

console.log(arr);
