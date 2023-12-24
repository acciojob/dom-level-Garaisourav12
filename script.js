//your JS code here. If required.
// Get the element with the id 'level'
const targetElement = document.getElementById('level');

// Function to determine the DOM level of an element
function getDomLevel(element) {
  let level = 0;
  let currentNode = element;

  // Traverse parent nodes until reaching the root element (<html>)
  while (currentNode !== null && currentNode.tagName !== 'HTML') {
    level++;
    currentNode = currentNode.parentNode;
  }

  return level;
}

// Get the DOM level of the target element
const domLevel = getDomLevel(targetElement);

// Display the result using alert()
alert(`The level of the element is: ${domLevel}`);
