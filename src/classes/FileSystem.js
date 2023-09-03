const fs = require("fs");
const arrayToTable = require("array-to-table");
const ObjectsToCsv = require("objects-to-csv");

/**
 * Abstração das funcionalidades do file system do NodeJS.
 */
class FileSystem {
  fileRead = "";

  /**
   * Lê um arquivo pelo seu nome e armazena o conteúdo para ser acessado globalmente por outras classes.
   */
  readFileByName(fileName) {
    const fileData = fs.readFileSync(fileName, "utf8", (error, data) => {
      if (error) {
        console.error("ERRO! Não foi possível ler o arquivo!", error);

        return null;
      }

      return data;
    });

    this.fileRead = fileData;
  }

  /**
   * Cria um novo arquivo, a partir do nome e conteúdo.
   */
  writeFile(fileName, data) {
    fs.writeFileSync(fileName, data);
  }

  /**
   * Salva o resultado da Tabela Hash em um arquivo no formato Markdown em: /public/downloads.
   */
  saveAsMarkdown(tableData) {
    // Biblioteca externa para converter array de objetos em uma tabela em markdown.
    const markdownContent = arrayToTable(tableData);

    this.writeFile("./public/downloads/table-result.md", markdownContent);
  }

  /**
   * Salva o resultado da Tabela Hash em um arquivo no formato CSV em: /public/downloads.
   */
  saveAsCsv(tableData) {
    const table = [];

    // Cria uma nova lista a partir do resultado para ignorar os espaços em branco e evitar erros durante a conversão para CSV.
    tableData.map((item) => {
      table.push(item);
    });

    // Biblioteca externa para converter array de objetos em uma tabela em csv.
    const csv = new ObjectsToCsv(table);

    (async () => {
      await csv.toDisk("./public/downloads/table-result.csv");
    })();
  }
}

const fileSystem = new FileSystem();

module.exports = fileSystem;
