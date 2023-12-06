/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

// Voici une collection : cad un tableau d'objets de même type
// Tu vois la syntaxe ?

let users = [
  {
    nom: "Dupont",
    prenom: "Toto",
    age: 37
  }
];

TODO
- Demander à l'utilisateur de saisir son prenom, nom, age
NOTE : penser à gérer les types de valeurs
- Puis créer un objet (comme celui déjà présent) avec ces 3 éléments
- Enfin, l'ajouter à la collection
- Pour finir, afficher le contenu de la collection

*/
/**************************************************************/
/*                            Data                            */
/**************************************************************/

// DO NOT EDIT

let users = [
  {
    nom: "Dupont",
    prenom: "Toto",
    age: 37
  }
];

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Le code sera implémenté ici...


let prenomUser = prompt("Quel est votre prenom ?").toString();
let nomUser = prompt("Quel est votre nom ?").toString();
let ageUser = prompt("Quel age avez-vous ?");
Number(ageUser)


let newUser = {
  nom: nomUser,
  prenom: prenomUser,
  age: ageUser

}

users.push(newUser)

console.log(users)