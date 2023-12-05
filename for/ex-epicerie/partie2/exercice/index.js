/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/* 
Epicerie - Variante de la partie 1

On propose au client d'acheter un article tant qu'il y en a de disponibles

// TODO
Tant qu'il reste des articles différent de '',
exécuter le programme de la partie 1

*/
/**************************************************************/
/*                            Data                            */
/**************************************************************/

// DO NOT EDIT

const articles = [
  'Chips',
  'Saucisson',
  'Glace',
  'Fraises',
  'Vin',
  'Sucre',
  'Bière',
  'Mouchoirs'
];
let test = ["test"]
console.log(test.length)
/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Le code sera implémenté ici...


let i;


for(i = 0; articles.length > 0; i++)
{
  let choixClient = prompt(`Voici la liste des produits disponible ${articles}. Quesouhaitez-vous achetez ?`);
  
  if(articles.includes(choixClient)){
    alert("ok")    
    articles.splice(articles.indexOf(choixClient), 1)
    console.log(articles);
  }
  else{
    alert("article indisponible")
  }

}


