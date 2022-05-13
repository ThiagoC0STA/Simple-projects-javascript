
/* ---------------------------- Get Elements ---------------------------- */

const btns = document.querySelectorAll(".btn");
const counted = document.getElementById("counted");


/* ---------------------------- First Value ---------------------------- */

let count = 0;

/* -------------------------- Counter Function -------------------------- */

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const classes = e.currentTarget.classList;

    if (classes.contains("decrease")) {
      count--;
    } else if (classes.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      counted.style.color = "green";
    } else if (count < 0) {
      counted.style.color = "#d40000";
    } else {
      counted.style.color = "#222";
    }

    counted.textContent = count;
  });
});
