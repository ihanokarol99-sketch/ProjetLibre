/* =====================================
   PROFIL AI - ANALYSE DU CV
   ===================================== */

// 1. Récupérer les réponses enregistrées
const donnees = sessionStorage.getItem("profilAI");

// 2. Vérifier si les réponses existent
if (donnees !== null) {

    // Convertir le texte JSON en objet JavaScript
    const profil = JSON.parse(donnees);

    // 3. Afficher les informations du candidat

    document.getElementById("resultat-poste").textContent =
        profil.poste || "Non renseigné";

    document.getElementById("resultat-experience").textContent =
        profil.experience || "Non renseignée";

    document.getElementById("resultat-secteur").textContent =
        profil.secteur || "Non renseigné";

    document.getElementById("resultat-pays").textContent =
        profil.pays || "Non renseigné";

}