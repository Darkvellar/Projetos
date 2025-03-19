// Definição de constantes numéricas
const peso1 = 1.0; // Número do tipo ponto flutuante
const peso2 = Number('2.0'); // Converte a string '2.0' para um número do tipo ponto flutuante

// Exibe os valores das constantes peso1 e peso2 no console
console.log(peso1, peso2);

// Verifica se peso1 e peso2 são números inteiros
console.log(Number.isInteger(peso1)); // Retorna true se peso1 for um número inteiro
console.log(Number.isInteger(peso2)); // Retorna true se peso2 for um número inteiro

// Definição de constantes para avaliações
const avaliacao1 = 9.871; // Nota da primeira avaliação
const avaliacao2 = 6.871; // Nota da segunda avaliação

// Calcula o total ponderado das avaliações
const total = avaliacao1 * peso1 + avaliacao2 * peso2; // Multiplica cada avaliação pelo respectivo peso e soma os resultados

// Calcula a média ponderada
const media = total / (peso1 + peso2); // Divide o total pela soma dos pesos

// Exibe a média com duas casas decimais
console.log(media.toFixed(2)); // toFixed(2) formata o número com 2 casas decimais

// Exibe a média em formato binário
console.log(media.toString(2)); // toString(2) converte o número para uma representação binária
console.log(typeof media); // Exibe o tipo da variável media
console.log(typeof Number); // Exibe o tipo da função Number
