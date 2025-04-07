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
    // Obtendo e convertendo as idades para números
    const idades = Array.from({ length: 8 }, (_, i) => 
        parseInt(document.getElementById(`idade${i + 1}`).value) || 0
    )

    // Contadores para as faixas etárias
    let faixa1 = 0, faixa2 = 0, faixa3 = 0, faixa4 = 0, faixa5 = 0

    // Contando as idades nas faixas etárias
    idades.forEach(idade => {
        if (idade <= 15) faixa1++
        else if (idade <= 30) faixa2++
        else if (idade <= 45) faixa3++
        else if (idade <= 60) faixa4++
        else faixa5++
    })

    // Calculando porcentagens
    const porcentagemFaixa1 = ((faixa1 / idades.length) * 100).toFixed(2)
    const porcentagemFaixa5 = ((faixa5 / idades.length) * 100).toFixed(2)

    // Exibindo os resultados
    document.getElementById("resultado").innerHTML = `
        Faixa 1 (até 15 anos): ${faixa1} pessoas<br>
        Faixa 2 (16 a 30 anos): ${faixa2} pessoas<br>
        Faixa 3 (31 a 45 anos): ${faixa3} pessoas<br>
        Faixa 4 (46 a 60 anos): ${faixa4} pessoas<br>
        Faixa 5 (acima de 60 anos): ${faixa5} pessoas<br>
        Porcentagem da Faixa 1: ${porcentagemFaixa1}%<br>
        Porcentagem da Faixa 5: ${porcentagemFaixa5}%
    `
}