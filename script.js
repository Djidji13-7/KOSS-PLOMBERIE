document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.querySelector(".menu1");
  const menu = document.querySelector(".menu");
  const closeIcon = document.querySelector(".fermer");
  const promoCloseIcon = document.querySelector(".fermer1");
  const promoBar = document.querySelector(".promo");
  const nav = document.querySelector(".nav");

  // Open the menu
  menuIcon.addEventListener("click", () => {
    menu.classList.add("show"); // Ajoute la classe pour afficher le menu
  });

  // Close the menu
  closeIcon.addEventListener("click", () => {
    menu.classList.remove("show"); // Retire la classe pour cacher le menu
  });

  // Close the promo bar
  promoCloseIcon.addEventListener("click", () => {
    promoBar.classList.add("hide"); // Ajoute la classe pour cacher la barre de promo
  });
  // Effet de redimensionnement de la barre de navigation lors du défilement
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      // Si le défilement est supérieur à 50px
      nav.classList.add("shrink"); // Ajoute la classe pour réduire la barre
    } else {
      nav.classList.remove("shrink"); // Retire la classe si on revient en haut
    }
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;

  function updateCarousel() {
    items.forEach((item, index) => {
      item.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
      item.style.display =
        index === currentIndex ? "block" : "none"; /* Gère la visibilité */

      // Gère l'affichage de la légende de chaque diapositive
      const caption = item.querySelector(".carousel-caption");
      if (caption) {
        if (index === currentIndex) {
          caption.classList.add("show"); // Afficher la légende de l'élément actif
        } else {
          caption.classList.remove("show"); // Cacher les autres légendes
        }
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
  }

  // Initialisation du carrousel
  updateCarousel();

  // Défilement automatique toutes les 5 secondes
  setInterval(nextSlide, 7000);

  // Ajout des gestionnaires d'événements pour les boutons
  document
    .querySelector(".carousel-control-prev")
    .addEventListener("click", prevSlide);
  document
    .querySelector(".carousel-control-next")
    .addEventListener("click", nextSlide);
});

//////////////////////////////////////////////////////////////////////////////////////////////
// Attendre que le document soit prêt
function toggleCategories() {
  const categories = document.querySelector(".mobile-categories");
  categories.classList.toggle("active");
}

//////////////////////////////////////////////////////////////////////

// Fonction pour faire défiler vers la section du form
document.addEventListener("DOMContentLoaded", function() {
  // Sélectionner tous les boutons par leur classe
  var voirPlusBtns = document.querySelectorAll(".voir-plus");

  // Ajouter l'événement de clic à chaque bouton
  voirPlusBtns.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
      event.preventDefault(); // Empêcher le comportement par défaut du bouton

      // Défilement vers la section du form
      document
        .getElementById("section-form")
        .scrollIntoView({ behavior: "smooth" });
    });
  });
});
