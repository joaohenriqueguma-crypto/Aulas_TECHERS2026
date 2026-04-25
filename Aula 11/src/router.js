import fs from 'node:fs/promises'
import * as inventoryController from './modules/inventory/inventory.controller.js'

export const roteador = async (req, rep) =>{
    const {url, method} = req

    if (url === '/' && method === 'GET'){
        return inventoryController.listarInventario(req, rep)
    }
    else if (url === '/adicionar'){
        return inventoryController.adicionarNovoInventario(req, rep)
    }
    else if(url.endsWith('.css')){
        try{
            const css = await fs. readFile('.' + url, 'utf-8');
        reponse.setHeader('X-Content-Type-Options', 'nosniff')
        reponse.setHeader('Content-Type', 'text/css')
        reponse.writeHead(200)
        reponse.end(arquivo)
        } catch (erro) {}
    }
    else {
        rep.writeHead(404)
        rep.end('Página não foi encontrada!')
    }
};

