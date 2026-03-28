import http, { request } from 'node:http'

const PORT = 3000

const server = http.createServer((request, response) => {
    const { url, method } = request

    response.setHeader('Content-Type', 'text/html; charset=utf-8')

    if (url === '/') {
        response.writeHeader(200)
        response.end('<h1>Bem vindo a Home</h1> <br> <p>Tente acessar /aula ou /projeto</p>')
    } else if (url === '/aula') {
        response.writeHeader(200)
        response.end('<h1>Pagina de aula</h1> <br> <p>Hoje estamos aprendendo sobre rotas</p>')
    } else if (url === '/projeto') {
        response.writeHeader(200)
        response.end('<h1>Pagina de projetos</h1> <br> <p>Servidor node integrado om sucesso</p>')
    } else {
        response.writeHead(404)
        response.end('<h1>404 - Página não encontrada</h1>')
    }
});

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});