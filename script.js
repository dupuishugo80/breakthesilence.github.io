$(document).ready(function () {
  // Fermez toutes les sous-catégories au chargement de la page
  $(".subcategories").hide();
  $(".subcategory-text").hide();
  $(".organizationalChart-images").hide();

  // Gestion de l'ouverture/fermeture des sous-catégories lors du clic sur les catégories principales
  $(".category-button").click(function () {
    $(".organizationalChart-images").hide();
    const subcategories = $(this).next(".subcategories");
    $(".subcategories").not(subcategories).hide(); // Fermer les autres sous-catégories
    subcategories.slideToggle();
  });

  // Gestion de l'affichage du texte sous la sous-catégorie cliquée
  $(".subcategory-button").click(function () {
    $(".organizationalChart-images").hide();

    const text = $(this).next(".subcategory-text");
    $(".subcategory-text").not(text).hide(); // Fermer les autres texte de sous-catégories
    text.slideToggle();
  });

  // Gestion de l'affichage de l'organigramme
  $(".organizationalChart-button").click(function () {
    $(".subcategories").hide();
    $(".subcategory-images").hide();

    const organizationalChart = $(this).next(".organizationalChart-images");
    $(".organizationalChart-images").not(organizationalChart).hide(); // Fermer les autres texte de sous-catégories
    organizationalChart.slideToggle();
  });
});
