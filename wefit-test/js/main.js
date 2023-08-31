let mainMenu = document.querySelector('#main-menu');

mainMenu.style.display = 'flex';
mainMenu.style.flexDirection = 'initial';
mainMenu.style.gap = '8px';
mainMenu.style.flexWrap = 'wrap';

let mainMenuChildren = Array.from(mainMenu.children);

mainMenuChildren.forEach((element) => {
  element.style.borderRadius = '4px';
  element.style.width = 'initial';
});

//Header
let header = document.querySelector('#jumbotron');
header.style.display = 'flex';
header.style.flexDirection = 'column';
header.style.alignItems = 'end';
header.style.background = '#6c757d';
header.style.color = '#FFFFFF';

let headerHR = document.querySelector('#headerHR');
headerHR.style.borderTop = '1px solid #C0C1C3';
headerHR.style.width = '100%';

let headerChildren = Array.from(header.children);
headerChildren[4].style.background = '#27a844';
headerChildren[4].style.borderColor = '#27a844';

headerChildren[4].addEventListener('focus', (e) => {
  e.target.style.boxShadow = '0 0 0.2rem #27a844';
});

//Cards
let cards = document.querySelector('#cards');
let cardsChildren = Array.from(cards.children);
cardsChildren.shift();
let buttonFirstCard = cardsChildren[0].getElementsByClassName('btn');
buttonFirstCard[0].style.background = '#27a844';
buttonFirstCard[0].style.borderColor = '#27a844';

buttonFirstCard[0].addEventListener('focus', (e) => {
  e.target.style.boxShadow = '0 0 0.2rem #27a844';
});

const arrayNames = ['Natureza', 'Animais', 'Pessoas', 'Tecnologia'];

const newElementsArray = cardsChildren.sort(function (a, b) {
  return (
    arrayNames.indexOf(a.querySelector('.card-title').textContent) -
    arrayNames.indexOf(b.querySelector('.card-title').textContent)
  );
});

const elements = [Array.from(cards.children)[0], ...newElementsArray];

cards.innerHTML = '';
elements.forEach((element) => {
  cards.appendChild(element);
});

//List
let list = document.querySelector('#list-group');

let firstItem = list.querySelector('li').cloneNode(true);
firstItem.style.background = '#FFFFFF';
firstItem.style.color = '#000000';
firstItem.style.transition = 'all 0.2s';
firstItem.style.borderColor = 'rgba(0, 0, 0, 0.125)';
firstItem.textContent = 'Primeiro item';

let secondItem = firstItem.cloneNode(true);
secondItem.textContent = 'Segundo item';

let thirthItem = firstItem.cloneNode(true);
thirthItem.textContent = 'Terceiro item';

let fourthItem = firstItem.cloneNode(true);
fourthItem.textContent = 'Quarto item';

let fivethItem = firstItem.cloneNode(true);
fivethItem.textContent = 'Quinto item';

list.innerHTML = '';

list.appendChild(firstItem);
list.appendChild(secondItem);
list.appendChild(thirthItem);
list.appendChild(fourthItem);
list.appendChild(fivethItem);

Array.from(list.children).map((element) => {
  element.addEventListener('mouseover', () => {
    element.style.background = '#007bff';
    element.style.color = '#FFFFFF';
    element.style.borderColor = '#007bff';
  });

  element.addEventListener('mouseout', () => {
    element.style.background = '#FFFFFF';
    element.style.color = '#000000';
    element.style.borderColor = 'rgba(0, 0, 0, 0.125)';
  });
});
