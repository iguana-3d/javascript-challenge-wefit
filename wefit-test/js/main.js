let mainMenu = document.querySelector('#main-menu');

mainMenu.style.display = 'flex';
mainMenu.style.flexDirection = 'initial';
mainMenu.style.gap = '8px';
mainMenu.style.flexWrap = 'wrap';
console.log();

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
headerHR.style.borderTop = '1px solid #FFFFFF';
headerHR.style.width = '100%';

let headerChildren = Array.from(header.children);

console.log(headerChildren);
