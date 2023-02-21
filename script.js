/* eslint-disable no-param-reassign */
const colors = document.querySelectorAll('.color');
document.querySelector('.black').style.backgroundColor = 'black';
const colorBtn = document.querySelector('#button-random-color');
const clearBtn = document.querySelector('#clear-board');
const vqvBtn = document.querySelector('#generate-board');

// requisito  4
// REFERENCIA: https://wallacemaxters.com.br/blog/48/como-gerar-cores-aleatorias-no-javascript
function generateColor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgba(${r}, ${g}, ${b})`;
}
// console.log(generateColor()); // TEST

// requisito 4 Mudando as cores das paletas
function changeColor() {
  for (let index = 1; index < colors.length; index += 1) {
    colors[index].style.backgroundColor = generateColor();
  }
}
colorBtn.addEventListener('click', changeColor);

// requisito 5 wip
// function saveLocalColors() {
//   const red = document.querySelector('#red');
//   const green = document.querySelector('#green');
//   const blue = document.querySelector('#blue');
//   const savedColors = {
//     color1: red,
//     color2: green,
//     color3: blue,
//   };
//   localStorage.setItem('colorPalette', JSON.stringify(savedColors));
// }

// requisto 6
function pixelBoard(userValue) {
  const canvas = document.getElementById('pixel-board');
  for (let index = 0; index < userValue; index += 1) {
    const pixelRow = document.createElement('div');
    pixelRow.classList = 'row';
    canvas.appendChild(pixelRow);
    for (let neoIndex = 1; neoIndex <= userValue; neoIndex += 1) {
      const newPixel = document.createElement('div');
      newPixel.className = 'pixel';
      canvas.appendChild(newPixel);
    }
  }
}

// requisito 9
// referencia Aula Fundamentos - Aula 4.3 com André Noel
function selectColor() {
  // eslint-disable-next-line no-restricted-syntax
  for (const cor of colors) {
    cor.addEventListener('click', (event) => {
      const selected = document.querySelector('.selected');
      if (selected !== null) {
        selected.classList.remove('selected');
      }
      event.target.classList.add('selected');
    });
  }
}
// requisito 10
// com ajuda e dicas de Heitor Oliveira Turma 30 tribo A e Rafa Plinta Turma 30 tribo B (OBRIGADO)
function paint() {
  const pixels = document.querySelectorAll('.pixel');
  // eslint-disable-next-line no-restricted-syntax
  for (const pixel of pixels) {
    pixel.addEventListener('click', (event) => {
      // eslint-disable-next-line operator-linebreak
      const cor =
        document.getElementsByClassName('selected')[0].style.backgroundColor;
      console.log(cor);
      event.target.style.backgroundColor = cor;
    });
  }
}

// requisito 11
function clearCanvas() {
  const pixels = document.querySelectorAll('.pixel');
  // eslint-disable-next-line no-restricted-syntax
  for (const pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
}
clearBtn.addEventListener('click', clearCanvas);

// requisito 13 WIP
// function resizeCanvas() {
//   const val = document.querySelector('input').value;
//   const board = document.querySelectorAll('#pixel-board');
//   if (board !== null) {
//     for (let index = 0; index < board.length; index += 1) {
//       board.parentNode.removeChild(board);
//     }
//     pixelBoard(val);
//   }
// }
// vqvBtn.addEventListener('click', resizeCanvas);

window.onload = () => {
  pixelBoard(5);
  selectColor();
  changeColor();
  paint();
};
