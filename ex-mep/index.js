
/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

const jour = prompt("Quel est le jour de la semaine ?");
const hasAstreinte = confirm("Y a-t-il une astreinte ?");
const testCheck = confirm("Les tests sont-ils passés avec succès ? O/N");
const testRecette = confirm("La recette est-elle passée avec succès ? O/N");


    if ( (jour === 'jeudi' || jour === 'vendredi') && ! hasAstreinte ) {
        console.log("Pas de MEP en fin de semaine !");
      } else {
        if (testCheck && testRecette){
            console.log("MEP Autorisée");
            }
            else{
                console.log("Vueillez effectuer les corrections et rééssayez");
            }
    }
      