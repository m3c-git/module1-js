/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

L'objectif est de créer un télégraphe.
Cela consiste à convertir un texte alphanumérique en code morse.
Les espaces seront gardés tel quels.

TODO
- Demander à l'utilisateur de saisir un texte à télégraphier
- Convertir le texte en code morse
- Afficher le code morse dans la console

*/
/**************************************************************/
/*                            Data                            */
/**************************************************************/

// DO NOT EDIT

let alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];
let codeMorse = [
  ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..",
  ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.",
  "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----",
  "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.",
  "-----"
];

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Le code sera implémenté ici...

let motUser = prompt("Que voulez-dire en Morse ?")
let morseUSER = [] 

for(let i = 0; i < motUser.length; i++){

  for(let j = 0; j < alphabet.length; j++){
    if(alphabet[j] === motUser[i]){
      morseUSER.push(codeMorse[alphabet.indexOf(alphabet[j])])
    }
  }
}
console.log(morseUSER)
