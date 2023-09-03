const fileSystem = require("./FileSystem");

/**
 * Funcionalidades da Tabela Hash.
 */
class HashTable {
  tableData = [];
  tableSize = 0;
  current = {
    position: 0,
    word: "",
    quantity: 0,
  };

  /**
   * Recebe o tamanho da tabela e a partir dele cria um array com a quantidade de posições vazias correspondentes.
   */
  startWithSize(tableSize) {
    this.tableSize = tableSize;
    this.tableData = Array(this.tableSize);
  }

  /**
   * Iteração para montar todas as linhas da tabela, a partir da lista de palavras, posições e quantidades passadas pela classe WordCounter.
   */
  createRows(wordPositions, wordOccurrences, occurrences) {
    for (let index = 0; index < wordPositions.length; index++) {
      this.current.word = wordOccurrences[index];

      // Encontra a ocorrência da palavra correspondente.
      this.current.quantity = occurrences.find(
        (item) => item.word === this.current.word
      ).occurrence;

      this.current.position = wordPositions[index];

      this.checkPosition();
      this.insert();
    }
  }

  /**
   * Verifica se uma posição está vazia na tabela antes de adicionar uma nova linha.
   */
  checkPosition() {
    while (this.tableData[this.current.position]) {
      const nextPosition = this.current.position + 1;

      this.current.position = nextPosition % this.tableData.length;
    }
  }

  /**
   * Insere uma linha na tabela, de acordo com a posição adequada.
   */
  insert() {
    const row = {
      Position: this.current.position,
      Word: this.current.word,
      Quantity: this.current.quantity,
    };

    this.tableData[this.current.position] = row;
  }

  /**
   * Exibe a tabela hash no terminal.
   */
  display() {
    console.table(this.tableData);
    console.log("Tabela gerada com sucesso!\n");
  }

  /**
   * A partir do resultado da tabela hash, exporta o conteúdo em arquivos externos para melhor visualização.
   */
  save() {
    fileSystem.saveAsMarkdown(this.tableData);
    fileSystem.saveAsCsv(this.tableData);

    console.log("A tabela também foi exportada para os formatos .md e .csv.");
    console.log("Confira a pasta: /public/downloads.");
  }

  /**
   * Método para realizar o hash.
   */
  hash(value) {
    return value % this.tableSize;
  }

  /**
   * Ordena a tabela por uma propriedade específica, como: Position, Word ou Quantity.
   */
  orderBy(property) {
    this.tableData = this.tableData.sort((a, b) => b[property] - a[property]);
  }
}

const hashTable = new HashTable();

module.exports = hashTable;
