// Système de gestion des erreurs

// Fonction pour enregistrer les erreurs dans un journal
function logErrorToServer(error) {
    // Envoi d'une requête POST vers un serveur fictif
    fetch('https://example.com/api/log-error', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ error: error.message, stack: error.stack }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Échec de l\'enregistrement de l\'erreur sur le serveur.');
        }
    })
    .catch(err => {
        console.error('Erreur lors de l\'enregistrement : ', err);
    });
}

// Gestion des erreurs globales
window.onerror = function(message, source, lineno, colno, error) {
    console.error('Erreur capturée :', message);
    // Enregistrement de l'erreur dans le journal
    logErrorToServer(error);
};

// Fonction pour simuler une erreur
function generateError() {
    // Ici nous générons une division par zéro pour provoquer une erreur
    try {
        let result = 1 / 0;
        if (result === Infinity) {
            throw new Error('Division par zéro détectée.');
        }
    } catch (error) {
        console.error('Erreur dans generateError:', error);
        logErrorToServer(error);
        displayErrorMessage(error.message); // Affiche le message d'erreur à l'utilisateur
    }
}

// Fonction pour afficher les messages d'erreur à l'utilisateur
function displayErrorMessage(message) {
    const errorMessageElement = document.createElement('div');
    errorMessageElement.className = 'error';
    errorMessageElement.textContent = message;
    document.body.appendChild(errorMessageElement);
}

// Ajout d'un gestionnaire d'événements pour le bouton
document.getElementById('testButton').addEventListener('click', generateError);
