/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

Implémenter une fonction qui retourne true si l'année passée en paramètre
est bissextile.

Une année est bisseextile si elle respecte un des 2 critères suivants :
- C1 : Elle est divisible par 4 mais pas par 100
- C2 : Elle est divisible par 400
Autrement dit : pour être bissextile, une année doit dans tous les cas être divisible par 4 ;
mais si c’est une année de centenaire (comme 1800, 1900, etc.), elle doit en complément être divisible par 400.

Si une année ne respecte ni le critère C1 ni le critère C2, l'année n'est pas bissextile :
elle a ainsi la durée habituelle de 365 jours ; on dit alors que c’est une année commune.

// TODO
- Ecrire la fonction isBissextile qui prend en paramètre une année
et qui retourne true si l'année est bissextile, false dans le cas contraire
- Ecrire le programme qui demande à l'utilisateur d'entrer une année
et qui affiche si l'année est bissextile ou non

*/
/**************************************************************/
/*                         Fonctions                          */
/**************************************************************/

// Le code de la fonction à écrire ici...

function isBissextile(annee){

   
    if ((annee % 4 === 0 && annee % 100 > 0) || (annee % 400 === 0)) {
	    alert(annee + " est bissextile");
        return true;
    }
	alert(annee + " n'est pas bissextile");
}



/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Le code du programme à écrire ici...
let annee;
 while(isNaN(annee)){
        
        annee = prompt("Saisisez une annee")
    }

isBissextile(annee);