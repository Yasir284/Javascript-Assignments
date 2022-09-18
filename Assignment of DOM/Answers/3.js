// Topics
// - Get Element By Id, Create Element, Create Text Node, Append Child

// Tasks
//  Add another FAQ 'My New FAQ' to the list

let nav = document.querySelector(".article .accordion-homepage");

let section = document.createElement("section");
section.className = "parent";
section.appendChild(document.createElement("h3"));
section.querySelector("h3").textContent = "My New FAQ";

nav.appendChild(section);
