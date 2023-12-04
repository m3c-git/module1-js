/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

Implémenter le code du célèbre jeu de chifoumi.

Règles :
- Feuille gagne contre Pierre : La feuille enveloppe la pierre
- Pierre gagne contre Ciseaux : La pierre détruit les ciseaux
- Ciseaux gagne contre Feuille : Les ciseaux coupent la feuille

Algorithme à implémenter :
- Choix aléatoire de l'ordinateur entre : feuille / pierre / ciseaux
- Demander à l'utilisateur son choix entre : feuille / pierre / ciseaux
- Déterminer le vainqueur (égalité si l'ordinateur et le joueur ont choisi la même chose)
- Afficher le vainqueur

*/
/**************************************************************/
/*                         Variables                          */
/**************************************************************/

let randomChoice = Math.ceil(Math.random() * 3); // Retourne un nombre aléatoire entre 1 et 3

// Les variables à mettre ici...
const feuille = 1;
const pierre = 2;
const ciseaux = 3;
let computerChoice =""
if(randomChoice === 1){
    computerChoice = "feuille"
}

if(randomChoice === 2){
    computerChoice = "pierre"
}

if(randomChoice === 3){
    computerChoice = "ciseaux"
}
/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Le code du programme à écrire ici...

let choiceUser = prompt("Choisissez entre feuille, pierre ou ciseaux !");
while(choiceUser !== "feuille" && choiceUser !== "pierre" && choiceUser !== "ciseaux"){
    alert(choiceUser);
    choiceUser = prompt("Choisissez en feuille, pierre ou ciseaux !");
}

if(computerChoice === "feuille" && choiceUser === "pierre"){
    alert("Vous avez perdu !!!")
}

if(computerChoice === "pierre" && choiceUser === "ciseaux"){
    alert("Vous avez perdu !!!")
}

if(computerChoice === "ciseaux" && choiceUser === "feuille"){
    alert("Vous avez perdu !!!")
}



if(choiceUser === "feuille" && computerChoice  === "pierre"){
    alert("Vous avez gagné !!!")
}

if(choiceUser === "pierre" && computerChoice  === "ciseaux"){
    alert("Vous avez gagné !!!")
}

if(choiceUser === "ciseaux" && computerChoice  === "feuille"){
    alert("Vous avez gagné !!!")
}



if(choiceUser === "feuille" && computerChoice  === "feuille"){
    alert("Egalité")
}

if(choiceUser === "pierre" && randomChoice  === "pierre"){
    alert("Egalité")
}

if(choiceUser === "ciseaux" && randomChoice  === "ciseaux"){
    alert("Egalité")
}
