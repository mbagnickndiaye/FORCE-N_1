// Fonction pour valider le formulaire
function validateForm(event) {
    // Empêche l'envoi du formulaire par défaut
    event.preventDefault();

    // Récupère les valeurs des champs
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Récupère les éléments <span> pour afficher les messages d'erreur
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(span => span.textContent = ""); // Réinitialiser les messages d'erreur

    let isValid = true; // Indicateur de validité du formulaire

    // Validation du nom d'utilisateur
    if (username.length < 3) {
        document.querySelector("#username + .error-message").textContent = "Le nom d'utilisateur doit comporter au moins 3 caractères.";
        isValid = false; // Le formulaire n'est pas valide
    }

    // Validation de l'email avec une expression régulière
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.querySelector("#email + .error-message").textContent = "Veuillez saisir un email valide.";
        isValid = false; // Le formulaire n'est pas valide
    }

    // Validation du mot de passe
    if (password.length < 6) {
        document.querySelector("#password + .error-message").textContent = "Le mot de passe doit comporter au moins 6 caractères.";
        isValid = false; // Le formulaire n'est pas valide
    }

    // Si tout est valide, soumettez le formulaire (ou affichez un message de succès)
    if (isValid) {
        alert("Formulaire soumis avec succès !");
        // Vous pouvez décommenter la ligne suivante pour réellement soumettre le formulaire
        // event.target.submit();
    }
}

// Ajoute un gestionnaire d'événements pour la soumission du formulaire
document.getElementById("myForm").addEventListener("submit", validateForm);
