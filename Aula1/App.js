// // 1. O Boas-vindas Personalizado: Crie uma variável para armazenar o nome de um aluno e outra para o nome de um curso. Exiba no console a frase: "Olá [nome], bem-vindo ao curso de [curso]!".
// // 2. Calculadora de Idade Canina: Crie uma variável com a idade de um cachorro e calcule a idade "humana" (multiplicando por 7). Exiba o resultado.
// // 3. Sistema de Pontuação: Um jogador começa com 100 pontos. Ele ganha um bônus de 20% após uma missão. Crie as variáveis, faça o cálculo e mostre o novo total.
// // 4. Filtro de Idade: Crie uma variável idade. Se for 18 ou mais, exiba "Acesso liberado". Caso contrário, exiba "Acesso bloqueado: menor de idade".
// // 5. Medidor de Temperatura: Crie uma variável temperatura. Se for maior que 30, exiba "Está calor!". Se for entre 15 e 30, "Clima agradável". Se for menor que 15, "Está frio!".
// // 6. Login Simples: Defina uma variável senhaCorreta = "1234". Crie uma variável tentativa. Se forem iguais, exiba "Login realizado!", se não, "Senha incorreta".
// // 7. Contador de Lançamento de Foguete (for): Crie um laço que conte de 10 até 0 e, no final, exiba "Decolar! 🚀".  
// // 8. Tabuada Dinâmica (for): Escolha um número (ex: 5) e use um laço para exibir a tabuada dele de 1 a 10 (ex: "5 x 1 = 5", "5 x 2 = 10"...).
// // 9. Verificador de Dados (while): Simule um download. Crie uma variável progresso = 0. Enquanto o progresso for menor que 100, adicione 20 e exiba "Baixando... [progresso]%".

let nome = "João";
let curso = "Programação";

let idade = 3;

let pontuacaoI = 100;
let bonus = 0.20;


let idade2 = 20;

let temperatura = 27;

let senhaCorreta = "1234";
let tentativa = "5235";

let Multi = 5

let progresso = 0;

console.log("Olá " + nome + ", bem-vindo ao curso de " + curso);

console.log(idade * 7);

console.log(pontuacaoI + (pontuacaoI * bonus));

if (idade2 >= 18) {
    console.log("Acesso Liberado");
}
else {
    console.log("Acesso Negado");
};

if (temperatura > 30) {
    console.log("Está calor!");
}
else if (15 < temperatura && 30 > temperatura) {
    console.log("Clima agradável")
}
else {
    console.log("Está frio!")
}

if (tentativa === senhaCorreta) {
    console.log("Senha correta!")
}
else {
    console.log("Senha incorreta!")
}

for (let i = 10; i >= 0; i--) {
    console.log(i);
}
console.log("Decolar! 🚀")


for (let Ta = 1; Ta <= 10; Ta++) {
    let resultado2 = Multi * Ta
    console.log(resultado2)
}

console.log("Baixando... " + "0" + "%");
while (progresso < 100) {
    // progresso = progresso + 20
    progresso += 5;
    console.log("Baixando... " + progresso + "%");
}
