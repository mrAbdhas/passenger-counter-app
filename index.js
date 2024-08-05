// Access html elements and assign themn to variables
const countEl = document.getElementById("count-el");
const incrementBtn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");

// Create a new paragraph element to UI to display saved count. 
const saveEl = document.createElement("p");

// Add text to the new paragraph.
saveEl.textContent = "Previous entries: ";

// Add attributes to the element.
saveEl.setAttribute("id", "save-el");

// Append it to the body.
document.body.appendChild(saveEl);

