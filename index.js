"use strict";

// `STORE` is responsible for storing the underlying data
// that our app needs to keep track of in order to work.
//
// for a shopping list, our data model is pretty simple.
// we just have an array of shopping list items. each one
// is an object with a `name` and a `checked` property that
// indicates if it's checked off or not.
// we're pre-adding items to the shopping list so there's
// something to see when the page first loads.
const STORE = [
  { name: "apples", checked: false },
  { name: "oranges", checked: false },
  { name: "milk", checked: true },
  { name: "bread", checked: false }
];

function generateHtml(item, itemIndex) {
  const isChecked = item.checked ? "shopping-item__checked" : "";
  return `<li>
       <span class="shopping-item ${isChecked}">${item.name}</span>
       <div class="shopping-item-controls">
         <button class="shopping-item-toggle">
           <span class="button-label">check</span>
         </button>
         <button class="shopping-item-delete">
           <span class="button-label">delete</span>
         </button>
       </div>
     </li>`;
}

function renderShoppingList() {
  // this function will be responsible for rendering the shopping list in
  // the DOM
  const html = STORE.map((item, index) => generateHtml(item, index)).join("");
  console.log("`renderShoppingList` ran");
  return $(".js-shopping-list").html(html);
}

function handleNewItemSubmit() {
  // this function will be responsible for when users add a new shopping list item
  console.log("`handleNewItemSubmit` ran");
}

function handleItemCheckClicked() {
  // this function will be responsible for when users click the "check" button on
  // a shopping list item.
  console.log("`handleItemCheckClicked` ran");
}

function handleDeleteItemClicked() {
  // this function will be responsible for when users want to delete a shopping list
  // item
  console.log("`handleDeleteItemClicked` ran");
}

// this function will be our callback when the page loads. it's responsible for
// initially rendering the shopping list, and activating our individual functions
// that handle new item submission and user clicks on the "check" and "delete" buttons
// for individual shopping list items.
function handleShoppingList() {
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();
}

// when the page loads, call `handleShoppingList`
$(handleShoppingList);
