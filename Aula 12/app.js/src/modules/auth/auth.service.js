import fs from 'node:fs/promises'
import * as repository from './usuario.repository.js'

const cadastrarNovoUsuario = async (dadosDigitados) => {
    const idade = Number(dadosDigitados.get('idade'));

    if(idade < 16){
       throw new Error('Idade minima é 16 anos')
    }
     else if (dadosDigitados.senha.length < 7){
       throw new Error('Senha deve ter pelo menos 7 caracteres')
     }

    const usuarios = await repository.buscarLogin()
    
    const emailJaExiste = usuarios.find(
        (usuario) => usuario.email === dadosDigitados.email
    )

    if (emailJaExiste) {
        throw new Error('Email já cadastrado')
    }

    const novoUsuario = {
        nome: dadosDigitados.nome,
        email: dadosDigitados.email,
        senha: dadosDigitados.senha,
        idade: idade

    return await repository.salvarUsuario(novoUsuario)
};

export { cadastrarNovoUsuario }