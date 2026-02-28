// ## Exercícios com Funções

// ### 1. O Conversor de Moedas

//Crie uma função chamada converterDolar que recebe um valor em Reais. Dentro dela, calcule o valor em Dólar (considere  para facilitar). A função deve exibir: "O valor em dólar é: $US$ [resultado]".
function converterDolar(x,y){
    let PreçoDolar = 5.50;
    total = x * PreçoDolar;
    return(total);
}
console.log(converterDolar(1))

// ### 2. Calculadora de Área de Terreno

// Crie uma função chamada calcularArea que recebe dois parâmetros: largura e comprimento. A função deve calcular a área total e exibir: "A área do terreno é de [resultado] metros quadrados".

function calcularArea(x,y){
    total = x * y;
    return(total);
}

    let comprimentoM = 12;
    let larguraM = 15;

console.log(calcularArea(comprimentoM,larguraM)+" metros quadrados");

// ### 3. Sistema de Média Escolar

// Crie uma função chamada verificarAprovacao que recebe três notas.
// * Calcule a média.
// * Caso contrário, exiba "Reprovado, estude mais!".

function verificarAprovacao(x,y,z){
    soma = x + y + z;
    total = soma / 3;
    if (total < 6){
        return("Reprovado, estude mais!")
    }
    else
        return("Estuda mais do mesmo jeito!")
}

console.log(verificarAprovacao(5,8,8))

// ### 4. Gerador de E-mail Acadêmico

// Crie uma função que recebe o nome e o sobrenome de um aluno. Ela deve retornar (ou exibir) o e-mail no formato: nome.sobrenome@escola.com.
function geradorEmail(x,y){
    
}
// ### 5. O Verificador de Par ou Ímpar

// Crie uma função chamada ehPar que recebe um número.

// * Se o número for par, exiba "O número [x] é par".
// * Se for ímpar, exiba "O número [x] é ímpar".
// (Dica: use o operador de resto % 2 == 0).

// ### 6. Aplicador de Descontos

// Crie uma função chamada aplicarDesconto que recebe o valorProduto e a porcentagemDesconto. Ela deve calcular o novo preço e exibir: "Com [x]% de desconto, o produto custa R$ [novoValor]".

// ### 7. Conversor de Temperatura (Desafio)

// Crie uma função que recebe uma temperatura em Celsius e a converte para Fahrenheit.


// ### 8. Validador de Senha Forte

// Crie uma função chamada validarSenha que recebe uma string. Se a senha tiver 8 caracteres ou mais, exiba "Senha segura". Se tiver menos, exiba "Senha muito curta".