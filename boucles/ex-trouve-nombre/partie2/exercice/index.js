/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

Jeu : devine le nombre (entre 10 et 100)

Maintenant, le joueur a 10 essais
A chaque essai :
  - S'il trouve, on affiche le nombre de coups qu'il lui a fallu
  - Sinon, on lui affiche le nombre d'essais restants
  (en plus du message "plus grand" / "plus petit")

TODO
- Reprendre le code de la partie 1 et ajouter les éléments précisés ci-dessus.

*/

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/
// Génération d'un nombre aléatoire entre 10 et 100
let nbreATrouver = Math.ceil(Math.random() * 100) + 9;
console.log(nbreATrouver);


// Le code sera implémenté ici...

let nbrUser = 0;
let tours = 9;


while(tours >= 0){
  while(nbrUser !== nbreATrouver){
    nbrUser = parseFloat(prompt("Trouvez le nombre entre 10 et 100"))
    if(nbrUser < nbreATrouver){
      alert("Plus grand. Il vous reste " + `${tours}` + " tours");
      tours--
    }
    else if(nbrUser > nbreATrouver){
      alert("Plus petit. Il vous reste " + `${tours}` + " tours");
      tours--

    }
    else if(isNaN(nbrUser)){
      alert("Vous devez saissir un nombre. Il vous reste " + `${tours}` + " tours");
      tours--
      continue
    }
    else{
      alert("Vous avez Gagné en  " + `${tours}` + " tours");
    } 
  }
}

