/*
FONCTIONS - PRÉPA 4 : Date valide - version 2
Écrire un programme JS qui teste si une date entrée par l'utilisateur est une date valide ou pas
- Déclarez deux fonctions :
  - isBissextile retourne true ou false selon que l'année est bissextile ou pas
  - isValid retourne true ou false selon que la date est valide ou pas
- Utilisez isBissextile dans isValid pour gérer le cas du mois de février
- Utilisez isValid pour décider si votre date est valide
  avant d'afficher votre message dans la console
*/

//1. Vérifier si on a des nombres pour le J, M, A
//2. Regarder si les nombres sont positifs
//3. Tester si les mois sont entre 1 et 12
//4. tester si les jours sont dans les bonnes plages

function isBissextile(year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    }
    if (year % 400 === 0) {
        return true;
    }
    return false;
}

console.log(isBissextile(2023));

function getMaxDayPerMonth(month, year) {
    if (isNaN(month) || month < 1 || month > 12 || isNaN(year) || year < 1) {
        console.error("Month must be [1-12]");
        console.error("Month must be >0");
        return -1;
    }

    let maxDays = 31;
    switch (month) {
        case 4:
        case 6:
        case 9:
        case 11:
            maxDays = 30;
            break;
        case 2:
            maxDays = 28;
            if (isBissextile(year) === true) {
                maxDays = 29;
            } else {
                maxDays = 29;
            }
    }

    return maxDays;
}


function isValid(day, month, year) {
    let maxDays = 31;

    if (isNaN(day) || isNaN(month) || isNaN(year) || day <= 0 || month <= 0 || year <= 0 || month > 12) {
        return false
    }

    switch (month) {
        case 4:
        case 6:
        case 9:
        case 11:
            maxDays = 30;
            break;
        case 2:
            maxDays = 28;
            if (isBissextile(year) === true) {
                maxDays = 29;
            } else {
                maxDays = 29;
            }
    }

    return day > 0 && day <= getMaxDayPerMonth(month, year);
}

console.log(isValid(8, 12, 2023));


// Fonction pour vérifier si une année est bissextile


// Fonction pour vérifier si une date est valide


// Demander à l'utilisateur de saisir une date


// Utilisation de la fonction isValid pour vérifier la date

