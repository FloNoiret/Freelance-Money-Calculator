function CalculGain(){
    
    //On récupère le formulaire de l'html
    let myform = document.getElementById("formCalculGain");

    // On le transform en objet FormData
    let formObj = new FormData(myform);

    // On récup les inputs selon leur nom
    let tauxHoraire = formObj.get('th');
    let tauxJournalier = formObj.get('tjm');
    let extra = formObj.get('extra');

    let qtetauxHoraire = formObj.get('qteth');
    let qtetauxJournalier = formObj.get('qtetjm');
    let qteextra = formObj.get('qteextra');
    let charges = formObj.get('charges');

    // On commence le calcul
    let gainHeure = tauxHoraire * qtetauxHoraire;
    let gainJour = tauxJournalier * qtetauxJournalier;
    let gainExtra = extra * qteextra;

    let totalBrut = gainHeure + gainJour + gainExtra;

    let chargeADeduire= (totalBrut * (charges/100)); 
    let totalNet = totalBrut - chargeADeduire; 

    document.getElementById("resultatBrut").innerText = totalBrut + " Euros";
    document.getElementById("resultatDifference").innerText = totalNet + " Euros";
    document.getElementById("resultatNet").innerText = totalNet + " Euros";
    
}
