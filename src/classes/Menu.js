const prompt = require("prompt-sync")();
const fileSystem = require("./FileSystem");
const hashTable = require("./HashTable");
const wordCounter = require("./WordCounter");

/**
 * Menu de opções do programa.
 */
class Menu {
  answer = "";
  timeout = 1000;

  initialize() {
    this.handleQuestion();
    this.handleAnswer();
  }

  /**
   * Lida com a questão de qual arquivo de texto será utilizado.
   */
  handleQuestion() {
    console.clear();
    console.log("\n========== TABELA DE DISPERSÃO ==========");
    console.log(
      "\nSelecione um arquivo de texto abaixo para contar as palavras:\n"
    );
    console.log("1. tale.txt");
    console.log("2. tinytale.txt\n");

    this.answer = prompt("Resposta: ");
  }

  /**
   * Lida com a resposta da questão e executa as ações necessárias correspondentes.
   */
  handleAnswer() {
    switch (this.answer) {
      case "1":
        // Utiliza o arquivo tale.txt, passando para a tabela o tamanho de 10369.

        hashTable.startWithSize(10369);
        fileSystem.readFileByName("./public/content/tale.txt");
        wordCounter.count();
        break;
      case "2":
        // Utiliza o arquivo tinytale.txt, passando para a tabela o tamanho de 59.

        hashTable.startWithSize(59);
        fileSystem.readFileByName("./public/content/tinytale.txt");
        wordCounter.count();
        break;

      default:
        console.log("\nOpção incorreta, selecione uma opção válida.");

        setTimeout(() => this.initialize(), this.timeout);
        break;
    }
  }
}

const menu = new Menu();

module.exports = menu;
