// Define uma constante com o nome de uma pessoa
const nome = 'Rebeca'; // Valor atribuído: 'Rebeca'

// Concatena strings usando o operador de soma (+)
const concatenacao = 'Olá ' + nome + '!'; // Concatena 'Olá ' com o valor da constante nome

// Utiliza template strings para interpolar variáveis e criar strings multilinha
const template = `
    Olá
    ${nome}!`; // Template string com interpolação de variáveis e quebra de linha

console.log(concatenacao, template); // Exibe as strings concatenacao e template no console

// Realiza uma operação matemática dentro de uma template string
console.log(`1 + 1 = ${1 + 1}`); // Realiza a operação 1 + 1 dentro de uma template string

// Define uma função que converte texto para letras maiúsculas
const up = texto => texto.toUpperCase(); // Função que converte o texto para letras maiúsculas

// Utiliza a função dentro de uma template string
console.log(`Ei... ${up('cuidado')}!`); // Exibe o texto 'cuidado' em maiúsculas dentro de uma template string