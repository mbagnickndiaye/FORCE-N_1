// Étape 1 : Types d'erreurs
// Crée une fonction qui génère une division par zéro
function divideByZero() {
    return 1 / 0; // Cette opération génère Infinity
}

// Invoque la fonction et observe l'erreur dans la console
console.log("Résultat de la division par zéro : ", divideByZero());

// Étape 2 : Blocs try...catch
function safeDivideByZero() {
    try {
        // Tente de faire une division par zéro
        let result = divideByZero();
        console.log("Résultat : ", result);
    } catch (error) {
        // Capture l'erreur et affiche un message d'erreur personnalisé
        console.error("Erreur : Division par zéro n'est pas autorisée.", error);
    }
}

// Appelle la fonction entourée de try...catch
safeDivideByZero();

// Étape 3 : Erreurs personnalisées
function checkEmptyString(input) {
    // Vérifie si la chaîne de caractères est vide
    if (input === "") {
        // Génère une erreur personnalisée
        throw new Error("Erreur : La chaîne de caractères ne peut pas être vide.");
    }
    return input;
}

// Appelle la fonction avec différents types d'arguments
try {
    console.log(checkEmptyString("")); // Cela générera une erreur
} catch (error) {
    console.error(error.message); // Affiche le message d'erreur
}

try {
    console.log(checkEmptyString("Texte valide")); // Affiche "Texte valide"
} catch (error) {
    console.error(error.message);
}

// Étape 4 : Expérimentation et utilisation avancée
// Exemple d'une erreur de type ReferenceError
function causeReferenceError() {
    try {
        console.log(nonExistentVariable); // Cela générera une ReferenceError
    } catch (error) {
        console.error("Erreur : " + error.message);
    }
}

causeReferenceError();

// Exemple d'une erreur de type TypeError
function causeTypeError() {
    try {
        let num = null;
        console.log(num.toString()); // Cela générera une TypeError
    } catch (error) {
        console.error("Erreur : " + error.message);
    }
}

causeTypeError();
