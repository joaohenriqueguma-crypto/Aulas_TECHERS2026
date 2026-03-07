

// async e o await

// async colocada antes da definiçãp de uma função
// await o js vai pausar o codigo

// try catch
function assarPizza(numero) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (numero === 4) {
                reject("O forno quebrou na quarta pizza!")
            } else {
                console.log(`pizza ${numero} pronta!`)
                resolve(`Dados da pizza ${numero}`)
            }
        }, 1000);
    });
}
async function prepararPedido() {
    console.log("Iniciando pedido!")
    try {
        for (let i = 1; i <= 4; i++) {
            console.log(`Aguardando a pizza ${i}`)
            const resultado = await assarPizza(i)
            console.log(`Recebido: ${i}`)
        }
    } catch (erro) {
        console.error("Erro critico no pedido: ", erro)
    } finally {
        console.log("Limpando a cozinha!")
    }
}

prepararPedido()
