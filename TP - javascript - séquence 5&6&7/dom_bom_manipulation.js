// Fonction pour changer la couleur de fond d'un élément
function changeBackgroundColor(elementId, color) {
    const element = document.getElementById(elementId);
    if (element) {
        // Attacher un événement mouseenter pour changer la couleur de fond
        element.addEventListener('mouseenter', () => {
            element.style.backgroundColor = color; // Changer la couleur de fond
        });
        // Attacher un événement mouseleave pour réinitialiser la couleur de fond
        element.addEventListener('mouseleave', () => {
            element.style.backgroundColor = ''; // Réinitialiser la couleur de fond
        });
    } else {
        console.error(`Element with ID ${elementId} not found.`); // Afficher une erreur si l'élément n'est pas trouvé
    }
}

// Fonction pour afficher un message d'alerte lors de la soumission du formulaire
function addFormSubmitAlert(formId, message) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Empêcher le comportement par défaut de soumission
            alert(message); // Afficher un message d'alerte
        });
    } else {
        console.error(`Form with ID ${formId} not found.`); // Afficher une erreur si le formulaire n'est pas trouvé
    }
}

// Exemples d'utilisation
changeBackgroundColor('hoverElement', 'yellow'); // Changer la couleur de fond d'un élément lors du survol
addFormSubmitAlert('myForm', 'Formulaire soumis avec succès !'); // Afficher une alerte lors de la soumission du formulaire
