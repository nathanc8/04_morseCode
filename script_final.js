const latinToMorse = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
};

const morseToLatin = {
    "-": "T",
    "--": "M",
    "---": "O",
    "--.": "G",
    "--.-": "Q",
    "--..": "Z",
    "-.": "N",
    "-.-": "K",
    "-.--": "Y",
    "-.-.": "C",
    "-..": "D",
    "-..-": "X",
    "-...": "B",
    ".": "E",
    ".-": "A",
    ".--": "W",
    ".---": "J",
    ".--.": "P",
    ".-.": "R",
    ".-..": "L",
    "..": "I",
    "..-": "U",
    "..-.": "F",
    "...": "S",
    "...-": "V",
    "....": "H",
};

//étape 1
//transforme une chaine de caractères en tableau. Deux façons de faire
function getLatinCharacterList(text) {
    return text.split(""); //Utilisation de la méthode split pour diviser le texte en un tableau de caractères
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
    //character.toUpperCase(); fait dans l'étape 3
    console.log(dictionnary[character]);
    return dictionnary[character];
}

/*étape 3 : ajouter une nouvelle fonction `encode` qui prend en paramètre du texte et qui va utiliser la fonction de l’étape 1
pour chaque caractère, appliquer la fonction de l’étape 2 et ainsi récupérer son équivalent morse.*/
function encode(dictionnary) {
    let inputText = document.getElementById("textToTranslate");
    let textToEncode = inputText.value;
    textToEncode = textToEncode.toUpperCase();
    let latinWord = getLatinCharacterList(textToEncode);
    let morseTrad = [];
    for (let i = 0; i < textToEncode.length; i++) {
        if (latinWord[i] == " ") {
            morseTrad.push(" / ");
        } else {
            morseTrad.push(translateLatinCharacter(dictionnary, latinWord[i]));
        }
    }
    morseTrad = morseTrad.join(" ");
    document.getElementById(
        "traduction"
    ).innerText = `Here is the traduction : ${morseTrad}`;
    return morseTrad;
}

//étape 4 : fonction getMorseCharacterList & fonction translateMorseCharacter
function getMorseCharacterList(text) {
    let morseList = [];
    for (let i = 0; i < text.length; i++) {
        let morseCharacter = "";
        if (text[i] == " / ") {
            morseList.push(" / ");
            i++;
        } else {
            while (i < text.length && text[i] != " ") {
                morseCharacter += text[i];
                i++;
            }
        }
        morseList.push(morseCharacter);
    }
    return morseList;
}

function translateMorseCharacter(dictionnary, character) {
    let latinCharacter;
    if (character == "/") {
        latinCharacter = " ";
    } else {
        latinCharacter = dictionnary[character];
    }
    return latinCharacter;
}

//étape 4 : fonction decode (donc morse vers latin)
function decode(dictionnary) {
    let inputText = document.getElementById("textToTranslate");
    let textToDecode = inputText.value;
    let morseWord = getMorseCharacterList(textToDecode);
    let latinTrad = [];
    for (let i = 0; i < morseWord.length; i++) {
        if (morseWord[i] == " / ") {
            latinTrad.push(" ");
        } else {
            latinTrad.push(translateMorseCharacter(dictionnary, morseWord[i]));
        }
    }
    latinTrad = latinTrad.join("");
    document.getElementById(
        "traduction"
    ).innerText = `Here is the traduction : ${latinTrad}`;
    return latinTrad;
}
