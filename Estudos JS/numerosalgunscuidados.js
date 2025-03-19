// Exemplo de divisão por zero
console.log(7 / 0); // Em JavaScript, 7 dividido por 0 retorna Infinity

// Exemplo de divisão por 1
console.log(7 / 1); // 7 dividido por 1 retorna 7

// Exemplo de divisão de uma string numérica
console.log("54" / 2); // A string "54" é convertida para número e o resultado é 27

// Exemplo de operação inválida com string
console.log("Show!" * 2); // Retorna NaN (Not a Number), pois a string não pode ser multiplicada

// Exemplo de imprecisão em operações com ponto flutuante
console.log(0.1 + 0.7); // Retorna 0.7999999999999999 devido à imprecisão do IEEE 754

// Definição de variáveis para cálculo
const valor1 = 2500; // Valor numérico representando um total
const valor2 = 200;  // Valor numérico representando um adicional

// Soma os valores das variáveis
const media = valor1 + valor2; // Soma os valores de valor1 e valor2

// Formata o resultado da soma com 5 casas decimais
const mediaString = media.toFixed(5); // Converte o número para string com 5 casas decimais

// Exibe o valor formatado no console
console.log(mediaString); // Exibe o valor de media como string

// Verifica o tipo da variável formatada
console.log(typeof mediaString); // Retorna "string", pois mediaString é uma string

// Verifica o tipo da variável original
console.log(typeof media); // Retorna "number", pois media é um número

console.log('3'+ 2) // Retorna 32, pois a string "3" é concatenada com o número 2

console.log('3'- 2) // Retorna 1, pois a string "3" é convertida para número e subtraída de 2   