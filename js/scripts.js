function seguir() {
    alert(`Você agora está seguindo DevKunoichi.`)
}
// exercicio1
function exe1() {
    // vamos usar DOM para recuperar os dados do HTML
    // DOM - Document Object Model
    // converte texto para número - Number()
    let nro1 = Number (document.getElementById("nro1").value)
    let nro2 = Number (document.getElementById("nro2").value)
    // vamos fazer a subtração 
    let subtracao = nro1 - nro2
    // vamos mostrar o resultado ao usuário
    // alert("A subtração é "+ sub)
    document.getElementById("subtracao").innerText = "O resultado é: " + subtracao
}
//exercício2
function exe2() {
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let nro3 = Number(document.getElementById("nro3").value)
    let multiplicacao = nro1 * nro2 * nro3
    document.getElementById("multiplicacao").innerText = "O resultado é: " + multiplicacao
}
//exercício3
function exe3() {
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let divisao = nro1 / nro2
    if(nro2!==0)
    document.getElementById("divisao").innerText = "O resultado é: " + divisao
} 
//exercício4
function exe4() {
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let peso1 = 2
    let peso2 = 3
    //média ponderada
    let media = (nota1 * peso1 + nota2 * peso2) / (peso1 + peso2)
    document.getElementById("media").innerText = "A média ponderada é: " + media.toFixed(2)
}
//exercício5
function exe5() {
    let preco = Number(document.getElementById("preco").value)
    let desconto = preco * 0.10
    let novoPreco = preco - desconto
    document.getElementById("novoPreco").innerText = "O novo preço do produto é R$: " + novoPreco
}
//exercício6
function exe6() {
    let salarioFixo = Number(document.getElementById("salarioFixo").value)
    let valorVendas = Number(document.getElementById("valorVendas").value)
    let comissao = valorVendas * 0.04
    let salarioFinal = salarioFixo + comissao
    document.getElementById("salarioFinal").innerText = "Comissão: R$ " + comissao.toFixed(2) + "\nSalário Final: R$ " + salarioFinal.toFixed(2)
}
//exercício7
function exe7() {
    let peso = Number(document.getElementById("peso").value)
    let pesoAumentado = peso * 1.15
    let pesoReduzido = peso * 0.80
    document.getElementById("pesoAumentado").innerText = "Peso com aumento de 15% igual a: " + pesoAumentado + " kg"
    document.getElementById("pesoReduzido").innerText = "Peso com redução de 20% igual a: " + pesoReduzido + " kg"
}
//exercício8
function exe8() {
    let peso = Number(document.getElementById("peso").value)
    let pesoEmGramas = peso * 1000
    document.getElementById("pesoEmGramas").innerText = "O peso em gramas é: " + pesoEmGramas + " g"
}
//exercício9
function exe9() {
    let lado = Number(document.getElementById("lado").value)
    let area = lado * lado
    document.getElementById("area").innerText = "A área do quadrado é: " + area + " metros quadrados."
}
exercício10
function exe10() {
    let baseMaior = Number(document.getElementById("baseMaior").value)
    let baseMenor = Number(document.getElementById("baseMenor").value)
    let altura = Number(document.getElementById("altura").value)
    let area = ((baseMaior + baseMenor) * altura) / 2
    document.getElementById("area").innerText = "A área do trapézio é: " + area + " unidades quadradas."
}

