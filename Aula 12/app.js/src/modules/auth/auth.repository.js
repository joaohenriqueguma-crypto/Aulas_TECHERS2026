import fs from 'node:fs/promises'

const CAMINHO_ARQUIVO = './usuario.json'

export const buscarLogin = async () => {
    const dados_banco = await fs.readFile(CAMINHO_ARQUIVO, 'utf-8')
    return JSON.parse(dados_banco);
};

export const salvarUsuario = async (novoUsuario) => {
    const usuario = await buscarLogin()
    usuario.push(novoUsuario)
    await fs.writeFile(CAMINHO_ARQUIVO, JSON.stringify(usuario, null, 2))
    return novoUsuario
};