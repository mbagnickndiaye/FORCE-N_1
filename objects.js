// Étape 1 : Création et manipulation d'objets

// Question : Créez un objet personne qui représente une personne avec des propriétés telles que nom, âge et profession.
// Solution :
let personne = {
    nom: "John",
    age: 30,
    profession: "Développeur",
    // Ajoutez une méthode à l'objet personne qui affiche une introduction basée sur les propriétés.
    introduction: function() {
        console.log(`Bonjour, je m'appelle ${this.nom}, j'ai ${this.age} ans et je suis ${this.profession}.`);
    }
};

// Créez plusieurs instances de l'objet personne avec des valeurs différentes et appelez la méthode d'introduction.
let personne1 = {
    nom: "Alice",
    age: 25,
    profession: "Designer",
    introduction: personne.introduction
};

let personne2 = {
    nom: "Bob",
    age: 40,
    profession: "Manager",
    introduction: personne.introduction
};

// Appel des méthodes d'introduction
personne.introduction(); // Affiche : Bonjour, je m'appelle John, j'ai 30 ans et je suis Développeur.
personne1.introduction(); // Affiche : Bonjour, je m'appelle Alice, j'ai 25 ans et je suis Designer.
personne2.introduction(); // Affiche : Bonjour, je m'appelle Bob, j'ai 40 ans et je suis Manager.


// Étape 2 : Objets Math

// Question : Utilisez l'objet Math pour effectuer des opérations mathématiques telles que l'arrondi, la racine carrée et le calcul de la puissance.
// Solution :
let nombre = 5.67;
console.log(Math.round(nombre)); // Arrondi : 6
console.log(Math.sqrt(16)); // Racine carrée : 4
console.log(Math.pow(2, 3)); // Puissance : 8

// Utilisez l'objet Math pour générer des nombres aléatoires dans une plage spécifiée.
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomBetween(1, 10)); // Nombre aléatoire entre 1 et 10
console.log(randomBetween(20, 30)); // Nombre aléatoire entre 20 et 30


// Étape 3 : Objets Date

// Question : Créez une fonction qui affiche la date et l'heure actuelles en utilisant l'objet Date.
// Solution :
function showCurrentDateTime() {
    let currentDate = new Date();
    console.log(currentDate.toString());
}

showCurrentDateTime(); // Affiche la date et l'heure actuelles

// Utilisez l'objet Date pour calculer la différence entre deux dates et affichez le résultat en jours.
function dateDifference(date1, date2) {
    let diffTime = Math.abs(date2 - date1);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays;
}

let startDate = new Date('2024-01-01');
let endDate = new Date('2024-12-31');
console.log(dateDifference(startDate, endDate)); // Affiche le nombre de jours entre les deux dates


// Étape 4 : Manipulation d'objets String

// Question : Créez une fonction qui prend une chaîne de caractères en tant que paramètre et compte le nombre de caractères qu'elle contient.
// Solution :
function countCharacters(str) {
    return str.length;
}

console.log(countCharacters("Bonjour le monde")); // Affiche 17

// Utilisez les méthodes de l'objet String pour rechercher et remplacer des sous-chaînes dans une chaîne donnée.
function replaceSubstring(str, search, replace) {
    return str.replace(search, replace);
}

let myString = "Bonjour le monde";
console.log(replaceSubstring(myString, "monde", "tout le monde")); // Affiche "Bonjour tout le monde"


// Étape 5 : Expérimentation et utilisation avancée

// Question : Expérimentez en ajoutant de nouvelles propriétés et méthodes à vos objets personnalisés.
// Solution :
personne.nationalite = "Française";
personne1.speak = function() {
    console.log("Hello!");
};

// Ajout de nouvelles méthodes et propriétés
personne.introduction(); // Bonjour, je m'appelle John, j'ai 30 ans et je suis Développeur.
console.log(personne.nationalite); // Affiche : Française
personne1.speak(); // Affiche : Hello!

// Explorez d'autres propriétés et méthodes des objets Math, Date et String pour résoudre des problèmes plus complexes.
// Exemple : Utilisation de Math pour obtenir le minimum et le maximum d'un tableau
let numbers = [10, 20, 5, 30, 25];
console.log(Math.min(...numbers)); // Affiche 5
console.log(Math.max(...numbers)); // Affiche 30

// Exemple : Utilisation de Date pour obtenir le jour de la semaine
let date = new Date();
console.log(date.getDay()); // Affiche le jour de la semaine (0 pour dimanche, 6 pour samedi)

// Exemple : Utilisation de String pour convertir en majuscules et minuscules
let text = "Hello World!";
console.log(text.toUpperCase()); // Affiche "HELLO WORLD!"
console.log(text.toLowerCase()); // Affiche "hello world!"
