// // importar o sistema de arquivos usando promises
// import fs from 'fs/promises';

// // criar um objeto normal do JavaScript
// const item = { nome: "Poção", qtd: 5 };

// // transformar o objeto em texto JSON para poder salvar em arquivo
// const textoSalvar = JSON.stringify(item);

// // escrever o texto dentro de um arquivo
// await fs.writeFile('teste.txt', textoSalvar);

// // ler o arquivo
// const conteudo = await fs.readFile('teste.txt', 'utf-8');

// // transformar o texto JSON de volta em objeto JavaScript
// const objetoCarregador = JSON.parse(conteudo);

// console.log(objetoCarregador);
import fs from 'fs/promises';

const CAMINHO_ARQUIVO = './inventario.json';

// função ler o bd
async function lerBanco() {
    try {
        const dados = await fs.readFile(CAMINHO_ARQUIVO, 'utf-8');
        return JSON.parse(dados);
    } catch {
        return [];
    }
}

// salvar no bd
async function salvarBanco(lista) {
    const texto = JSON.stringify(lista, null, 2);
    await fs.writeFile(CAMINHO_ARQUIVO, texto);
}

// CREATE
async function adicionarItens(nome, categoria, quantidade) {
    const inventario = await lerBanco();

    const novoItem = {
        id: Date.now(),
        nome,
        categoria,
        quantidade
    };

    inventario.push(novoItem);

    await salvarBanco(inventario);

    console.log(`Item ${nome} salvo!`);
}

// DELETE
async function removerItens(id) {
    let inventario = await lerBanco();

    const novaLista = inventario.filter(item => item.id !== id);

    await salvarBanco(novaLista);

    console.log(`Item com o ${id} removido`);
}

// READ
async function listarItens() {
    const inventario = await lerBanco();

    if (inventario.length === 0) {
        console.log("Inventario vazio");
    } else {
        console.table(inventario);
    }
}

async function iniciar() {
    console.log("Iniciando o gerenciador de inventario");

    // await adicionarItens("Tronco de madeira", "Bloco", 1);
    // await adicionarItens("Maça", "Comida", 4);

    // console.log("Inventario atual:");

    await removerItens(1773492044231);
    await listarItens();
}

iniciar();