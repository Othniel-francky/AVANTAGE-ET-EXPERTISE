function showInfo(number) {
    // Récupérer les éléments des sections
    const messageSection = document.getElementById("message-conseils");
    const documentsSection = document.getElementById("documents-fournir");
    const messageContent = document.getElementById("message-content");
    const documentList = document.getElementById("document-list");

    // Données pour chaque bouton
    const data = {
        1: {
            message: `
                .
            `,
            documents: [
                "Facture définitive donnant la valeur des marchandises",
                "Titre de transport BL LTA LV ou connaissement ",
                "Lettre de prise de reserve ", 
                "Certificat d'assurance",
                "Note de poids",
                "Liste de colisage",
                "Rapport d'expertise, le certificat definitif de pertes etc ...",
                "Avec le justificatifs de la conservation des recours (Bordereau de livraison avec réserves, courriers de protestation, Reponse des transporteurs);"
            ],
            sectionToShow: messageSection
        },
        2: {
            message: `
                Autres informations et conseils pertinents relatifs à la situation d'avaries à destination sur les marchandises.
            `,
            documents: [
                "Prendre des reserves sur l'etat des marchandises afin de conserver les droits et recours de l'assureur",
                "Requerir l'expert maritime indiquer sur le certificat d'assurance dans un delais de 30 jours",
                "NB: Ne sont Garantis que les dommages et pertes materiels ainsi que les pertes de pois ou de quantité subis par les facultées assurées",
                "Suite a l'expertise présenter le dossier de reclamation a l'assureur ou au courtier dans un délais d'un ans",
                "L'indemnité du par les assureurs est payable dans les 30 jours de la remise du dossier complet avec les pièces justifictatives du dommage",
                "Convoquez les différentes parties par lettres recommandées a l'expertise amiable ou invitez l'expert a le faire afin de déterminer le taux d'avaries et le niveau de responsabilités"
            ],
            sectionToShow: documentsSection
        }
    };

    // Cacher toutes les sections
    messageSection.style.display = "none";
    documentsSection.style.display = "none";

    // Mettre à jour les contenus
    if (number === 1) {
        messageContent.innerHTML = data[1].documents.map(item => `<li>${item}</li>`).join("");
        data[1].sectionToShow.style.display = "block"; // Afficher la section message
    } else if (number === 2) {
        documentList.innerHTML = data[2].documents.map(item => `<li>${item}</li>`).join("");
        data[2].sectionToShow.style.display = "block"; // Afficher la section documents
    }
}
