Criar um programa para exibir quantas vezes cada palavra foi utilizada em um dado
texto.

A saída do programa será uma lista de palavras, em ordem decrescente do
número de vezes que cada palavra ocorre no texto de entrada. Para simplificar, não
consideraremos caracteres acentuados e caracteres únicos tais como a, e, o etc.

Exige-se que utilize uma estrutura de tabela de dispersão para armazenar os dados.
Vamos considerar que uma palavra se caracteriza por uma sequência de uma ou
mais letras (maiúsculas ou minúsculas).

Para contar o número de ocorrências de
cada palavra, podemos armazenar as palavras lidas numa tabela de dispersão,
usando a própria palavra como chave de busca.

Guardaremos na estrutura de dados
quantas vezes cada palavra foi encontrada. Para isso, podemos prever a construção
de uma função que acessa uma palavra armazenada na tabela; se a palavra ainda
não existir, a função armazena uma nova palavra na tabela.

Dessa forma, para cada
palavra lida, conseguiremos incrementar o número de ocorrências.

Para exibir as
ocorrências em ordem decrescente, criaremos um vetor e armazenaremos todas as
palavras que existem na tabela de dispersão no vetor.

Esse vetor pode então ser
ordenado e seu conteúdo exibido.

A função de hash para cada chave deve ser definida pelo desenvolvedor.

Contudo,
uma função de dispersão simples para cadeia de caracteres consiste em somar os
códigos dos caracteres que compõem a cadeia e tirar o módulo dessa soma para se
obter o índice da tabela.

O sistema deve contar a ocorrência de palavras do arquivo tale.txt, disponível em
anexo. 

Para o teste do sistema pode-se utilizar o arquivo tinytale.txt por ser menor.
fs
