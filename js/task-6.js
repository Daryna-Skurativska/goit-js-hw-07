function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const boxes = document.querySelector("#boxes");
const creation = document.querySelector("button[data-create]");
const input = document.querySelector("input");
const destroying = document.querySelector("button[data-destroy]");

function createBoxes(amount) {
  boxes.innerHTML = "";

  let size = 30;

  const createdBoxes = [];

  for (let index = 0; index < amount; index++) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    createdBoxes.push(box);
    size += 10;
  }

  boxes.append(...createdBoxes);
}

creation.addEventListener("click", () => {
  const numberOfBoxes = parseInt(input.value, 10);
  if (numberOfBoxes >= 1 && numberOfBoxes <= 100) {
    createBoxes(numberOfBoxes);
  }
  input.value = "";
});

function destroyBoxes() {
  boxes.innerHTML = "";
}

destroying.addEventListener("click", destroyBoxes);
