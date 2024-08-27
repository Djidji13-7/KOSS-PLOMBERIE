const OpenNav = document.querySelector(".icon1");
const FermerNav = document.querySelector(".fermer");
const Menu = document.querySelector(".menu");

const PositionMenu = Menu.getBoundingClientRect().left;

OpenNav.addEventListener("click", () => {
  if (PositionMenu < 0) {
    Menu.classList.add("monter");
  }
});

FermerNav.addEventListener("click", () => {
  if (PositionMenu < 0) {
    Menu.classList.remove("monter");
  }
});

// // Fonction pour afficher les détails de l'image
// function showDetails(title, age, description, price, images) {
//   var modal = document.getElementById("myModal");
//   var modalTitle = document.getElementById("modal-title");
//   var modalAge = document.getElementById("modal-age");
//   var modalDescription = document.getElementById("modal-description");
//   var modalPrice = document.getElementById("modal-price");
//   var modalImages = document.getElementById("modal-images");

//   modalTitle.textContent = title;
//   modalAge.textContent = age;
//   modalDescription.textContent = description;
//   modalPrice.textContent = price;

//   // Effacer les images précédentes
//   modalImages.innerHTML = "";

//   // Ajouter les nouvelles images
//   images.forEach(function(image) {
//     var imgElement = document.createElement("img");
//     imgElement.src = image;
//     modalImages.appendChild(imgElement);
//   });

//   modal.style.display = "block";
//   modal.classList.add("show"); // Ajouter une classe pour l'animation
// }

// // Fermer la boîte modale
// var span = document.getElementsByClassName("close")[0];
// span.onclick = function() {
//   var modal = document.getElementById("myModal");
//   modal.style.display = "none";
//   modal.classList.remove("show"); // Retirer la classe après fermeture
// };

// // Fermer la boîte modale en cliquant en dehors
// window.onclick = function(event) {
//   var modal = document.getElementById("myModal");
//   if (event.target == modal) {
//     modal.style.display = "none";
//     modal.classList.remove("show"); // Retirer la classe après fermeture
//   }
// };
/////////////////////////////////////////////////////////////////////////////////////////////////
// Fonction pour faire défiler vers la section du formulaire
// function scrollToForm(event) {
//   event.stopPropagation(); // Empêcher l'événement de clic du produit
//   var modal = document.getElementById("myModal");
//   modal.style.display = "none"; // Fermer la modale
//   modal.classList.remove("show"); // Retirer la classe après fermeture

//   document
//     .getElementById("section-form")
//     .scrollIntoView({ behavior: "smooth" });
// }
// /////////////////////////////////////////////////////////////////////////////////////////////////
// Fonction pour faire défiler vers la section du produits

document.addEventListener("DOMContentLoaded", function() {
  // Sélectionner le bouton par son ID
  var acheterMaintenantBtn = document.getElementById("acheter-maintenant");

  // Ajouter l'événement de clic
  acheterMaintenantBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut du lien
    event.stopPropagation(); // Empêcher l'événement de clic de se propager

    // Défilement vers la section des produits
    document
      .getElementById("section-form")
      .scrollIntoView({ behavior: "smooth" });
  });
});

// //Boutique///////////////////////////////////////////////////////////////////////
// document.addEventListener("DOMContentLoaded", function() {
//   // Sélectionner le lien "Boutique"
//   const accueilLink = document.querySelector('.nav-link[href="#2"]');

//   // Sélectionner le menu
//   const menu = document.querySelector(".menu");

//   // Ajouter l'événement de clic
//   accueilLink.addEventListener("click", function(event) {
//     event.preventDefault(); // Empêcher le comportement par défaut du lien
//     event.stopPropagation(); // Empêcher l'événement de clic de se propager

//     // Défilement vers la section "banniere"
//     document
//       .getElementById("section-produits")
//       .scrollIntoView({ behavior: "smooth" });

//     // Fermer le menu mobile si ouvert
//     if (menu.classList.contains("monter")) {
//       menu.classList.remove("monter");
//     }
//   });
// });

//Accueill///////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
  // Sélectionner le lien "Accueil"
  const accueilLink = document.querySelector('.nav-link[href="#1"]');

  // Sélectionner le menu
  const menu = document.querySelector(".menu");

  // Ajouter l'événement de clic
  accueilLink.addEventListener("click", function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut du lien
    event.stopPropagation(); // Empêcher l'événement de clic de se propager

    // Défilement vers la section "banniere"
    document.getElementById("banniere").scrollIntoView({ behavior: "smooth" });

    // Fermer le menu mobile si ouvert
    if (menu.classList.contains("monter")) {
      menu.classList.remove("monter");
    }
  });
});

//Contact///////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
  // Sélectionner le lien "Contact
  const accueilLink = document.querySelector('.nav-link[href="#4"]');

  // Sélectionner le menu
  const menu = document.querySelector(".menu");

  // Ajouter l'événement de clic
  accueilLink.addEventListener("click", function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut du lien
    event.stopPropagation(); // Empêcher l'événement de clic de se propager

    // Défilement vers la section "banniere"
    document
      .getElementById("section-contact")
      .scrollIntoView({ behavior: "smooth" });

    // Fermer le menu mobile si ouvert
    if (menu.classList.contains("monter")) {
      menu.classList.remove("monter");
    }
  });
});

//Apropos de nous /////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  // Sélectionner le lien "À propos de nous"
  const proposLink = document.getElementById("openPropos");
  // Sélectionner la modale "À propos de nous"
  const proposModal = document.getElementById("proposModal");
  // Sélectionner le bouton de fermeture de la modale
  const closeModalBtn = document.querySelector(".close-propos");
  // Sélectionner le menu
  const menu = document.querySelector(".menu");

  // Fonction pour afficher la modale
  function openProposModal() {
    // Fermer le menu mobile si ouvert
    if (menu.classList.contains("monter")) {
      menu.classList.remove("monter");
    }
    // Afficher la modale
    proposModal.style.display = "block";
  }

  // Fonction pour fermer la modale
  function closeProposModal() {
    proposModal.style.display = "none";
  }

  // Ouvrir la modale lors du clic sur le lien
  proposLink.addEventListener("click", e => {
    e.preventDefault(); // Empêche le comportement par défaut du lien
    openProposModal();
  });

  // Fermer la modale lors du clic sur le bouton de fermeture
  closeModalBtn.addEventListener("click", closeProposModal);

  // Fermer la modale lors du clic en dehors du contenu
  window.addEventListener("click", e => {
    if (e.target === proposModal) {
      closeProposModal();
    }
  });
});

// //ContactEZ NOUS/////////////////////////////////////////////////////////////////////////////////

// document.addEventListener("DOMContentLoaded", () => {
//   // Sélectionne le lien "Contact" et la section "contact"
//   const contactLink = document.querySelector('.nav-link[href="#5"]');
//   const contactModal = document.querySelector(".contact");
//   const menu = document.querySelector(".menu");

//   // Ajouter un écouteur d'événement au lien "Contact"
//   contactLink.addEventListener("click", e => {
//     e.preventDefault(); // Empêche le comportement par défaut du lien

//     // Fermer le menu mobile si ouvert
//     if (menu.classList.contains("monter")) {
//       menu.classList.remove("monter");
//     }

//     contactModal.style.display = "block"; // Affiche la section contact
//   });

//   // Ajouter un écouteur d'événement pour fermer la modale quand on clique en dehors
//   contactModal.addEventListener("click", e => {
//     if (e.target === contactModal) {
//       contactModal.style.display = "none"; // Masque la section contact
//     }
//   });

//   // Sélectionner le bouton de fermeture
//   const closeModalBtn = document.querySelector(".close-modal");

//   // Ajouter un écouteur d'événement pour fermer la modale lorsqu'on clique sur le bouton de fermeture
//   closeModalBtn.addEventListener("click", () => {
//     contactModal.style.display = "none";
//   });
// });

// document
//   .getElementById("openContact")
//   .addEventListener("click", function(event) {
//     event.preventDefault(); // Empêche le comportement par défaut du lien
//     document.querySelector(".contact").style.display = "block"; // Affiche la boîte modale
//   });
/////////////////////////////////////////////////////////////////////////////////////////////////
