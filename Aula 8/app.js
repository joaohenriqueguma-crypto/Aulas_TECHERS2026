import http from 'node:http'
import fs from 'node:fs/promises'

const server = http.createServer(async (request, response) => {
    if (request.url === '/' && request.method === 'GET') {

        const dados_banco = await fs.readFile('./inventario.json', 'utf-8')
        const inventario = JSON.parse(dados_banco)

        console.log("Dados carregados: ", inventario)

        const templateHtml = await fs.readFile('./index.html', 'utf-8')

        const linhaHtml = inventario.map(item => `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.nome}</td>
                    <td>${item.categoria}</td>
                    <td>${item.quantidade}</td>
                </tr>
            `).join('')

        const paginaFinal = templateHtml.replace('{{TABELA}}', linhaHtml)

        response.setHeader('Content-Type', 'text/html; charset=utf-8')
        response.writeHead(200)
        response.end(paginaFinal)
    } else if (request.url === '/adicionar' && request.method === 'POST') {
        // console.log(request)

        let body = ''
        request.on('data', (chunk) => body += chunk.toString())
        request.on('end',async ()=>{
            //1
            const dadosFormulario = new URLSearchParams(body)
            console.log(dadosFormulario)
            const nomeItem = dadosFormulario.get('nome');
            const categoriaItem = dadosFormulario.get('categoria');
            const quantidadeItem = dadosFormulario.get('quantidade');

            //2
            const dadosBanco = await fs.readFile('./inventario.json', 'utf-8'); //texto
            const inventario = JSON.parse(dadosBanco);//objeto 
            
            const novoItem = {
                id : Date.now(),
                nome: nomeItem,
                categoria: categoriaItem,
                quantidade: Number(quantidadeItem)
            }

            console.log("Novo item",novoItem)

            inventario.push(novoItem);
            await fs.writeFile('./inventario.json', JSON.stringify(inventario, null, 2));
            
            response.writeHead(302, {'Location':'/'})
            response.end()
        });

        // response.setHeader('Content-Type', 'text/html; charset=utf-8')
        // response.writeHead(200)
        // response.end('<h1>Dados recebidos </h1>')
    } else {
        response.writeHead(440)
        response.end('<h1>Pagina não encontrada!</h1>')
    }
});

server.listen(3000, () => console.log(`Servidor rodando em http://localhost:3000`))