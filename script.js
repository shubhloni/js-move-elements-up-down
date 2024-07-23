const appDiv = document.getElementById('app');

const ELEMENTS = [
  {
    id: 1,
    data: 'ONE',
  },
  {
    id: 2,
    data: 'TWO',
  },
  {
    id: 3,
    data: 'THREE',
  },
];

const moveArrayElement = (arr, fromIndex, toIndex) => {
  const element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);
};

const handleUpButtonClick = (index) => {
  if (index === 0) {
    return;
  }

  moveArrayElement(ELEMENTS, index, index - 1);
  render();
};

const handleDownButtonClick = (index) => {
  if (index === ELEMENTS.length - 1) {
    return;
  }

  moveArrayElement(ELEMENTS, index, index + 1);
  render();
};

const generateElement = (el, index) => {
  return `<div id=${el.id} class=elementContainer>
  ${el.data} 
  <div>
  <button onclick=handleUpButtonClick(${index})>Up</button>
  <button onclick=handleDownButtonClick(${index})>Down</button>
  </div> 
  </div>`;
};

const render = () => {
  let html = '';

  ELEMENTS.forEach((el, index) => {
    html += generateElement(el, index);
  });

  appDiv.innerHTML = html;
};

document.addEventListener('DOMContentLoaded', () => {
  render();
});
