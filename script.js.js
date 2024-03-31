const lowerCaseString = document.querySelector("#input-place");
const newString = document.querySelector("#button");

function newDiv(){
const targetContainer = document.querySelector("#container");
const string = lowerCaseString;
const HTMLString = `
<p style="display:block">${string.value.toUpperCase()}</p>
`;
targetContainer.innerHTML += HTMLString;
}
newString.addEventListener("click", newDiv);
