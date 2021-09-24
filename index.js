var peca1 = 0 
var peca2 = 0 
var opc 
var opcPeca = 0
var opcTotal = peca1 + peca1

var readLineSync = require('readLine-sync')
do{
    opc = parseInt(readLineSync.question("Escolha a opcao:\n\n"+
        "0 - Encerrar o sistema\n"+
        "1 - Acrescentar uma peca\n"+
        "2 - Apresentar quantidade total de pecas\n\n"))
switch(opc){
    case 0:
        console.log("\n voce escolheu encerrar o sistema ... :( \n")
        break

    case 1:
        opcPeca = parseInt(readLineSync.question("Qual peca deseja acrescentar?"))
        if (opcPeca ==1){
            peca1 = peca1 + 1
            break
        }else if (opcPeca ==2){
            peca2 = peca2 + 1 
            break
        }else{
            console.log("opcao invalida!")
            break
        }
case 2:
   opcTotal =  peca1 + peca2
    console.log("Total de peca 1 = " + peca1 + "\n")
    console.log("Total de peca 2 = " + peca2 + "\n")
    console.log("Total de todos os itens = " + opcTotal + "\n")
            break
        default:
            console.log("Opcao invalida , escolha entre 0 e 2.")

}

}while(opc != 0) 

