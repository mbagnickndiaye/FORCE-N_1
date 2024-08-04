// Étape 1 : Création et utilisation de fonctions simples

// Question : Créez une fonction appelée greet qui prend un paramètre name et affiche un message de salutation dans la console.
// Solution :
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Invoquez la fonction greet avec différents noms en tant qu'argument.
greet("Alice");
greet("Bob");
greet("Charlie");

// Étape 2 : Fonctions avec paramètres multiples

// Question : Créez une fonction appelée calculate qui prend trois paramètres : num1, num2 et operator.
// Solution :
function calculate(num1, num2, operator) {
    // Utilisation d'un switch pour déterminer l'opération à effectuer en fonction de l'opérateur
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            // Vérification de la division par zéro
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Error: Division by zero";
            }
        default:
            return "Invalid operator";
    }
}

// Invoquez la fonction calculate avec différentes paires de nombres et opérateurs.
console.log(calculate(10, 5, '+')); // Affiche 15
console.log(calculate(10, 5, '-')); // Affiche 5
console.log(calculate(10, 5, '*')); // Affiche 50
console.log(calculate(10, 5, '/')); // Affiche 2
console.log(calculate(10, 5, '%')); // Affiche "Invalid operator"

// Étape 3 : Fonctions avec valeurs de retour

// Question : Créez une fonction appelée calculateArea qui prend les dimensions d'un rectangle (longueur et largeur) en tant que paramètres et retourne l'aire du rectangle.
// Solution :
function calculateArea(length, width) {
    return length * width;
}

// Invoquez la fonction calculateArea avec différentes dimensions et affichez le résultat.
console.log(calculateArea(10, 5)); // Affiche 50
console.log(calculateArea(7, 3));  // Affiche 21
console.log(calculateArea(12, 8)); // Affiche 96

// Étape 4 : Fonctions imbriquées

// Question : Créez une fonction principale appelée outer qui appelle une fonction imbriquée appelée inner.
// Solution :
function outer() {
    // Définition de la fonction imbriquée inner
    function inner() {
        console.log("Inner function called!");
    }
    // Appel de la fonction inner depuis la fonction outer
    inner();
}

// Invoquez la fonction principale outer pour voir comment les fonctions imbriquées fonctionnent.
outer(); // Affiche "Inner function called!"

// Étape 5 : Expérimentation et utilisation avancée

// Question : Expérimentez avec la portée des variables à l'intérieur et à l'extérieur des fonctions.
// Solution :
let globalVar = "I am a global variable"; // Variable globale

function scopeTest() {
    let localVar = "I am a local variable"; // Variable locale
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}

scopeTest();

console.log(globalVar); // Accessible
// console.log(localVar);  // Non accessible, provoquera une erreur

// Question : Créez une fonction qui génère un nombre aléatoire entre une plage donnée.
// Solution :
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomBetween(1, 10)); // Nombre aléatoire entre 1 et 10
console.log(randomBetween(20, 30)); // Nombre aléatoire entre 20 et 30

// Question : Créez une fonction qui renvoie le plus grand élément d'un tableau.
// Solution :
function findMax(array) {
    return Math.max(...array);
}

console.log(findMax([1, 2, 3, 4, 5])); // Affiche 5
console.log(findMax([10, 9, 8, 7, 6])); // Affiche 10
console.log(findMax([-1, -5, -3, -4, -2])); // Affiche -1
