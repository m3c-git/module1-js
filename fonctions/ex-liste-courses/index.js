'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
// NE PAS TOUCHER

// Liste de courses
const shoppingList = [];


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

// TODO écrire les fonctions requises

function addItem(item){
shoppingList.push(item)
}

function displayShoppingList(){
console.log(shoppingList)
alert(shoppingList)
}

function removeItem(itemToRemove){
    shoppingList.splice(shoppingList.indexOf(itemToRemove), 1);

}

function removeAllItems(){
    /* for(let i = 0; i < shoppingList.length; i++){
        shoppingList.splice(shoppingList.indexOf(i), 1);
    } */
    shoppingList.length = 0;

}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
// NE PAS TOUCHER

// Effacement du contenu de la console, au cas où.
console.clear();

// Etape 1.
addItem('Fraises');
addItem('Poulet');
addItem('Tournevis');
addItem('Artichaut');
displayShoppingList();

// Etape 2.
let itemToRemove = window.prompt('Quel produit de la liste de courses souhaitez-vous supprimer ?');
removeItem(itemToRemove);
displayShoppingList();
console.clear();
// Etape 3.
removeAllItems();
displayShoppingList();
