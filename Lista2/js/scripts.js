//exercício1
function exe1() {
    //recupera os dados de usúario
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)
    //calcular a média
    let media = (nota1 + nota2 + nota3 + nota4) / 4

    let status="";
    if (media >= 7) {
        status="Aprovado(a)";
    } else {
        status="Reprovado(a)";
    }
    document.getElementById("media").innerText = "A média do(a) aluno(a) é: " + media + " status: " + status
}
//exercício2
function exe2() {
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let media = (nota1 + nota2) / 2
    let status = "";
    if (media >= 7.0 && media <= 10.0) {
        status = "Aprovado(a)";
    } else if (media >= 3.0 && media < 7.0) {
        status = "Exame";
    } else if (media >= 0.0 && media < 3.0) {
        status = "Reprovado(a)";
    }
    document.getElementById("media").innerText = "A média do(a) aluno(a) é: " + media + " status: " + status
}
//exercício3
function exe3() {
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    //verificar menor número
    let menorNumero = nro1 < nro2 ? nro1 : nro2
    document.getElementById("resultado").innerText = "O menor número é: " + menorNumero
}
//exercício4
function exe4() {
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let nro3 = Number(document.getElementById("nro3").value)
    let maiorNumero = nro1 > nro2 ? (nro1 > nro3 ? nro1 : nro3) : (nro2 > nro3 ? nro2 : nro3) 
    document.getElementById("resultado").innerText = "O maior número é: " + maiorNumero
}
//exercício5
function exe5() {
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let selecao = Number(document.getElementById("selecao").value)
    switch (selecao) {
        case 1: document.getElementById("resultado").innerText = (nro1 + nro2) / 2
        break

        case 2: if (nro1 >= nro2){
            document.getElementById("resultado").innerText = nro1 - nro2
        }
        else{
            document.getElementById("resultado").innerText = nro1 - nro2
        }
        break

        case 3: document.getElementById("resultado").innerText = nro1 * nro2
        break

        case 4: if (nro2 != 0){
            document.getElementById("resultado").innerText = nro1 / nro2
        }
        else{
            document.getElementById("resultado").innerText = "Divisão por zero." 
        }
    }
}
//exercício6
function exe6() {
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let selecao = Number(document.getElementById("selecao").value)
    switch (selecao) {
        case 1: //o primeiro número elevado ao segundo
            let potencia = nro1 ** nro2
            document.getElementById("resultado").innerText = nro1 ** nro2
            break

        case 2: //raiz quadrada de cada um dos números
            let raizQuadradaNro1 = nro1 ** 0.5
            let raizQuadradaNro2 = nro2 ** 0.5
            document.getElementById("resultado").innerText = `Raiz quadrada de ${nro1}: ${raizQuadradaNro1} 
            Raiz quadrada de ${nro2}: ${raizQuadradaNro2}`
            break

        case 3: //raiz cúbica de cada um dos números
            let raizCubicaNro1 = nro1 ** (1/3)
            let raizCubicaNro2 = nro2 ** (1/3)
            document.getElementById("resultado").innerText = `Raiz cúbica de ${nro1}: ${raizCubicaNro1} 
            Raiz cúbica de ${nro2}: ${raizCubicaNro2}`
            break
        
        default: //caso de erro para opção inválida
            document.getElementById("resultado").innerText = "Digite uma das opções: 1, 2 ou 3." 
            break
    }
}
//exercício7
function exe7() {
    //salário inserido pelo usuário
    let salario = parseFloat(document.getElementById("salario").value)
    if (salario < 500) {
        let aumento = salario * 0.30
        let salarioReajustado = salario + aumento
        document.getElementById("resultado").innerText = "Valor do salário com reajuste de 30%: R$ " + salarioReajustado.toFixed(2)

    } else {
        document.getElementById("resultado").innerText = "O(A) colaborador(a) não tem direito ao aumento."
    }
}
//exercício8
function exe8() {
    //salário inserido pelo usuário
    let salario = parseFloat(document.getElementById("salario").value)
    if (salario <= 300) {
        let aumento = salario * 0.35 //aumento de 35%
        let salarioReajustado = salario + aumento
        document.getElementById("resultado").innerText = "Valor do salário com reajuste de 35%: R$ " + salarioReajustado.toFixed(2)

    } else {
        let aumento = salario * 0.15 //aumento de 15%
        let salarioReajustado = salario + aumento
        document.getElementById("resultado").innerText = "Valor do salário com reajuste de 15%: R$ " + salarioReajustado.toFixed(2)
    }
}
//exercício9
function exe9() {
    //recebendo saldo médio inserido pelo cliente
    let saldo = parseFloat(document.getElementById("saldo").value)

    //verificando se o valor inserido é válido
    if (isNaN(saldo) || saldo <= 0) {
        document.getElementById("resultado").innerText = "Por favor, insira um saldo médio válido."
        return
    }

    //calculando o crédito com base no saldo médio
    let credito

    if (saldo > 400) {
        credito = saldo * 0.30
        document.getElementById("resultado").innerText = "Saldo médio: R$ " + saldo.toFixed(2) + "\nCrédito concedido: R$ " + credito.toFixed(2)
    } else if (saldo >= 300) {
        credito = saldo * 0.25
        document.getElementById("resultado").innerText = "Saldo médio: R$ " + saldo.toFixed(2) + "\nCrédito concedido: R$ " + credito.toFixed(2)
    } else if (saldo >= 200) {
        credito = saldo * 0.20
        document.getElementById("resultado").innerText = "Saldo médio: R$ " + saldo.toFixed(2) + "\nCrédito concedido: R$ " + credito.toFixed(2)
    } else {
        credito = saldo * 0.10
        document.getElementById("resultado").innerText = "Saldo médio: R$ " + saldo.toFixed(2) + "\nCrédito concedido: R$ " + credito.toFixed(2)
    }
}
//exercicio10
function exe10() {
    let custoFabrica = parseFloat(document.getElementById("custoFabrica").value)

    //verificando se o valor inserido é válido
    if (isNaN(custoFabrica) || custoFabrica <= 0) {
        document.getElementById("resultado").innerText = "Por favor, insira um custo de fábrica válido."
        return
    }

    //variáveis para calcular o distribuidor e impostos
    let distribuidor, impostos

    //verificando o intervalo do custo de fábrica e calculando distribuidor e impostos
    if (custoFabrica <= 12.000) {
        distribuidor = custoFabrica * 0.05 //5% do custo de fábrica
        impostos = 0 //isento de impostos
    } else if (custoFabrica <= 25.000) {
        distribuidor = custoFabrica * 0.10 //10% do custo de fábrica
        impostos = custoFabrica * 0.15 //15% de impostos
    } else {
        distribuidor = custoFabrica * 0.15 //15% do custo de fábrica
        impostos = custoFabrica * 0.20 //20% de impostos
    }
    //calculando o preço ao consumidor
    let precoConsumidor = custoFabrica + distribuidor + impostos

    //exibindo o resultado
    document.getElementById("resultado").innerText = 
        "Custo de fábrica: R$ " + custoFabrica.toFixed(2) + 
        "\nDistribuidor: R$ " + distribuidor.toFixed(2) +
        "\nImpostos: R$ " + impostos.toFixed(2) + 
        "\nPreço ao consumidor: R$ " + precoConsumidor.toFixed(2)
}

