// 1. O Boas-vindas Personalizado: Crie uma variável para armazenar o nome de um aluno e outra para o nome de um curso. Exiba no console a frase: "Olá [nome], bem-vindo ao curso de [curso]!".

function boasVindas(x, y) {
    return "Olá " + x + ", bem-vindo ao curso de " + y;
}

let usuario = boasVindas("Angelo", "Programação");
console.log(usuario);

// 2. Calculadora de Idade Canina: Crie uma variável com a idade de um cachorro e calcule a idade "humana" (multiplicando por 7). Exiba o resultado.

const IdadeCanina = function (x) { return x * 7 };
let IdadeCaninaHumana = IdadeCanina(2);
console.log(IdadeCaninaHumana);

// 3. Sistema de Pontuação: Um jogador começa com 100 pontos. Ele ganha um bônus de 20% após uma missão. Crie as variáveis, faça o cálculo e mostre o novo total.

const Pontuação = (x, y) => {
    return x + (x * y);
};

let PontuaçãoF = Pontuação(100, 0.20);
console.log(PontuaçãoF)

// 4. Filtro de Idade: Crie uma variável idade. Se for 18 ou mais, exiba "Acesso liberado". Caso contrário, exiba "Acesso bloqueado: menor de idade".

function idadeAcesso(x) {
    if (x > 18) {
        return "Acesso liberado!";
    }
    else {
        return "Acesso bloqueado: menor de idade";
    }
}
let idade = 19;
let verificar = idadeAcesso(idade);

console.log(verificar);

// fiz sozinho !!! hehehehehheheheheehhe to feliz

// 5. Medidor de Temperatura: Crie uma variável temperatura. Se for maior que 30, exiba "Está calor!". Se for entre 15 e 30, "Clima agradável". Se for menor que 15, "Está frio!".

function MedidorTemperatura(x) {
    if (x > 30){
        console.log("Está calor!");
    }
    else if (15 < x && 30 > x){
        console.log("Clima agradável");
    }
    else
    console.log("Está frio!");
}

let medir = 1;
MedidorTemperatura(medir);

// 6. Login Simples: Defina uma variável senhaCorreta = "1234". Crie uma variável tentativa. Se forem iguais, exiba "Login realizado!", se não, "Senha incorreta".

function login(x,y){
    if(x === y)
        return "Login realizado!";
    else
        return "Senha Incorreta";
}

let senhaC = "1234";
let senhaT = "1233";

console.log(login(senhaC, senhaT));

// 7. Contador de Lançamento de Foguete (for): Crie um laço que conte de 10 até 0 e, no final, exiba "Decolar! 🚀".  

function decolar(){
for (let i = 10; i >= 0; i--) {
    return i;
}
}

console.log(decolar())

const Tabuada = (x) => {
    for (let Ta = 1; Ta <= 10; Ta++) {
    let resultado2 = Multi * Ta
    console.log(resultado2)
}
};

Tabuada(2);

// for (let Ta = 1; Ta <= 10; Ta++) {
//     let resultado2 = Multi * Ta
//     console.log(resultado2)
// }
