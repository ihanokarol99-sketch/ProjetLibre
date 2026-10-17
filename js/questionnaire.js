/* =====================================
   PROFIL AI - QUESTIONNAIRE
   ===================================== */

// 1. Récupérer le formulaire

const formulaire = document.getElementById(
    "questionnaire-form"
);

const message = document.getElementById(
    "questionnaire-message"
);


// 2. Détecter l'envoi du formulaire

formulaire.addEventListener("submit", function (event) {

    // Empêcher le rechargement de la page
    event.preventDefault();

    // 3. Récupérer les réponses

    const poste = document.getElementById("poste").value.trim();

    const experience = document.getElementById("experience").value;

    const secteur = document.getElementById("secteur").value;

    const objectif = document.getElementById("objectif").value;

    const formation = document.querySelector(
        'input[name="formation"]:checked'
    );

    const pays = document.getElementById("pays").value.trim();


    // 4. Vérifier les réponses

    if (
        poste === "" ||
        experience === "" ||
        secteur === "" ||
        objectif === "" ||
        formation === null ||
        pays === ""
    ) {
        message.textContent =
            "Veuillez répondre à toutes les questions.";
        return;
    }


    // 5. Regrouper les informations

    const profil = {
        poste: poste,
        experience: experience,
        secteur: secteur,
        objectif: objectif,
        formation: formation.value,
        pays: pays
    };


    // 6. Enregistrer les réponses temporairement

    sessionStorage.setItem(
        "profilAI",
        JSON.stringify(profil)
    );


    // 7. Afficher un message de confirmation

    message.textContent =
        "Vos réponses ont été enregistrées avec succès !";


    // 8. Afficher une confirmation

    window.location.href = "analyse.html";
    

});