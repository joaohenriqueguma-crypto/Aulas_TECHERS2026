const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function autenticarUser(email, senha) {
    await esperar(1000);
    if (email === "farmadordeaurea67@email.com" && senha === "angelo6767") {
        console.log("Usuario autenticado!");
        return { nome: "Angelo", id: 1 };
    } else {

        throw "Usuario não encontrado, email ou senha incorreto."
    }
}

async function buscarFavoritos(userId) {
    await esperar(500)

    console.log("Buscando favoritos...")
    return ["Terror", "Comedia", "Filmes com Aura"]
}

async function recomendarFilme(categorias) {
    await esperar(500)
    console.log("Gerando lista de recomendaçoes baseada em: " + categorias[2])
    return "Vingadores Ultimato";
}

console.log("🚀 Carregando sistema de streaming...");
try {
    const usuario = await autenticarUser("farmadordeaurea67@email.com", "angelo6767");

    const favoritos = await buscarFavoritos(usuario.id);

    const filme = await recomendarFilme(favoritos);

    console.log(filme);
}
catch (erro) {
    console.log(erro);
}
finally{
    console.log("Sessão encerrada.");
}

// 1. Tente (try) autenticar o usuário "aluno@escola.com" com a senha "1234"
// 2. Aguarde (await) a autenticação para pegar o ID do usuário
// 3. Aguarde buscar os favoritos usando esse ID
// 4. Aguarde a recomendação de filme baseada nos favoritos
// 5. Mostre o filme recomendado no console
// 6. Capture (catch) qualquer erro e exiba na tela
// 7. No final (finally), diga "Sessão encerrada."

// carregarInterface();