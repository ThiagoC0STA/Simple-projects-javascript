/* ---------------------------- Get Elements ---------------------------- */

const blue_text = document.getElementById("blue-h1");
const btn = document.getElementById("btn");
const main = document.getElementById("main");

/* ------------------------------- Array ------------------------------- */

const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

/* ------------------------- Change color event ------------------------- */

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  blue_text.textContent = hexColor;
  main.style.backgroundColor = hexColor;
});

/* ----------------------- Random Number Function ----------------------- */

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
