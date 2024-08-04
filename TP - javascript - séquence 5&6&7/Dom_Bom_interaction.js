// Fonction pour afficher la largeur et la hauteur de la fenêtre
function displayWindowSize() {
    console.log(`Largeur de la fenêtre : ${window.innerWidth}px`); // Afficher la largeur de la fenêtre
    console.log(`Hauteur de la fenêtre : ${window.innerHeight}px`); // Afficher la hauteur de la fenêtre
}

// Fonction pour rediriger l'utilisateur vers une nouvelle page
function redirectTo(url) {
    window.location.href = url; // Changer l'URL de la fenêtre pour rediriger l'utilisateur
}

// Exemples d'utilisation
displayWindowSize(); // Afficher les dimensions de la fenêtre
addClickListener('redirectButton', 'Redirection en cours...'); // Attacher un gestionnaire d'événements pour rediriger
document.getElementById('redirectButton').addEventListener('click', () => {
    redirectTo('https://www.example.com'); // Rediriger l'utilisateur lorsque le bouton est cliqué
});
