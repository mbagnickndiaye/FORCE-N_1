// Fonction pour sélectionner un élément par son ID et modifier son contenu
function changeContentById(id, newText) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = newText; // Modifier le contenu texte de l'élément
    } else {
        console.error(`Element with ID ${id} not found.`); // Afficher une erreur si l'élément n'est pas trouvé
    }
}

// Fonction pour ajouter un nouvel élément à un élément existant
function addElement(parentId, tag, text) {
    const parent = document.getElementById(parentId);
    if (parent) {
        const newElement = document.createElement(tag); // Créer un nouvel élément
        newElement.textContent = text; // Ajouter du texte au nouvel élément
        parent.appendChild(newElement); // Ajouter le nouvel élément au parent
    } else {
        console.error(`Parent element with ID ${parentId} not found.`); // Afficher une erreur si le parent n'est pas trouvé
    }
}

// Fonction pour attacher un gestionnaire d'événements à un bouton
function addClickListener(buttonId, message) {
    const button = document.getElementById(buttonId);
    if (button) {
        button.addEventListener('click', () => {
            console.log(message); // Afficher un message dans la console lorsque le bouton est cliqué
        });
    } else {
        console.error(`Button with ID ${buttonId} not found.`); // Afficher une erreur si le bouton n'est pas trouvé
    }
}

// Exemples d'utilisation des fonctions
changeContentById('myElement', 'Nouveau contenu');
addElement('myContainer', 'p', 'Ceci est un nouvel élément.');
addClickListener('myButton', 'Le bouton a été cliqué !');
