
/* --------------------------------- Reviews Data --------------------------------- */

const reviews = [
    {
      id: 1,
      name: "Thiago Costa",
      job: "CEO",
      img:
        "./Assets/IMG/Me.jpg",
      text:
        "Innovative tech mind working as a computer programmer. Capable of working with a variety of technology and software solutions. Valuable team member who has experience diagnosing problems and developing solutions.",
    },

    {
      id: 2,
      name: "Susan Smith",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },

    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },

    {
      id: 4,
      name: "bill anderson",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },

];

/* --------------------------------- Get Elements --------------------------------- */

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

/* ---------------------------------- Inicial item ---------------------------------- */

let currentItem = 0;

/* -------------------------------- Load Inicial Item -------------------------------- */

window.addEventListener("DOMContentLoaded", () => showPerson());

/* -------------------------- Show the Atual Person Function -------------------------- */

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

/* --------------------------- Prev, Next and Random Buttons --------------------------- */

prevBtn.addEventListener("click", function() {  
    currentItem--

    if (currentItem < 0) {
        currentItem = reviews.length -1 
    }

    showPerson()
})

nextBtn.addEventListener("click", function() {
    currentItem++

    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }

    showPerson()
})

randomBtn.addEventListener("click", function() {
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson()
})