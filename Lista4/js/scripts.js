//exercício1
function exe1(){
    let numeros = []
    for(let i=0; i<6; i++){
        //inserir número no vetor
        numeros.push(Number(prompt(`Informe o elemento ${i}`)))
    }
    //calcula os pares e impares
    let pares = [] //guarda os números pares 
    let impares = [] //giarda os números ímpares
    for(let i=0; i<numeros.length; i++){
        if(numeros[i] % 2 == 0){ //par
            pares.push(numeros[i])
        }
        else{ //ímpar
            impares.push(numeros[i])
        }
    }
    alert("Números pares " + pares + " e a qtde " + pares.length)
    //template string
    alert(`Números ímpares ${impares} e a quantidade ${impares.length}`)
}
//exercício2
function exe2(){
    let numeros = []
    for(let i=0; i<=7; i++){
        //inserir número no vetor
        numeros.push(Number(prompt(`Informe o elemento ${i}`)))
    }
    //calcula números divisíveis por 2, 3, 2e3
    let multiplos2 = [], multiplos3 = [], multiplos2e3 = []
    for(let i=0; i<numeros.length; i++){
       if(numeros[i] % 2 == 0 && numeros[i] % 3 == 0){
        multiplos2e3.push(numeros[i])
       }
       else if(numeros[i] % 2 == 0){
        multiplos2.push(numeros[i])
       }
       else if(numeros[i] % 3 == 0){
        multiplos3.push(numeros[i])
       }
    }
    alert(`Múltiplos de 2 ${multiplos2} Múltiplos de 3 ${multiplos3} e Múltiplos de 2 e 3 ${multiplos2e3}`)
}
//exercício3
function exe3(){
    //cadastra código e qtde em estoque
    let codigos = [], estoque = [] //declara os vetores
    for(let i=0; i<3; i++){
        codigos.push(prompt(`Informe o código do produto`))
        estoque.push(Number(prompt(`Informe a quantidade em estoque`)))
    }
    //comprando...
    let cliente
    do {
        let cliente = Number(prompt(`Informe o código do cliente`))
        let codigo = prompt(`Informe o código do produto para compra`)
        let qtde = Number(prompt(`Informe a qtde do produto para compra`))
        //procura para ver se o produto existe (ou é feito um 'for' procurando ou é feita uma 'função')
        //o códigos é um vetor
        let posicao = codigo.indexOf(codigo)
        if (posicao == -1){
            alert(`Código ${codigo} inexistente`)
        }
        else {//produto existe
            //tem em estoque o suficiente
            if (estoque[posicao]>=qtde){
                //atualiza o estoque
                estoque[posicao] = estoque[posicao] - qtde
                alert(`Pedido atendido. Obrigado e volte sempre.`)
            }
            else{
                alert(`Não temos estoque suficiente dessa mercadoria.`)
            }
        }
        cliente = Number(prompt(`Informe código do novo cliente. Digite 0 para encerrar.`))
    }//fecha o do
    while(cliente != 0)
    alert(`${codigos} ${estoque}`)
}