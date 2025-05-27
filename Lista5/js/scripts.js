//exercício3 (Vetor com array 'objeto')
function exe3(){
    //cadastra código e qtde em estoque
    let vetor = []
    for(let i=0; i<3; i++){
        //cria objeto
        let objeto = {
            codigos:prompt(`Informe o código do produto.`),
            estoque:Number(prompt(`Informe a quantidade em estoque.`)),
            preco:Number(prompt(`Informe o preço do produto.`))
        }
        //adiciona o objeto no vetor
        vetor.push(objeto)
    }
    //comprando...
    let cliente = Number(prompt(`Informe o código do cliente.`))
    do{
        let codigo = prompt(`Informe o código do produto para compra.`)
        let qtde = Number(prompt(`Informe a quantidade do produto para compra.`))
        //procura para ver se o vetor existe
        let produtoEncontrado
        let i
        for(i=0; i<3; i++){
            if(vetor[i].codigos == codigo){ //produto encontrado
                produtoEncontrado = vetor[i] //guarda produto em produtoEncontrado
                break //pára de procurar (significa sair do 'for')
            }
        }
        if(i==3){ //produto não existe
            alert(`Código ${codigo} inexistente.`)
        }
        else{ //produto existe
            //tem em estoque o suficiente
            if(produtoEncontrado.estoque >= qtde){
                //atualiza o estoque
                produtoEncontrado.estoque -= qtde
                alert(`Pedido atendido. Obrigado e volte sempre.`)
            }
            else{
                alert(`Não temos estoque suficiente dessa mercadoria.`)
            }
        }
        cliente = Number(prompt(`Informe o código do novo cliente. Digite 0 para encerrar.`))
    } //fecha o do
    while(cliente != 0)
    console.log(vetor)
}
//exercício6
function exe6(){ //vetor com o array 'objeto'
    let vetor = []
    for(let i=0; i<3; i++){
        //cria o objeto
        let objeto = {
            nomes:prompt(`Informe o nome do ${i+1}º vendedor`),
            vendas:Number(prompt(`Informe total vendido pelo ${i+1}º vendedor`)),
            percentuais:Number(prompt(`Informe percentual de vendas do ${i+1}º vendedor`))
        }
        //calcula a comissão (vamos utilizar o ponto '.' para acessar o atributo do objeto)
        objeto.comissao = (objeto.vendas * objeto.percentuais)/100
        //adiciona o objeto do vetor
        vetor.push(objeto)
    } //fecha o 'for'
    //relação dos vendedores e os valores a receber
    let relatorio = ''
    for(i=0; i<3; i++){
        relatorio += `Vendedor: ${vetor[i].nomes} vai receber ${vetor[i].comissao}`
    }
    alert(relatorio)
    //total das vendas de todos os vendedores
    let somaVendas = 0
    for(let i=0; i<3; i++){
        somaVendas = somaVendas + vetor[i].vendas
    }
    alert(`Total de vendas ${somaVendas.toFixed(2)}`)
    //calcula o maior e menor valor de comissão
    let objetoMaior = vetor[0] //primeiro funcionário é o maior
    let objetoMenor = comissao[0] //primeiro funcionário é o menor
    for(let i=0; i<3; i++){
        if(vetor[i].comissao > objetoMaior.comissao){
            objetoMaior = vetor[i]
        }
        if(vetor[i].comissao < objetoMenor.comissao){
            objetoMenor = vetor[i]
    }
}
alert(`${objetoMaior.nomes} vai receber maior comissão de ${objetoMaior.comissao}`)
alert(`${objetoMenor.nomes} vai receber menor comissão de ${objetoMenor.comissao}`)
}
//exercício9
function exe9(){
    let vetor = []
    for(let i=0; i<3; i++){
        let objeto = {
            nome:prompt(`Informe o nome do ${i+1}º produto:`),
            codigo:Number(prompt(`Informe o código do ${i+1}º produto:`)),
            preco:Number(prompt(`Informe o preço do ${i+1}º produto:`)),
            novoPreco:0
        }
        vetor.push(objeto)
    }
    //gerar o relatório com os novos preços
    for(let i=0; i<3; i++){
        if (vetor[i].codigo % 2 == 0 && vetor[i].preco > 1000){
            vetor[i].novoPreco = vetor[i].preco + vetor[i].preco * 20/100 //aumento de 20%
        } 
        else if (vetor[i].codigo % 2 == 0){
            vetor[i].novoPreco = vetor[i].preco + vetor[i].preco * 15/100 //aumento de 15%
        } 
        else if (vetor[i].codigo > 100){
            vetor[i].novoPreco = vetor[i].preco + vetor[i].preco * 10/100 //aumento de 10%
        } 
        else{
            vetor[i].novoPreco = vetor[i].preco
        } 
        alert(`Produto: ${vetor[i].nome} - Código: ${vetor[i].codigo} - Preço: ${vetor[i].preco} - Novo Preço: ${vetor[i].novoPreco}`)
    }     
}
  