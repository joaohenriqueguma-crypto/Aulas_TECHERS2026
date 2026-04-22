import http from 'node:http'
import fs from 'node:fs/promises'

const server = http.createServer(async(request, reponse) => {
    const url = request.url
    console.log("URL:", url)

    if( url == '/' || url == '/index.html'){
        const html = await fs.readFile('./index.html')

        reponse.setHeader('Content-Type', 'text/html')
        reponse.writeHead(200)
        return reponse.end(html)    
    }
    else if(url.endsWith('.css')){
        const arquivo = await fs.readFile('.'+url)

        reponse.setHeader('X-Content-Type-Options', 'nosniff')
        reponse.setHeader('Content-Type', 'text/css')
        reponse.writeHead(200)
        reponse.end(arquivo)
    }

    else if(url.endsWith('.jpeg')){
        const arquivo = await fs.readFile('.'+url)

        reponse.setHeader('X-Content-Type-Options', 'nosniff')
        reponse.setHeader('Content-Type', 'image/jpeg')
        reponse.writeHead(200)
        reponse.end(arquivo)
    }

    else if(url.endsWith('.gif')){
        const arquivo = await fs.readFile('.'+url)

        reponse.setHeader('X-Content-Type-Options', 'nosniff')
        reponse.setHeader('Content-Type', 'image/gif')
        reponse.writeHead(200)
        reponse.end(arquivo)
    }

    else{
        reponse.writeHead(404)
        reponse.end("Recurso não encontrado")
    }
})

server.listen(3000, ()=>{
    console.log("Servidor rodando em http://localhost:3000")
})