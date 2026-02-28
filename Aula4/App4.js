function assarPizzaCaos(numero){
    setTimeout(() =>{
        console.log(` Pizza ${numero} pronta!`)
    },1000);
}

// '' ou "" + nomevariavel / `${variavel} `

function prepararPedido(){
    console.log("iniciando pedido....");
    for(let i = 1; 1 <= 3; i++){
        assarPizzaCaos(i);
    }
    console.log("Pedido finalizado!");
}

prepararPedido();