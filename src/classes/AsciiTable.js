/**
 * Funcionalidades para lidar com a tabela ASCII.
 */
class AsciiTable {
  list = [];

  /**
   * Recebe uma lista de palavras e calcula a soma dos valores da tabela ASCII correspondente para cada caractere.
   */
  sum(wordOccurrences) {
    for (let index = 0; index < wordOccurrences.length; index++) {
      const word = wordOccurrences[index];
      const letterList = word.split("");

      // Soma dos códigos das letras de cada palavra.
      const sum = letterList.reduce((accumulator, value) => {
        const code = value.charCodeAt(0);

        return accumulator + code;
      }, 0);

      this.list.push(sum);
    }
  }
}

const asciiTable = new AsciiTable();

module.exports = asciiTable;
