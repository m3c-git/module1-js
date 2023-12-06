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
removeItem(window.prompt('Quel produit de la liste de courses souhaitez-vous supprimer ?'));
displayShoppingList();

// Etape 3.
removeAllItems();
displayShoppingList();
