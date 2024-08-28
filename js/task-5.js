function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const colored = document.querySelector("body");
const span = document.querySelector("span");

btn.addEventListener("click", (event) => {
  colored.style.backgroundColor = getRandomHexColor();
  span.style.backgroundColor = colored.style.backgroundColor;
});
