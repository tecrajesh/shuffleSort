const colorCode = [
  '#000000',
  '#2B8EAD',
  '#333333',
  '#6F98A8',
  '#FFFFFF',
  '#BFBFBF',
  '#EFEFEF',
  '#2F454E',
  '#72C3DC',
];

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let isShuffleTriggered = false;
let btnShuffle = document.getElementById('btnShuffle');
let btnSort = document.getElementById('btnSort');
let gridContainer = document.getElementById('main');
btnShuffle.addEventListener('click', doShuffle);
btnSort.addEventListener('click', doSort);

render(items);

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

function doSort() {
  if (isShuffleTriggered) {
    render(items);
    isShuffleTriggered = false;
  }
}

function render(items) {
  clearChild();
  for (let i = 0; i < items.length; i++) {
    let node = document.createElement('div');
    node.innerText = items[i];
    node.style.cssText = `background-color: ${
      colorCode[items[i]]
    };width:100px;height:100px;text-align:center;font-size:3em;border-left:10px solid ${
      colorCode[items[i]]
    }`;
    gridContainer.appendChild(node);
  }
}

function clearChild() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}
