const bars = document.getElementById("bars")
const div1 = document.getElementById("div1")
const div2 = document.getElementById("div2")
const anima1 = document.querySelectorAll("a")

bars.addEventListener("click", function(){
    div1.classList.toggle("active")
    div2.classList.toggle("active")
    
    anima1.forEach((animation) => animation.classList.toggle("active-animation"))
})