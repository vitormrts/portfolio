const techCards = document.querySelectorAll('.tech-card');
techCards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flip");
  }) 
})
console.log(techCards);