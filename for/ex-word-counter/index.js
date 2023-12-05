/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

L'objectif de cet exercice est de compter les mots commençant
par la lettre "s".

Exemple d'algorithme (pour t'aider) :
- Parcourir la liste de mots
  - Vérifier si la première lettre est égale à s
    - Si oui, incrémente le compteur

- Affiche le nombre de mots commençant par s
NOTE : En javascript, une chaine de caractères est considérée comme un tableau de caractères
Par exemple : "TODO" == ["T", "O", "T", "O"]

*/
/**************************************************************/
/*                            Data                            */
/**************************************************************/

// DO NOT EDIT

let liste_mots = ['sapin', 'bougie', 'sucre', 'soleil', 'alphabet', 'trousse'];
let nbr = 0

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Le code sera implémenté ici...

for(let liste of liste_mots){
  if(liste.charAt(0) === 's'){
    nbr++
}
}
console.log(nbr)
