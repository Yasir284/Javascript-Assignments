// Topics
// Form, Value, Submit

// Tasks
//  To Search a topic in the MDN Search bar.
//  First add a text to search in the search bar and then hit the submit search button to search the docs using DOM

function search(searchText) {
  let input = document.querySelector("#hp-search-input");
  input.value = searchText;
  let form = document.querySelector("#hp-search-form");
  form.submit();
}

search("css");
