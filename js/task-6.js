function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let size = 30;
const boxes = document.querySelector("#boxes");
const creation = document.querySelector("button[data-create]");

function createBoxes(amount) {
  const createdBoxes = [];

  for (let index = 0; index < amount; index++) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    size += 10;
    createdBoxes.push(box);
  }
  boxes.append(...createdBoxes);
}

const input = document.querySelector("input");
creation.addEventListener("click", (event) => {
  const numberOfBoxes = input.value;
  if (numberOfBoxes >= 1 && numberOfBoxes <= 100) {
    createBoxes(numberOfBoxes);
  }
  input.value = "";
});

const destroying = document.querySelector("button[data-destroy]");
function destroyBoxes() {
  boxes.innerHTML = "";
  size = 30;
}

destroying.addEventListener("click", destroyBoxes);
