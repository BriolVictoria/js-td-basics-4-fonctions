/*****************************
 * 021 - Function Statements and Expressions
 */

/*
1. Déclarez, en utilisant une fonction expression, la fonction whatDoYouDo
   prenant deux paramètres, job et firstName. Cette fonction retourne le prénom suivi
   d'une phrase qui décrit le job de la personne pour différents cas de job :
   - si c'est teacher, "teaches kids how to code"
   - si c'est driver, "drives a cab in Lisbon"
   - si c'est designer, "designs beautiful websites"
   - dans tous les autres cas, "does something else"
*/
/*
const whatDoYouDo = function (job, firstName) {
    console.log(`${firstName} est ${job}`);
    // Utilisez des conditions (if/else if) pour décrire le job de la personne en fonction de la valeur de 'job'.
    // Renvoyez la phrase appropriée en utilisant un return.
    if (job === "teacher") {
        return "teaches kids how to code";
    } else if (job === "driver") {
        return "drives a cab in Lisbon";
    } else if (job === "designer") {
        return "designs beautiful websites";
    } else {
        return "does something else";
    }
}


/!*
2. Utilisez cette fonction pour afficher dans la console ce que font :
    - John (teacher)
    - Jane (designer)
    - Mark (retired)
*!/
console.log(whatDoYouDo("teacher", "John"));
console.log(whatDoYouDo("designer", "Jane"))
console.log(whatDoYouDo("retired", "Mark"))*/

const films=['Le loup de Wall Street', 'Vice Versa', 'Babystting']

console.table(films);

const movies= {
    film1: 'Le loup de Wall Street',
    film2: 'Vice Versa',
    film3: 'Babystting',
    print() {
        console.log(this.film1);
    },
}; // tableau associatif car on va associé une clé à une valeur, mais c'est quand même un objet car on a des propriétés, on peut déclarer une fonction à l'intérieur d'un objet. On peut avoir des méthodes (print) dans des tabeleaux associatif. film1, film2,... => propriétés. On ne peut pas faire de boucles dans notre trucs.

console.table(movies);



/*const test1 = 16;
const test2 = 10;
const test3 = 12;

const tests = [16, 10, 12];
tests.push(20);
console.table(tests);
// on a déclaré un tableau, tant qu'on a pas écrit cela on a pas fait de tableau (new Array) => initialiser des tableaux. Au minimum un tableau vide. [16, 10, 12]; => tableau indicé

for (let i = 0; i < tests.length ; i++) {
    console.log(tests[i]);
}*/

/*
function moyenne(tests) {
    let somme = 0;

    /!*    for (let i = 0; i < tests.length; i++) {
            somme += tests [i];
        }
        *!/
    for (const test of tests) {
        somme += tests
    }

   /!* tests.forEach((item) => {
        somme += item
    });
*!/
    return somme / tests.length;
}

const tests = [12, 11, 14, 20];

console.log(moyenne(tests));*/



