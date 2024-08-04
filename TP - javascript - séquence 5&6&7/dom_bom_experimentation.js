// Exemple de manipulation de propriétés et méthodes avancées du DOM et BOM
function advancedDomBomManipulation() {
    // Changer la couleur de texte d'un élément
    const textElement = document.getElementById('textElement');
    if (textElement) {
        textElement.style.color = 'blue'; // Changer la couleur du texte
    }

    // Ajouter une animation simple en modifiant les propriétés CSS
    const animatedElement = document.getElementById('animatedElement');
    if (animatedElement) {
        animatedElement.style.transition = 'transform 0.5s'; // Ajouter une transition CSS
        animatedElement.addEventListener('click', () => {
            animatedElement.style.transform = 'scale(1.5)'; // Agrandir l'élément au clic
            setTimeout(() => {
                animatedElement.style.transform = 'scale(1)'; // Réduire l'élément après 0.5s
            }, 500);
        });
    }
}

// Exemples d'utilisation
advancedDomBomManipulation(); // Appeler la fonction pour manipuler le DOM et le BOM
