/**
*C'est votre anniversaire, vous souhaitez créer un petit programme pour vous aider à gérer la liste de vos invités. Pour placer vos invités lors de cette grande fête, vous allez imprimer leurs prénoms sur de petits cartons. Selon le nombre de caractères du prénom, il vous faudra alors des tailles différentes:

*jusqu'à 6 lettres, ce sont des petits cartons
*de 6 à 8 lettres, ce sont des cartons de taille moyenne
*plus de 8 lettres, ce sont des cartons de grande taille
*En JavaScript, créez un tableau qui contiendra la liste des prénoms de vos invités.

*Puis à l'aide d'une boucle for, parcourez ce tableau et afficher la liste des invités sous forme de liste à puce avec à chaque fois le prénom puis le format du carton nécessaire.


*- Valentin MOYEN
*- Laura PETIT

*Bonus Afficher sous cette liste le nombre de petits cartons, le nombre de moyens et le nombre de grands cartons nécessaires.
 */

const invites = ["ibrahim", "marc", "Mohamed", "abdelkader"]
const listeInvites = []

for(let invite of invites){
    if(invite.length <= 6){
        listeInvites.push(invite + " PETIT")
    }
    else if(invite.length > 6 && invite.length <= 8){
        listeInvites.push(invite + " MOYEN")
    }
    else if(invite.length > 8){
        listeInvites.push(invite + " GRAND")
    }
}
console.log(listeInvites)