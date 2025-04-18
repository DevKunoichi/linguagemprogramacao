//exercício1
function exe1() {
    // recupera os dados do usuário
    let a = Number(document.getElementById("a").value)
    let b = Number(document.getElementById("b").value)
    let c = Number(document.getElementById("c").value)
    let d = Number(document.getElementById("d").value)

    let i = 1 // variável que conta quantas vezes o laço vai se repetir
    let aux // será utilizada nas trocas das variáveis a, b, c e d
    while (i <= 3) {
        if (a > b) {
            aux = a; a = b; b = aux;
        }    
        if (b > c) {
            aux = b; b = c; c = aux;
        }
        if (c > d) {
            aux = c; c = d; d = aux;
        }
        i++ // incrementa i
    }
    document.getElementById("ordena").innerText = `Ordem crescente ${a} ${b} ${c} ${d} e ordem decrescente ${d} ${c} ${b} ${a}`
}
//exercício2
function exe2() {
    let preco = 5.0
    let qtde = 120
    const despesa = 200
    let lucro // guarda o lucro da peço de teatro
    let saida = ""
    while (preco >= 1.0) {
        lucro = (preco * qtde) - despesa
        saida = saida + `<tr> <td> ${preco} </td> <td> ${qtde} </td> <td>${despesa} </td> <td> ${lucro} </td> </tr>`
        preco = preco - 0.50
        qtde = qtde + 26
    }
    document.getElementById("tabela").innerHTML = saida
}
//exercício3
function exe3() {
    let faixa1 = 0, faixa2 = 2, faixa3 = 0, faixa4 = 0, faixa5 = 0
    let idade 
    // estrutura de repetição for
    // let i = 1 variável que conta quantas vezes o laço vai se repetir
    // i <= 8 será executado toda vez e antes de entrar no loop
    // i++ será executado antes de ir para a próxima iteração
    for (let i = 1; i <= 8; i++) {
        idade = Number(prompt(`Informe a idade ${i}`))
        if (idade >= 0 && idade <= 15){
            faixa1++
        }
        else if (idade > 15 && idade <= 30){
            faixa2++
        }
        else if (idade > 30 && idade <= 45){
            faixa3++
        } 
        else if (idade > 45 && idade <= 60){
            faixa4++        
        } 
        else if (idade > 60){
            faixa5++
        }
        else {
            alert(`Idade negativa`)
        }
    }
     document.getElementById("resultado").innerHTML = 
     `F1: ${faixa1} <br/>F2: ${faixa2} <br/>F3: ${faixa3} <br/>F4: ${faixa4} <br/>F5: ${faixa5} <br/> %F1: ${faixa1/0.08}% <br/> %F5: ${faixa5/0.08}%` 
}
//exercício4
function exe4() {
    // recupera o número fornecido pelo usuário
    let numero = Number(document.getElementById("numero").value)
    let resultado = ""
    // estrutura de repetição 'for' para calcular a tabuada do número
    for(let i = 0; i <= 10; i++){
        resultado += `${numero} x ${i} = ${numero * i} <br/>`
    } 
    document.getElementById("resultado1").innerHTML = resultado
}
//exercício5
function exe5() {
    let resultado = ""
    for(let numero = 1; numero <= 10; numero++){
        resultado += `Tabuada do ${numero} <br/>`
        for(let i = 0; i <= 10; i++){
            resultado += `${numero} x ${i} = ${numero * 1} <br/>`
        }
        resultado += "<br/>"
    }
    document.getElementById("resultado2").innerHTML = resultado
}
//exercício6
function exe6() {
    let codigo, valor, totalVista = 0, totalPrazo = 0
    for(let i = 1; i <= 5; i++){
        do { //vai permanecer no do... while enquanto o usuário não digitar V ou P
            codigo = prompt(`Digite V (à vista) ou P (a prazo)`).toUpperCase()
        }
        while (codigo != 'V' && codigo != 'P')
        valor = Number(prompt(`Digite o valor da transação`))
        if (codigo == 'V'){
            totalVista += valor
        }
        else {
            totalPrazo += valor
        }
    }
    document.getElementById("resultado").innerHTML = `Total à vista ${totalVista} Total à Prazo ${totalPrazo} total geral ${totalPrazo + totalVista} e valor da primeira parcela ${totalPrazo/3}`
}
//exercício7
function exe7() {
    let idade, altura, peso, idade50 = 0, idade10e20 = 0, somaAltura = 0, peso40 = 0
    for(let i = 1; i<= 3; i++){
        do {
            idade = Number(prompt(`Informe a idade`))
        }
        while (idade < 0)
        altura = Number(prompt(`Informe a altura`))
        peso = Number(prompt(`Informe o peso`))
        if (idade > 50){ //item 1
            idade50++
        }
        if (idade >= 10 && idade <= 20){ //item 2
            idade10e20++ //conta as pessoas com a idade entre 10 e 20
            somaAltura += altura
        }
        if (peso < 40){ //item 3
            peso40++
        }   
    }
    document.getElementById("resultado").innerHTML = `
    <br/> Item 1 ${idade50} 
    <br/> Item 2 ${idade10e20 > 0 ? (somaAltura / idade10e20).toFixed(2) : "n/a"} 
    <br/> Item 3 ${peso40}`
}
//exercício8
function exe8() {
    //declaração das variáveis
    let idade, altura, peso, olhos, cabelos
    let idade50Peso60 = 0, somaIdade = 0, qtdeAltura150 = 0
    let qtdeAzuis = 0, qtdeRuivo = 0
    //entrada e processamento de dados
    for(let i = 1; i <= 3; i++){
        idade = Number(prompt(`Informe a idade ${i}`))
        altura = Number(prompt(`Informe o peso`))
        do {
            cabelos = prompt(`Informe a cor dos cabelos`).toUpperCase()
        }
        while (cabelos != 'P' && cabelos != 'C' && cabelos != 'L' && cabelos != 'R')
        do {
            olhos = prompt(`Informe a cor dos olhos`).toUpperCase()
        }
        while (olhos != 'A' && olhos != 'P' && olhos != 'V' && olhos != 'C')
        //processamento
        if (idade > 50 && peso < 60){
            idade50Peso60++
        }
        if (altura < 1.50){
            somaIdade += idade
            qtdeAltura150++
        }
        if (olhos == 'A'){
            qtdeAzuis++
        }
        if (cabelos == 'R' && olhos != 'A'){
            qtdeRuivo++
        }
    }
    document.getElementById("resultado").innerHTML = `
        Item 1: ${idade50Peso60} pessoa(s) com mais de 50 anos e menos de 60kg <br/>
        Item 2: Média das idades (altura < 1.50): ${qtdeAltura150 > 0 ? (somaIdade / qtdeAltura150).toFixed(2) : "n/a"} <br/>
        Item 3: ${qtdeAzuis} pessoa(s) com olhos azuis <br/>
        Item 4: ${qtdeRuivo} ruivo(s) sem olhos azuis `
}
//exercício9
function exe9() {
    let idade, altura, peso
    let somaIdade = 0
    let qtdePeso90Altura150 = 0
    let qtdeAlturaMaior190 = 0
    let qtdeIdade1030Altura190 = 0

    for (let i = 1; i <= 3; i++) {
        do {
            idade = Number(prompt(`Informe a idade da pessoa ${i}:`))
        } while (idade < 0)

        do {
            peso = Number(prompt(`Informe o peso da pessoa ${i} (em kg):`))
        } while (peso <= 0)

        do {
            altura = Number(prompt(`Informe a altura da pessoa ${i} (em metros):`))
        } while (altura <= 0)

        somaIdade += idade //somar todas as idades

        if (peso > 90 && altura < 1.50) { //contar pessoas com peso > 90kg e altura < 1.50m
            qtdePeso90Altura150++
        }

        if (altura > 1.90) { //contar pessoas com mais de 1.90m e dentro disso, as com idade entre 10 e 30
            qtdeAlturaMaior190++
            if (idade >= 10 && idade <= 30) {
                qtdeIdade1030Altura190++
            }
        }
    }
    let mediaIdade = somaIdade / 3 //calcular média das idades

    let porcentagem = 0 // calcular porcentagem de pessoas entre 10 e 30 anos entre os que têm altura > 1.90m
    if (qtdeAlturaMaior190 > 0) {
        porcentagem = (qtdeIdade1030Altura190 / qtdeAlturaMaior190) * 100
    }
    document.getElementById("resultado").innerHTML = `
        Média das idades: ${mediaIdade.toFixed(2)} anos<br/>
        Quantidade com peso > 90kg e altura < 1.50m: ${qtdePeso90Altura150}<br/>
        Porcentagem com idade entre 10 e 30 anos entre os que têm mais de 1.90m: ${porcentagem.toFixed(2)}%
    `
}
//exercício10
function exe10() {
    let numero, somaPares = 0, somaPrimos = 0

    for (let i = 1; i <= 3; i++) {
        numero = Number(prompt(`Digite o ${i}º número:`))

        if (numero % 2 === 0) {
            somaPares += numero
        }

        if (ehPrimo(numero)) {
            somaPrimos += numero
        }
    }
    document.getElementById("resultado").innerHTML = `
        Soma dos pares: ${somaPares} <br/>
        Soma dos primos: ${somaPrimos}
    `
 }
    function ehPrimo(n) {
        if (n < 2) return false
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false
        }
        return true
}







        



            
    
    

