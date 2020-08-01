
//color codes for grid items
const colorCode = [
  '#6f98a8',
  '#298dac',
  '#2f444e',
  '#2a8ead',
  '#2f444e',
  '#bebebe',
  '#bfbfbf',
  '#6f98a8',
  '#2f444e',
];
//default items
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Setting defaulting flag for shuffle actions 
let isShuffleTriggered = false;

// Accessing the elements 
let btnShuffle = document.getElementById('btnShuffle');
let btnSort = document.getElementById('btnSort');
let gridContainer = document.getElementById('main');

// add event listener for shuffle and sort button
btnShuffle.addEventListener('click', doShuffle);
btnSort.addEventListener('click', doSort);



//Shuffling the items
function doShuffle() {
  let array = [...items];
  isShuffleTriggered = true;
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  render(array);
}

// Sorting Actions
function doSort() {
  if (isShuffleTriggered) {
    render(items);
    isShuffleTriggered = false;
  }
}

//Actual method to render the grid.
// Setting the all styles and classnames

function render(items) {
  clearChild();
  for (let i = 0; i < items.length; i++) {
    let node = document.createElement('div');
    node.innerText = items[i];
    node.style.cssText = `background-color: ${
      colorCode[items[i] - 1]
    };text-align:center;color:white;font-size:3em;border-left:5px solid ${
      colorCode[items[i] - 1]
    }`;
    node.className = 'flex-items';
    gridContainer.appendChild(node);
  }
}

// Clear the grid before making the changes either sort or shuffle
function clearChild() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}


// Initialize the render with sorted items.
render(items);