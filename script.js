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
  // Close the menu when clicking on any link
  const menuLinks = document.querySelectorAll(".menu a"); // Sélectionne tous les liens à l'intérieur du menu
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("show"); // Retire la classe 'show' pour fermer le menu
    });
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
  setInterval(nextSlide, 5000);

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

//FAQ////////////////////////////////////

document.querySelectorAll(".faq-item h4").forEach(item => {
  item.addEventListener("click", () => {
    // Toggle la classe "active" sur le titre de la question
    item.classList.toggle("active");

    // Afficher ou masquer la réponse correspondante
    const answer = item.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});

///// RECHERCHE ///////////////////////////////////////////////////////////////////////////////////////
///////RECHERCHE/////////////////////////////////////////////////////////////////////////////////

// Fonction de recherche
function performSearch(query) {
  // Convertir la recherche en minuscules
  query = query.toLowerCase();

  // Sélectionner tous les éléments du catalogue
  let items = document.querySelectorAll("#catalogue li");

  // Initialiser un compteur pour les résultats trouvés
  let resultsFound = false;

  // Parcourir les éléments pour les afficher ou les cacher
  items.forEach(function(item) {
    // Si l'élément correspond à la recherche, on l'affiche, sinon on le cache
    if (item.textContent.toLowerCase().includes(query)) {
      item.style.display = ""; // Affiche l'élément
      resultsFound = true; // Indique qu'il y a au moins un résultat
    } else {
      item.style.display = "none"; // Cache l'élément
    }
  });

  // Afficher ou cacher le catalogue en fonction des résultats
  let catalogue = document.getElementById("catalogue");
  if (query !== "" && resultsFound) {
    catalogue.style.display = "block"; // Affiche le catalogue s'il y a des résultats
  } else {
    catalogue.style.display = "none"; // Cache le catalogue s'il n'y a pas de résultats ou si la recherche est vide
  }
}

// Écouteur d'événement pour la barre de recherche
document.getElementById("recherche").addEventListener("keyup", function() {
  let query = this.value; // Récupérer la valeur de l'entrée
  performSearch(query); // Appeler la fonction de recherche
});

// Écouteur d'événement pour l'icône de recherche dans la barre de recherche
document.getElementById("search-icon").addEventListener("click", function() {
  const menu = document.querySelector(".menu");
  let query = document.getElementById("recherche").value; // Récupérer la valeur de l'entrée
  performSearch(query); // Appeler la fonction de recherche
});
// Close the menu
closeIcon.addEventListener("click", () => {
  menu.classList.remove("show"); // Retire la classe pour cacher le menu
});

/////////////////////////////////////////////////////////////////////////////////////////////////////
