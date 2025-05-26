//exercício1
function exe1(){
    let numeros = []
    for(let i=0; i<6; i++){
        //inserir número no vetor
        numeros.push(Number(prompt(`Informe o elemento ${i}`)))
    }
    //calcula os pares e ímpares
    let pares = [] //guarda os números pares 
    let impares = [] //guarda os números ímpares
    //numeros.lenght //retorna a qtde de elementos no vetor
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
    alert(`Números ímpares ${impares} e a qtde ${impares.length}`)
}
//exercício2
function exe2(){
    let numeros = []
    for(let i=0; i<=7; i++){
        //insere número no vetor
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
    let cliente = Number(prompt(`Informe o código do cliente`))
    do{
        let codigo = prompt(`Informe o código do produto para compra`)
        let qtde = Number(prompt(`Informe a qtde do produto para compra`))
        //procura para ver se o produto existe
        let posicao = codigos.indexOf(codigo)
        if (posicao == -1){ //produto não existe
            alert(`Código ${codigo} inexistente`)       
        }
        else { //produto existe
            //tem em estoque o suficiente
            if (estoque[posicao] >= qtde){
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
//exercício4
function exe4(){
    //declaração do vetor
    let vetor = []
    //usuário informa 15 números
    for(let i=0; i<15; i++){
        vetor.push(Number(prompt(`Informe o ${i+1}º número `)))
    }
    //verifica os números iguais a 30 e mostra a posição onde estão
    let posicoes = []
    for(let i=0; i<15; i++){
        if(vetor[i] == 30){
           posicoes.push(i)
        }
    }
    alert(`Número 30 encontrado nas posições ${posicoes}`)
}
//exercício5
function exe5(){
    // declaração dos vetores
    let logica = [], linguagem = []
    //entrada de dados
    for(let i=0; i<15; i++){
        logica.push(Number(prompt(`Informe o ${i+1}º aluno que faz a disciplina Lógica`)))
    }
    for(let i=0; i<10; i++){
        linguagem.push(Number(prompt(`Informe o ${i+1}º aluno que faz disciplina Linguagem`)))
    }
    //encontrar a intersecção
    let interseccao = []
    //percorre o vetor logica
    for(let i=0; i<15; i++){
        //indexOf() percorre o vetor linguagem e procura por logica[i]
        let posicao = linguagem.indexOf(logica[i])
        if (posicao != -1){ //caso encontrou
            interseccao.push(logica[i])
        }
    }
    alert(`Alunos que fazem Lógica e Linguagem ${interseccao}`)
}
//exercício6
function exe6(){
    let vendas = [], percentuais = [], nomes = [], comissao =[]
    //entrada de dados
    for(let i=0; i<3; i++){
        nomes.push(prompt(`Informe o nome do ${i+1}º vendedor`))
        vendas.push(Number(prompt(`Informe total vendido pelo ${i+1}º vendedor`)))
        percentuais.push(Number(prompt(`Informe percentual de vendas do ${i+1}º vendedor`)))
        //calcula a comissão
        comissao.push((vendas[i] * percentuais[i]) / 100)
    }
    //relação dos vendedores e os valores a receber
    let relatorio = ''
    for(let i=0; i<3; i++){
        relatorio += `\nVendedor: ${nomes[i]} vai receber ${comissao[i]}`
    }
    alert(relatorio)
    //total das vendas de todos os vendedores
    let somaVendas = 0
    for(let i=0; i<3; i++){
        somaVendas = somaVendas + vendas [i]
    }
    alert(`Total de vendas ${somaVendas.toFixed(2)}`)
    //calcula o maior e menor valor de comissão
    let maior = comissao[0] //primeiro é o maior
    let menor = comissao[0] //primeiro é o menor
    for(let i=0; i<3; i++){
        if (comissao[i] > maior){
            maior = comissao[i]
        }
        if (comissao[i] < menor){
            menor = comissao[i]
    }
}
let indiceMaior = comissao.indexOf(maior) //posição do maior na comissão
alert(`${nomes[indiceMaior]} vai receber maior comissão de ${maior}`)
let indiceMenor = comissao.indexOf(menor) //posição do menor na comissão
alert(`${nomes[indiceMenor]} vai receber menor comissão de ${menor}`)
}
//exercício7
function exe7(){
    let vetor = []
    for(let i=0; i<10; i++){
        vetor.push(Number(prompt(`Informe o número ${i}º`)))
    }
    //conta os negativos e soma os positivos
    let conta = 0
    let soma = 0
    for(let i=0; i<10; i++){
        if(vetor[i] < 0){
            conta++
        }
        else{
            soma += vetor[i]
        }
    }
    alert(`Contagem de negativos ${conta} e soma dos positivos ${soma}`)
}
//exercício8
function exe8(){
    let nomes = [], medias = []
    //entrada de dados dos 7 alunos
    for(let i=0; i<7; i++){
        nomes.push(prompt(`Informe o nome do ${i+1}º aluno`))
        medias.push(Number(prompt(`Informe a média do ${i+1}º aluno`)))
    }
    //calcular a maior média (sem empates)
    let maior = medias[0]
    for(let i=1; i<7; i++){
        if (medias[i] > maior) {
            maior = medias[i]
        }
    }
    //nome do aluno com a maior média
    let posicao = medias.indexOf(maior)
    alert(`O nome do aluno com a maior média ${maior} é ${nomes[posicao]}`)
    //calcular a nota necessária no exame final
    for(let i=0; i<7; i++){ //percorre o vetor
        if(medias[i] < 7){ //ficou para exame final
            //nota necessária sabendo que média deve ser no mínimo 5
            alert(`${nomes[i]} precisa tirar ${10-medias[i]}`)
        }
    }
}
//exercício9
function exe9(){
    let nomes = [], codigos = [], precos = []
    //entrada de dados dos 5 produtos
    for(let i=0; i<10; i++){
        nomes.push(prompt(`Informe o nome do ${i+1}º produto:`))
        codigos.push(Number(prompt(`Informe o código do ${i+1}º produto:`)))
        precos.push(Number(prompt(`Informe o preço do ${i+1}º produto:`)))
        // let x=(int) (Math.random() * 10)
    }
    //gerar o relatório com os novos preços
    for(let i=0; i<10; i++){
        let novoPreco

        if (codigos[i] % 2 == 0 && precos[i] > 1000){
            novoPreco = precos[i] + precos[i] * 20/100 //aumento de 20%
        } 
        else if (codigos[i] % 2 == 0){
            novoPreco = precos[i] + precos[i] * 15/100 //aumento de 15%
        } 
        else if (precos[i] > 100){
            novoPreco = precos[i] + precos[i] * 10/100 //aumento de 10%
        }
        else{
            novoPreco = precos[i]
        }
        alert(`${nomes[i]} - ${codigos[i]} - ${precos[i]} - ${novoPreco}`)
    }
}
//exercício10
function exe10(){
    let vetor1 = [], vetor2 = []
    let vetorR1 = [], vetorR2 = []
    //entrada de dados
    for(let i=0; i<10; i++){
        vetor1.push(Number(prompt(`Informe o ${i+1}º elemento do vetor 1`)))
    }
    for(let i=0; i<5; i++){
        vetor2.push(Number(prompt(`Informe o ${i+1}º elemento do vetor 2`)))
    }
    //calcular o vetor resultante 1
    //calcular a soma dos elementos do vetor 2
    let somaVet2 = 0
    for(let i=0; i<5; i++){
        somaVet2 += vetor2[i]
    }
    //criar o vetor resultante 1
    for(let i=0; i<10; i++){
        if(vetor1[i] % 2 == 0){
            vetorR1.push(vetor1[i] + somaVet2)
        }
    }
    alert(`Vetor resultante 1 ${vetorR1}`)
    //calcular o vetor resultante 2
    for(let i=o; i<10; i++){ //para cada elemento do vetor 1
        if(vetor1[i] % 2 == 1){ //verifica se o elemento é ímpar
            let qtdeDivisores = 0
            for(let j=0; j<5; j++){ //para cada elemento do vetor 2
                if(vetor1[i] % vetor2[j] == 0){ //encontrou um divisor
                    qtdeDivisores++ //conta +1 nos divisores
                }
            }
            vetorR2.push(qtdeDivisores) //adiciona contador no vetorR2
        }
    }
    alert(`Vetor resultante 2 ${vetorR2}`)
}
//exercício11 (Vetor com array 'objeto')
function exe11(){
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
//exercício12
function exe12(){ //vetor com o array 'objeto'
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
//exercício13
function exe13(){
    let vetor = []
    for(let i=0; i<3; i++){
        let objeto = {
            nomes:prompt(`Informe o nome do ${i+1}º produto:`),
            codigos:Number(prompt(`Informe o código do ${i+1}º produto:`)),
            precos:Number(prompt(`Informe o preço do ${i+1}º produto:`))
        }
        vetor.push(objeto)
    }
    //gerar o relatório com os novos preços
    for(let i=0; i<3; i++){
        let novosPrecos

        if (vetor[i].codigos % 2 == 0 && vetor[i].precos > 1000){
            novosPrecos = vetor[i].precos + vetor[i].precos * 20/100 //aumento de 20%
        } 
        else if (vetor[i].codigos % 2 == 0){
            novosPrecos = vetor[i].precos + vetor[i].precos * 15/100 //aumento de 15%
        } 
        else if (vetor[i].codigos > 100){
            novosPrecos = vetor[i].precos + vetor[i].precos * 10/100 //aumento de 10%
        }       
    }
  relatorio += `Produto: ${vetor[i].nomes} - Código: ${vetor[i].codigos} - Preço: ${vetor[i].precos} - Novos Preços: ${vetor[i].novosPrecos}`
}
//exercício14
function exercício14(){ //exercício da prova no 1º bimestre
    let idade, altura, peso, raca, pelos
    let item1 = 0, item3 = 0, item4 = 0
    let somaIdade = 0, contaAltura = 0
    for(let i = 1; i<=10; i++){
        idade = Number(prompt(`Informe a idade (em anos)`))
        altura = Number(prompt(`Informe a altura (em metros)`))
        peso = Number(prompt(`Informe o peso (em kilos)`))
        do {
            raca = prompt(`Informe a raça V – vira lata, L - Labrador, P - Poodle`).toUpperCase()
        }
        while (raca != 'V' && raca != 'L' && raca != 'P') 
        do {
            pelos = prompt(`Informe cor do pêlo P - preto, C - castanho, L - loiro, B - branco`)
        }
        while (pelos != 'P' && pelos != 'C' && pelos != 'L' && pelos != 'B')
        
        if (idade > 10 && peso < 10){
            item1++
        }
        if (raca == 'L'){
            item3++
        }
        if (pelos == 'B' && raca != 'V'){
            item4++
        }
        if (altura < 0.5){
            somaIdade += idade
            contaAltura++
        }
    }
    document.getElementById("prova").innerHTML = `Item 1 ${item1} Item 2 ${somaIdade/contaAltura} Item 3 ${item3} e Item 4 ${item4}`
}

    