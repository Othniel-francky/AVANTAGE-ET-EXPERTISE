function showInfo(number) {
    // Elements for the Message and Documents sections
    const messageContent = document.getElementById("message-content");
    const documentList = document.getElementById("document-list");

    // Data for each section based on the selected number
    const data = {
        1: {
            message: `
                Décret 478 du 16 mai 2007 Obligation d'Assurance Locale en Côte d'Ivoire. 
                La garantie couvre la marchandise du magasin export du fournisseur au magasin import de l'acheteur. 
                Les garanties sont: FAP sauf ou tout risque ou risques exceptionnels. 
                Les valeurs assurées = CFR ou CIF ou 1,2CFR ou 1,1CIF ou 0,95CIF. 
                Les polices d'assurance sont des contrats : la police au voyage, la police à alimenter, la police d'abonnement, la police tiers chargeur. 
                NB: En maritime pas de majoration, en aérien majoration de 7% de la prime, en terrestre une majoration de 14,5% de la prime. 
                La prime d'assurance = valeur assurée x taux de prime + les frais accessoire (2500 F CFA).
            `,
            documents: [
                "Facture définitive donnant la valeur des marchandises",
                "Facture fret donnant la valeur du fret international"
            ]
        },
        2: {
            message: `
                Autres informations et conseils pertinents relatifs à la situation d'avaries à destination sur les marchandises.
            `,
            documents: [
                "Document requis pour les cas d'avaries",
                "Rapport d'évaluation des dommages"
            ]
        }
    };

    // Update the content based on the selected number
    messageContent.innerHTML = data[number].message;
    documentList.innerHTML = data[number].documents.map(item => `<li>${item}</li>`).join("");

    // Display the sections
    document.getElementById("message-conseils").style.display = "block";
    document.getElementById("documents-fournir").style.display = "block";
}
