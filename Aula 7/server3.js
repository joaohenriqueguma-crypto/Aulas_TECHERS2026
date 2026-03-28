import http, { request } from 'node:http'

const PORT = 3000

const server = http.createServer((request, response) => {
    const { url, method } = request

    response.setHeader('Content-Type', 'text/html; charset=utf-8')

    if (url === '/') {
        response.writeHeader(200)
        response.end('<h1>Bem vindo ao Portal!</h1> <br> <p>Tente acessar /perfil ou /notas</p>')
    } else if (url === '/perfil') {
        response.writeHeader(200)
        response.end('<h1>Perfil</h1> <br> <p>Cosmicaurafarme676761tchetchetchechurrasco</p> <br> <p>Turma:67</p>')
    } else if (url === '/notas') {
        response.writeHeader(200)
        response.end('<h1>Notas do aluno</h1> <br> <p>Matematica - 7.9</p> <br> <p>Portugues - 8.6</p> <br> <p>Fazer qualquer coisa menos o que tem que fazer - 10</p> <br>  <p>farmar aurea - 67</p> <style> body {background-color: #887070;}</style>' )
    } else {
        response.writeHead(404)
        response.end('<h1>404 - Página não encontrada</h1>')
    }
});

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});