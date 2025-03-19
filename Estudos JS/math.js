// Definição do raio de um círculo
const raio = 5.6; // Valor numérico representando o raio do círculo

// Cálculo da área do círculo
const area = Math.PI * Math.pow(raio, 2); // Math.PI retorna o valor de π, e Math.pow eleva o raio ao quadrado

// Exibe a área do círculo no console
console.log(area); // Exibe o valor da área calculada

// Exibe a área formatada com duas casas decimais
console.log(area.toFixed(2)); // toFixed(2) formata o número com 2 casas decimais

// Verifica o tipo do objeto Math
console.log(typeof Math); // Retorna "object", pois Math é um objeto embutido no JavaScript
