// Adds a new item to the end of the list of items
// Retrives <ul> element
var list = document.getElementsByTagName('ul')[0]; 
var newItemEnd = document.createElement('li'); 
// Sets the text context to be cream
newItemEnd.textContent = 'cream'; 
// Appends the new item to the end of the list
list.appendChild(newItemEnd); 

// Adds a new item to the start of the list of items
var newItemStart = document.createElement('li'); 
//Sets the text context to be kale
newItemStart.textContent = 'kale'; 
//Inserts the new item to the start of the list
list.insertBefore(newItemStart, list.firstChild); 

// Adds a class of cool to all of the list items 
var listItems = list.getElementsByTagName('li'); 
for (var i = 0; i < listItems.length; i++) 
{
  // Adds the class "cool" to each <li> element
  listItems[i].className = 'cool'; 
}

// Adds the number of items in the list to the heading 
//Retrives h2 element
var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue; 
var totalItems = listItems.length; 
// Creates a new heading text with the item count
var newHeading = headingText + ' <span>' + totalItems + '</span>'; 
// Updates the <h2> element with the new heading text
heading.innerHTML = newHeading; 
