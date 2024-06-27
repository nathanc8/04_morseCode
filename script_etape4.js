const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

const morseToLatin = {
   '-': "T",
   '--': "M",
   '---': "O",
   '--.': "G",
   '--.-': "Q",
   '--..': "Z",
   '-.': "N",
   '-.-': "K",
   '-.--': "Y",
   '-.-.': "C",
   '-..': "D",
   '-..-': "X",
   '-...': "B",
   '.': "E",
   '.-': "A",
   '.--': "W",
   '.---': "J",
   '.--.': "P",
   '.-.': "R",
   '.-..': "L",
   '..': "I",
   '..-': "U",
   '..-.': "F",
   '...': "S",
   '...-': "V",
   '....': "H"
 }

//étape 1
//transforme une chaine de caractères en tableau. Pourrait être fait plus simplement :
function getLatinCharacterList(text) {
   //Utilisation de la méthode split pour diviser le texte en un tableau de caractères
   //console.log(text.split(''))
   return text.split('');
 }

/*function getLatinCharacterList2(text) {
   const characters = [];
   for (let i=0; i < text.length; i++) {
      characters.push(text[i]);
   }
   console.log(characters);
   return characters; 
}*/

//étape 2 : traduire un caractère en morse
function translateLatinCharacter(dictionnary, character) {
   console.log(dictionnary[character]);
   return (dictionnary[character]);
}
//translateLatinCharacter(latinToMorse,'V');

/*étape 3 : ajouter une nouvelle fonction `encode` qui prend en paramètre du texte et qui va utiliser la fonction de l’étape 1
pour chaque caractère, appliquer la fonction de l’étape 2 et ainsi récupérer son équivalent morse.*/
function encode(dictionnary, textToEncode) {
   textToEncode = textToEncode.toUpperCase();
   let latinWord = getLatinCharacterList(textToEncode);
   let morseTrad = [];
   for (let i = 0; i < textToEncode.length; i++) {
      if (latinWord[i] == ' ') {
         console.log('espace detecte')
         morseTrad.push(' / ')
      } else {
         //console.log(`loop ${i} active`);
         console.log (latinWord[i])
         morseTrad.push(translateLatinCharacter(dictionnary, latinWord[i]));
      }
   }
   console.log(morseTrad);
   return morseTrad;
}

//encode(latinToMorse,'Hello World');

//étape 4 : fonction getMorseCharacterList & fonction translateMorseCharacter
function getMorseCharacterList(text) {
   let morseList = [];
  for (let i = 0 ; i < text.length ; i++) {
   let morseCharacter = '';
   if (text[i] == ' / ') {
      morseList.push(' / ');
      i++;
   } else {
      while (i < text.length && text[i] != ' ') {
         //console.log(`while loop ${i} entered`);
         morseCharacter += text[i];
         //console.log(`morseCharacter is ${morseCharacter}`);
         i++;
      }
   }
   morseList.push(morseCharacter);
   //console.log(morseList);
  }
  //console.log(morseList);
  return morseList;
}

//getMorseCharacterList('.... . .-.. .-.. --- / .-- --- .-. .-.. -..');

function translateMorseCharacter(dictionnary, character) {
   let latinCharacter;
   if (character == '/') {
      latinCharacter = ' ';
   } else {
      latinCharacter = (dictionnary[character]);
   }
   console.log(latinCharacter);
   return latinCharacter;
}

//translateMorseCharacter(morseToLatin, '/');

//étape 4 : fonction decode (donc morse vers latin)
function decode (dictionnary, textToDecode) {
   let morseWord = getMorseCharacterList(textToDecode);
   console.log(morseWord)
   let latinTrad = [];
   for (let i = 0 ; i < morseWord.length ; i++) {
      if (morseWord[i] == ' / ') {
         console.log('espace detecte')
         latinTrad.push(' ');
      } else {
         console.log(morseWord[i]);
         latinTrad.push(translateMorseCharacter(dictionnary, morseWord[i]));
      }
   }
   console.log(latinTrad);
   return latinTrad;
}

decode(morseToLatin,'.... . .-.. .-.. --- / .-- --- .-. .-.. -..')