const REGEX = {
  /**
   * Regex para lidar com diferentes tipos de caracteres a serem ignorados durante a contagem de palavras.
   */
  UNEXPECTED_CHARACTERS:
    /[#]|[0-9]|[*]|[,]|[\]]|[\[]|[:]|[.]|[w]{3}|(\b[a-z]{1}\b)|[\/]|[']|[\?]|["]|[!]|[;]|[()]|[_]|[$]|[%]|[`]/g,
};

module.exports = REGEX;
