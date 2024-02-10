'use strict';


// document.addEventListener('DOMContentLoaded', function () {
//     const hoverables = document.querySelectorAll('.hoverable');
//     const tooltips = document.querySelectorAll('.tooltip');

//     hoverables.forEach(function (hoverable, index) {
//         hoverable.addEventListener('mouseover', function () {
//             // Récupérer les coordonnées du texte survolé
//             const rect = hoverable.getBoundingClientRect();
//             const x = rect.left + window.scrollX;
//             const y = rect.top + window.scrollY;

//             // Afficher l'image correspondante
//             tooltips[index].style.display = 'block';
//             tooltips[index].style.left = x + 650 + 'px';
//             tooltips[index].style.top = y - 230 + 'px';
//         });

//         hoverable.addEventListener('mouseout', function () {
//             setTimeout(() => {
//                 // Cacher l'image lorsque le curseur quitte le textetooltips[index].style.opacity = 0;
//                 tooltips[index].style.display = 'none';
//             }, 300); // Correspond à la durée de l'animation en millisecondes
//         });
//     });
// });
const arrayAudio = document.querySelectorAll('.audio');


document.addEventListener('DOMContentLoaded', function () {
    const hoverables = document.querySelectorAll('.hoverable');
    const tooltips = document.querySelectorAll('.tooltip');

    document.addEventListener('mousemove', function (e) {
        tooltips.forEach(function (tooltip, index) {
            if (tooltip.style.display === 'block') {
                const x = e.clientX;
                const y = e.clientY;

                tooltip.style.left = x + 'px';
                tooltip.style.top = y + 'px';
            }
        });
    });

    var audioActuel = null;

    // Ajout d'un écouteur d'événement pour chaque texte
    hoverables.forEach(function (item, index) {
        item.addEventListener('mouseover', function () {
            // Si un audio était en cours de lecture, l'arrêter
            if (audioActuel !== null) {
                audioActuel.pause();
                audioActuel.currentTime = 0;
            }
            // Démarrer la lecture de l'audio correspondant à l'index actuel
            audioActuel = arrayAudio[index];
            audioActuel.play();
        });
        item.addEventListener('mouseout', function () {
            audioActuel.pause();
            audioActuel.currentTime = 0;
        })
    });

    hoverables.forEach(function (hoverable, index) {
        hoverable.addEventListener('mouseover', function () {
            // Afficher l'image correspondante avec une animation de fondu
            tooltips[index].style.display = 'block';
        });
        hoverable.addEventListener('mouseout', function () {
            // Cacher l'image avec une animation de fondu lorsque le curseur quitte le texte
            setTimeout(() => {
                tooltips[index].style.display = 'none';
            }, 300); // Correspond à la durée de l'animation en millisecondes
        });
    });
});