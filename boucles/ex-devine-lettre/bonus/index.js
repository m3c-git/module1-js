/**************************************************************/
/*                        Consignes                           */
/**************************************************************/
/*

Une fois que le joueur a trouvé la lettre, on lui propose de rejouer.

*/
/**************************************************************/
/*                            Data                            */
/**************************************************************/
// Sélectionne une lettre au hasard dans l'alphabet
let alphabet = "abcdefghijklmnopqrstuvwxyz";

let utilisateur = "";

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Tant que l'utilisateur veut continuer de jouer

  // Sélectionne une lettre au hasard dans l'alphabet (prendre le code de la partie 1)

  // Tant que l'utilisateur n'a pas trouvé la lettre

  // On affiche un message de bravo si l'utilisateur a trouvé la lettre

  // On demande à l'utilisateur si il veut continuer de jouer

 

let rejouer = ""


while(rejouer !== "n"){
  let lettreAtrouver = alphabet.charAt(
    Math.ceil(Math.random() * 26) - 1
  );

  let lettreUser = prompt("Devinez la lettre !")
  while(lettreUser !== lettreAtrouver){
  lettreUser = prompt("Devinez la lettre !")
  alert(lettreAtrouver)
}
if(lettreUser === lettreAtrouver){
  alert("Bravo! " + `${lettreAtrouver}` + " est la bonne lettre")
  rejouer = prompt("Voulez-vous rejouer ? o/n");
}
lettreUser = "";
lettreAtrouver = "";
}
