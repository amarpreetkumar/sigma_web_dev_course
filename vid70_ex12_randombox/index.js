// Select all elements with class "box"
const boxes = document.querySelectorAll('.box');

// Function to generate a random color in hex format
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Apply random colors to each box
boxes.forEach(box => {
  box.style.backgroundColor = getRandomColor();
  box.style.color = getRandomColor();
});