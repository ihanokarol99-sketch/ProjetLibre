/* =====================================
   PROFIL AI - TÉLÉVERSEMENT DU CV
   ===================================== */

// 1. Récupérer les éléments HTML

const cvFile = document.getElementById("cv-file");
const fileName = document.getElementById("file-name");
const fileMessage = document.getElementById("file-message");
const continueBtn = document.getElementById("continue-btn");

// 2. Taille maximale du fichier : 5 Mo

const maxSize = 5 * 1024 * 1024;

// 3. Détecter la sélection d'un fichier

cvFile.addEventListener("change", function () {

    const file = cvFile.files[0];

    // Réinitialiser les messages et le bouton

    continueBtn.disabled = true;
    fileMessage.textContent = "";
    fileMessage.className = "";

    // Vérifier si un fichier a été sélectionné

    if (!file) {
        fileName.textContent = "Aucun fichier sélectionné";
        return;
    }

    // 4. Vérifier le format PDF

    const isPdf =
        file.name.toLowerCase().endsWith(".pdf") &&
        (file.type === "application/pdf" || file.type === "");

    if (!isPdf) {
        fileName.textContent = file.name;

        fileMessage.textContent =
            "Erreur : veuillez sélectionner un fichier PDF.";

        fileMessage.className = "error";
        return;
    }

    // 5. Vérifier la taille du fichier

    if (file.size > maxSize) {
        fileName.textContent = file.name;

        fileMessage.textContent =
            "Erreur : le fichier dépasse la limite de 5 Mo.";

        fileMessage.className = "error";
        return;
    }

    // 6. Le fichier a été accepté

    fileName.textContent = file.name;

    fileMessage.textContent =
        "Votre CV a été sélectionné avec succès !";

    fileMessage.className = "success";

    // Activer le bouton Continuer

    continueBtn.disabled = false;

});

// 7. Gérer le bouton Continuer

continueBtn.addEventListener("click", function () {

    if (!continueBtn.disabled) {

        alert(
            "CV sélectionné avec succès ! " +
            "Prochaine étape : le questionnaire professionnel."
        );

    }

});
S