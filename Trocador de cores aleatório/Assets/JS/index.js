/* ---------------------------- Get Elements ---------------------------- */

const blue_text = document.getElementById("blue-h1");
const btn = document.getElementById("btn");
const main = document.getElementById("main");

/* ------------------------- Change Color Event ------------------------- */

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();

  main.style.backgroundColor = randomNumber;
  blue_text.textContent = randomNumber;
});

/* ----------------------- Random Number Function ----------------------- */

function getRandomNumber() {
  const random = (Math.random() * 200).toFixed(0);
  const random2 = (Math.random() * 200).toFixed(0);
  const random3 = (Math.random() * 200).toFixed(0);

  return `rgba(${random},${random2},${random3})`;
}
