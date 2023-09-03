const asciiTable = require("./AsciiTable");
const fileSystem = require("./FileSystem");
const hashTable = require("./HashTable");
const REGEX = require("../constants");

/**
 * Funcionalidades da contagem de palavras. Utiliza classes externas para abstrair responsabilidades.
 */
class WordCounter {
  wordList = [];
  occurrences = [];

  /**
   * Lida com a contagem de palavras e suas principais funcionalidades, utilizando das classes externas AsciiTable e HashTable.
   */
  count() {
    this.setWordList();
    this.findOccurrences();

    const wordOccurrences = this.occurrences.map((item) => item.word);
    const wordPositions = [];

    asciiTable.sum(wordOccurrences);

    // Para cada valor somado da lista da tabela ascii, calcula o hash e adiciona o resultado na lista de posições.
    asciiTable.list.map((item) => {
      const hashValue = hashTable.hash(item);

      wordPositions.push(hashValue);
    });

    hashTable.createRows(wordPositions, wordOccurrences, this.occurrences);
    hashTable.orderBy("Quantity");
    hashTable.display();
    hashTable.save();
  }

  /**
   * Calcula as ocorrências de cada palavra e armazena em um array de objetos, com cada objeto no formato: { word: "the", occurrence: 3 }.
   */
  findOccurrences() {
    for (const word of this.wordList) {
      const existingWord = this.occurrences.find((item) => item.word === word);

      if (existingWord) existingWord.occurrence++;
      else this.occurrences.push({ word, occurrence: 1 });
    }
  }

  /**
   * Recebe o conteúdo do arquivo de texto correspondente e executa ações de formatação na string antes de salvar.
   */
  setWordList() {
    this.wordList = fileSystem.fileRead
      .trim() // Remove todos os espaços em branco do início e fim da string.
      .toLowerCase() // Transforma todas as letras em minúsculas.
      .replace(REGEX.UNEXPECTED_CHARACTERS, "") // Aplica o regex dos caracteres especiais a serem ignorados.
      .replace(/--/g, " ") // Transforma todos os padrões de duplo hífen em espaços em branco.
      .split(/\s+/); // Divide a string em várias substrings com base em uma ou mais ocorrências de caracteres de espaço em branco.
  }
}

const wordCounter = new WordCounter();

module.exports = wordCounter;
