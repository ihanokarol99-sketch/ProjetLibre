/* =====================================
   PROFIL AI - CONSEILS DE CARRIÈRE
   ===================================== */

// 1. Récupérer les réponses du questionnaire

const donnees = sessionStorage.getItem("profilAI");

// 2. Vérifier si les données existent

if (donnees !== null) {

    // Convertir les données JSON
    const profil = JSON.parse(donnees);

    // 3. Afficher le poste recherché

    document.getElementById("carriere-poste").textContent =
        profil.poste || "Non renseigné";

    // 4. Afficher le niveau d'expérience

    document.getElementById("carriere-experience").textContent =
        profil.experience || "Non renseignée";

    // 5. Afficher le secteur professionnel

    document.getElementById("carriere-secteur").textContent =
        profil.secteur || "Non renseigné";

    // 6. Afficher le pays recherché

    document.getElementById("carriere-pays").textContent =
        profil.pays || "Non renseigné";

}