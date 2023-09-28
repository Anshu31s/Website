var typed = new Typed(".auto-type", {
  strings: ["Developer", "Designer", "Photographer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
});


// about me button at top 
const aboutme = document.getElementById('aboutme');
aboutme.addEventListener('click', function () {
  const nextPageUrl = 'about.html';
  window.location.href = nextPageUrl;
});


// this is fnctionality of conatct form pop up
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// filter for G.card
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".Filter-button");
  const cards = document.querySelectorAll(".G_Card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filters = button.getAttribute("data-filter").split(',');

      cards.forEach(card => {
        const cardId = card.id;
        const shouldShow = filters.includes(cardId) || filters.includes('all');

        card.style.display = shouldShow ? "block" : "none";
      });
    });
  });
});

const toggle = document.getElementById('toggle');
const darkTheme = document.getElementById('dark-theme');

if (window.matchMedia('(prefers-color-scheme: light)').matches) {
  toggle.checked = false;
  darkTheme.disabled = true;
}else{
  toggle.checked = true;
  darkTheme.disabled = false;
}

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    darkTheme.disabled = false;
  } else {
    darkTheme.disabled = true;
  }
});
