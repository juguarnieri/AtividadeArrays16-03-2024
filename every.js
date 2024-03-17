//Exemplo 1:

// Defini um array chamado números que contém uma sequência de números.
let numbers = [3, 6, 9, 12, 15, 18, 21];

////O método every() verifica se todos os elementos do array satisfazem a condição fornecida por uma função de teste, no caso, se todos são divisíveis por 3.
//numero => numero % 3 === 0` é uma função de call-back (funções passadas como argumentos para outras funções) que recebe um parâmetro chamado `numero`. Ela retorna `true` se o `numero` for divisível por 3  ou `false` caso contrário.
let divisiveisPorTres = numbers.every(numbers => numbers % 3 === 0);

//O método every é usado para verificar se todos os números no array numeros são menores que 10.
let menoresQueDez = numbers.every(numbers => numbers < 10);

console.log("Todos os números divisivéis por 3?", divisiveisPorTres); // Saída: Todos os números divisivéis por 3? true 
console.log("Todos os números são menores que 10?", menoresQueDez); // Saída: Todos os números são menores que 10? false


//Exemplo 2:

//Defini um array chamado all, que contém uma variedade de tipos de dados.
let all = ["bicicleta", false, "beterraba", 5, true, 15, -4];

//O método every() verifica se todos os elementos do array satisfazem a condição fornecida por uma função de teste, no caso, para verificar se todos os elementos são do tipo número.
//elemento => typeof elemento === "number" é uma função de callback que verifica se o tipo de dado de cada elemento é igual a "number" , para isso é usado o operador typeof.
let apenasNumbers = all.every(elemento => typeof elemento === "number");

//Se todos os elementos do array all forem do tipo número, a variável apenasNumbers será true, caso contrário, será false.
//Como o array all contém elementos de vários tipos de dados, incluindo strings, booleanos e número, a saída vai ser: false.
console.log("Todos os elementos são numbers?", apenasNumbers); //Todos os elementos são numbers? false
