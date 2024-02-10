'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const hoverables = document.querySelectorAll('.hoverable');
    const tooltips = document.querySelectorAll('.tooltip');

    hoverables.forEach(function (hoverable, index) {
        hoverable.addEventListener('mouseover', function () {
            // Récupérer les coordonnées du texte survolé
            const rect = hoverable.getBoundingClientRect();
            const x = rect.left + window.scrollX;
            const y = rect.top + window.scrollY;

            // Afficher l'image correspondante
            tooltips[index].style.display = 'block';
            tooltips[index].style.left = x + 650 + 'px';
            tooltips[index].style.top = y - 230 + 'px';
        });

        hoverable.addEventListener('mouseout', function () {
            setTimeout(() => {
                // Cacher l'image lorsque le curseur quitte le textetooltips[index].style.opacity = 0;
                tooltips[index].style.display = 'none';
            }, 250); // Correspond à la durée de l'animation en millisecondes
        });
    });
});
