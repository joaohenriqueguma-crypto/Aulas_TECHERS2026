import * as service from './inventory.service.js'

export const listarInventario = async (req, rep) => {
    const htmlFinal = await service.gerarPaginaInventario()

    rep.setHeader('Content-Type', 'text/html; charset=utf-8')

    rep.writeHead(200)
    rep.end(htmlFinal)
} 

export const adicionarNovoInventario = (req, rep) => {
    let corpoRequesicao = ''

    req.on('data',(pedaco) =>{
        corpoRequesicao += pedaco.toString()
    });

    req.on('end', async () => {
        const dadosFormulario = new URLSearchParams(corpoRequesicao)

        await service.processarNovoItem(dadosFormulario)

        rep.writeHead(301, {'location': '/'})
        rep.end()
    });
    
}