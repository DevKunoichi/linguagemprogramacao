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

   
    

