/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

Jeu : devine le nombre (entre 10 et 100)

- Un nombre entre 10 et 100 est choisi aléatoirement

- Tant que le joueur n'a pas trouvé le nombre
  - Demander au joueur de saisir un nombre :
    - S'il est plus petit que le nbre à trouver
    afficher "Plus grand"
    - S'il est plus grand que le nbre à trouver
    afficher "Plus petit"
    - S'il a trouvé, afficher "Gagné" et arrêter le jeu

IMPORTANT : Gérer le cas où l'utilisateur saisi autre chose qu'un nombre

*/

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Génération d'un nombre aléatoire entre 10 et 100
let nbreATrouver = Math.ceil(Math.random() * 100) + 9;
console.log(nbreATrouver)
// Le code sera implémenté ici...

let nbrUser = 0;

while(nbrUser ==! nbreATrouver){
  nbrUser = parseFloat(prompt("Trouvez le nombre entre 10 et 100"))
  console.log(nbrUser)
  if(nbrUser < nbreATrouver){
    alert("Plus grand");
  }
  else if(nbrUser > nbreATrouver){
    alert("Plus petit");
  }
  else if(isNaN(nbrUser)){
    alert("Vous devez saissir un nombre");
    continue
  }
  else{
    alert("Gagné");
  }
  
}

