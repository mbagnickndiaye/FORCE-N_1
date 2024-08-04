// Attendre que le contenu du DOM soit entièrement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', () => {
    const projectForm = document.getElementById('projectForm'); // Récupérer le formulaire de projet
    const projectList = document.getElementById('projectList'); // Récupérer la liste des projets
    const measurePerformanceButton = document.getElementById('measurePerformance'); // Récupérer le bouton de mesure des performances
    const performanceResults = document.getElementById('performanceResults'); // Récupérer la div pour afficher les résultats de performance

    projectForm.addEventListener('submit', addProject); // Attacher l'événement de soumission du formulaire
    measurePerformanceButton.addEventListener('click', measurePerformance); // Attacher l'événement de clic pour mesurer les performances

    // Fonction pour ajouter un projet à la liste
    function addProject(event) {
        event.preventDefault(); // Empêcher le comportement par défaut de soumission
        const projectName = document.getElementById('projectName').value; // Récupérer le nom du projet
        const startDate = document.getElementById('startDate').value; // Récupérer la date de début
        const endDate = document.getElementById('endDate').value; // Récupérer la date de fin prévue

        const projectItem = document.createElement('li'); // Créer un nouvel élément de liste
        projectItem.textContent = `Projet: ${projectName}, Début: ${startDate}, Fin prévue: ${endDate}`; // Définir le texte de l'élément

        projectList.appendChild(projectItem); // Ajouter l'élément à la liste des projets
        projectForm.reset(); // Réinitialiser le formulaire
    }

    // Fonction pour mesurer les performances
    function measurePerformance() {
        const startTime = performance.now(); // Capturer le temps de départ

        // Simuler une tâche pour mesurer les performances
        for (let i = 0; i < 1000000; i++) {}

        const endTime = performance.now(); // Capturer le temps de fin
        const duration = endTime - startTime; // Calculer la durée

        performanceResults.textContent = `Temps d'exécution: ${duration.toFixed(2)}ms`; // Afficher la durée dans la div de résultats
    }
});
