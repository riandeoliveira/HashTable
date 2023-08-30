const fs = require("fs");

const m = 10;
const hashTable = [];
const hashList = [];
const words = [];

for (let i = 0; i < m; i++) {
  hashTable.push(null);
}

// 1. ler o arquivo de texto
// 2. cada palavra como um item de um array
// 3.

// Retorna o conteúdo de um arquivo de texto em uma string
function readFileContent() {
  const content = fs.readFileSync("./tinytale.txt", "utf8", (error, data) => {
    if (error) {
      console.error(error);

      return;
    }

    return data;
  });

  return content;
}

function hashTableInsert(hash) {
  if (hash === hashTable.length - 1) {
    hash === hashTable.length - 1 && hashTable.length - 1 !== null
  }

  if (hashTable[hash] === null) {
    hashTable[hash] = "asd";
  } else if (hash !== hashTable.length) {
    hash++;

    hashTableInsert(hash);
  }
}

const fileContent = readFileContent();
const fileArray = fileContent.trim().split(/\s+/);

// Retorna a posição de uma letra no alfabeto
function getAlphabetPositionLetter(letter) {
  return letter.charCodeAt(0) - 97 + 1;
}

for (let index = 0; index < fileArray.length; index++) {
  // ["it"]

  const word = fileArray[index];
  let letterSum = 0;

  for (let letter of word.split("")) {
    // ["i", "t"]

    const quantity = getAlphabetPositionLetter(letter);

    letterSum += quantity;
  }

  let hash = letterSum % m;

  // se estiver incluso no array

  hashList.push(hash);

  // percorrer array, inserir no indice correspondente ao hash

  hashTableInsert(hash);

  console.log(hash);

  if (index === 6) break;

  const wordData = {
    key: "",
    word,
    count: 1,
  };

  if (!words.includes(word)) {
    words.push(wordData);
  } else {
    // encontrar palavra no array pelo hash (id)
  }
}

console.log(hashTable);
