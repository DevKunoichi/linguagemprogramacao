//função1 
function entrada(vet){ //vet = vetor
    vet[0] = 'A'
    vet[1] = 'B'
    vet[2] = 'C'
}
function processa(vet){
    vet[0] = vet[0] + 'U'
    vet[1] = vet[1] + 'U'
    vet[2] = vet[2] + 'U'
}
function saida(vet){
    alert(`Saída de dados ${vet}`)
}
function main(){
    let vetor = []
    //passando vetor como parâmetro da função
    //vet vai receber uma referência de vetor (passagem de parâmetro por referência)
    entrada(vetor) 
    processa(vetor)
    saida(vetor)
}
main()
//função2
function entrada(va){
    va = va + 10
}
function processa(va){
    va = va + 10
}
function saida(va){
    alert(va)
}
function main(){
    let a = 10
    //passando um número como parâmetro da função
    //vai receber o valor de a (passagem de parâmetro por valor)
    entrada(a)
    processa(a)
    saida(a)
}
main()
//exercício 3 utilizando 'função'
function entrada(vet){
    for(let i=0; i<3; i++){
        //cria objeto
        let objeto = {
            codigo: prompt(`Informe o código do produto`),
            estoque: Number(prompt(`Informe a qtde em estoque`)),
            preco: Number(prompt(`Informe o preço do produto`))
        }
        //adiciona objeto no vetor
        vet.push(objeto)
    }
}
function compra(vet){
        //comprando ...
    let cliente = Number(prompt(`Informe código do cliente`))
    do {
        let codigo = prompt(`Informe código do produdo para compra`)
        let qtde = Number(prompt(`Informe a qtde do produto para compra`))
        //procura pra ver se o produto existe
        let produtoEncontrado
        let i
        for(i=0; i<3; i++){
            if (vet[i].codigo == codigo){ //produto encontrado
                produtoEncontrado = vet[i] //guarda produto em produtoEncontrado
                break //pára de procurar - sair do for
            }
        }
        if (i == 3){ //produto não existe
            alert(`Código ${codigo} inexistente`)
        }
        else { //produto existe
            //tem em estoque suficiente
            if ( produtoEncontrado.estoque >= qtde){
                //atualiza o estoque
                produtoEncontrado.estoque -= qtde
                alert(`Pedido atendido. Obrigado e volte sempre`)
            }
            else { 
                alert(`Não temos estoque suficiente desta mercadoria`)
            }
        }
        cliente = Number(prompt(`Informe código do novo cliente. Digite 0 para encerrar`))
    } //fecha o do
    while (cliente != 0)
}
function saida(vet){
    for(let i=0; i<vet.length; i++){
        alert(`Código ${vet[i].codigo} Estoque ${vet[i].estoque} Preco: ${vet[i].preco}`)
    }
}
function exe3(){
    //cadastra código e qtde em estoque
    let vetor = []
    entrada(vetor)
    compra(vetor)
    saida(vetor)
}
//exercício 6 utilizando 'função'
function exe6(){
    //vet recebe vetor (vet = vetor)
    //entrada de dados
    for(let i=0; i<3; i++){
        //cria o objeto
        let obj = {
            nome: prompt(`Informe nome do ${i+1}o vendedor`),
            vendas: Number(prompt(`Informe total vendido pelo ${i+1}o vendedor`)),
            percentual: Number(prompt(`Informe percentual de vendas do ${i+1}o vendedor`))
        }
        //calcula a comissão -> vamos utilizar o . para acessar o campo/atributo do objeto
        obj.comissao = (obj.vendas * obj.percentual) / 100
        //adiciona o objeto no vetor
        vetor.push(obj)
    } //fecha o for
}
function gerarRelatorio(vet){
    //relação dos vendedores e os valores a receber
    let relatorio = ''
    for(let i=0; i<3; i++){
        relatorio += `\nVendedor: ${vet[i].nome} vai receber ${vet[i].comissao}`
    }
    alert(relatorio)
}
function totalVendas(vet){
    //total das vendas de todos os vendedores
    let somaVendas = 0
    for(let i=0; i<3; i++){
        somaVendas = somaVendas + vet[i].vendas
    }
    alert(`Total de vendas ${somaVendas.toFixed(2)}`)
}
function menorMaiorComissao(vet){
    // calcula o maior e menor valor de comissão
    let objMaior = vet[0] // primeiro funcionário é o maior
    let objMenor = vet[0] // primeiro funcionário é o menor
    for(let i=1; i<3; i++){
        if (vet[i].comissao > objMaior.comissao){
            objMaior = vet[i]
            }
            if (vet[i].comissao < objMenor.comissao){
            objMenor = vet[i]
            }
        }
        alert(`${objMaior.nome} vai receber maior comissão de ${objMaior.comissao}`)
        alert(`${objMenor.nome} vai receber menor comissão de ${objMenor.comissao}`)
}
function exe6(){
    let vetor = []
    entrada(vetor)
    gerarRelatorio(vetor)
    totalVendas(vetor)
    menorMaiorComissao(vetor)
}
exe6()

   
    
    
    
