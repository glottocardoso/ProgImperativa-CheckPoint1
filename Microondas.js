function menu(prato, tempo){
    let padrao = 0
    switch(prato){
        case "Pipoca":
            padrao = 10
            break
        case "Macarrão":
            padrao = 8
            break
        case "Carne":
            padrao = 15
            break
        case "Feijão":
            padrao = 12
            break
        case "Brigadeiro":
            padrao = 8
            break
        default:
            padrao = -1
    }
    if (padrao == -1){
        console.log("Prato inexistente")
    }else if(tempo>=3*padrao){
        console.log("Kabum")
    }else if (tempo<padrao){
        console.log("Tempo insuficiente")
    }else if (tempo>2*padrao){
        console.log("A comida queimou")
    }else{
        console.log("Prato pronto, bom apetite")
    }
}

menu("Pipoca",10) //ok
menu("Macarrão",8) //ok
menu("Carne",15) //ok
menu("Feijão",12) //ok
menu("Brigadeiro",8) //ok

menu("Arroz",10) //prato inexistente

menu("Pipoca",21) //maior que 2x o necessário
menu("Macarrão",24) //3x o necessário
menu("Carne",14) //menor que o necessário