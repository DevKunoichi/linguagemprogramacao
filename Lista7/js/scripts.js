//exemplo1
function entrada(mat){ //será 3 x 3
    for(let i=0; i<3; i++){
        mat[i] = [] //cria cada linha da matriz
        for(let j=0; j<3; j++){
            mat[i][j] = Number(prompt(`Informe o elemento [${i}][${j}] da matriz.`))
        }
    }
}
function calculaSomaDiagonalPrincipal(mat){
    let soma = 0
    for(let i=0; i<3; i++){ //para cada linha
        for(let j=0; j<3; j++){ //para cada coluna
           if (i == j){
                soma += mat[i][j]
            }
        }
    }
    return soma //função vai retornar a soma
}
function exemplo(){
    let mat = []
    entrada(mat)
    alert(`A soma da diagonal principal é ${calculaSomaDiagonalPrincipal(mat)}`)
}
exemplo()

//exercício1
function entrada(mat){
    for (let i=0; i<3; i++){
         mat[i] = []
         for(let j=0; j<3; j++){
            mat[i][j] = parseInt(Math.random() * 10) + 15 //gera número aletório de 15 a 24
         }
    }
}
function somaEntre15e20(mat){
    let soma = 0
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            if(mat[i][j] >= 15 && mat[i][j] <= 20){
                soma++
            }
        }
    }
    return soma
}
function exibeMatriz(mat){
    let saida = ''
    for(let i=0; i<mat.length; i++){
        saida = saida + '\n'
        for(let j=0; j<mat[i].length; j++){
            saida = saida + " " + mat[i][j]
        }
    }
    alert(saida)
}
function exe1(){
    let mat = []
    entrada(mat)
    alert(`A soma dos números entre 15 e 20 é ${somaEntre15e20(mat)}.`)
    exibeMatriz(mat)
}
exe1()

//exercício2
function entrada(mat){
    for(let i=0; i<2; i++){
        mat [i] = []
        for(let j=0; j<4; j++){
            mat[i][j] = Math.floor(Math.random() * 21) //gera números entre 0 e 20
        }
    }
}
function contaElementosEntre12e20(mat){
    for (let i=0; i<2; i++){ 
        let conta = 0 //inicializa o contador para cada linha
        for (let j=0; j<4; j++){ 
            if(mat[i][j] >= 12 && mat[i][j] <= 20){
                conta++
            }
        }
        alert(`A quantidade de elementos entre 12 e 20 na linha ${i} é ${conta}.`)
    }
}
function exibeMatriz(mat){
    let saida = ''
    for(let i=0; i<mat.length; i++){
        saida = saida + '\n'
        for(let j=0; j<mat[i].length; j++){
            saida = saida + " " + mat[i][j]
        }
    }
    alert(saida)
}
function mediaElementosPares(mat){
    let soma = 0
    let qtde = 0
    for(let i=0; i<mat.length; i++){
        for(let j=0; j<mat[i].length; j++){
            if(mat[i][j] % 2 == 0){
                soma = soma + mat[i][j]
                qtde++
            }
        }   
    }
    return soma / qtde 
}
function exe2(){
    let mat = []
    entrada(mat)
    exibeMatriz(mat)
    contaElementosEntre12e20(mat)
    mediaElementosPares(mat)
    alert(`A média dos elementos pares é ${mediaElementosPares(mat)}.`)
}
exe2()

//exercício3
function entrada(mat){
    for(let i=0; i<6; i++){
        mat[i] = []
        for(let j=0; j<3; j++){
            mat[i][j] = Math.floor(Math.random() * 21)
        }
    }
}
function calculaMaiorMenor(mat){
    //inicia a variável maior e menor como sendo o 1° elemento 
    let maior = mat[0][0], menor = mat[0][0]
    let iMaior = 0, jMaior = 0, iMenor = 0, jMenor = 0
    //busca por elementos maiores e menores
    for(let i=0; i<6; i++){
        for(let j=0; j<3; j++){
            if(mat[i][j] > maior){
               maior = mat[i][j]
               iMaior = i
               jMaior = j
            }
            if(mat[i][j] < menor){
                menor = mat[i][j]
                iMenor = i
                jMenor = j 
            }
        }
    }
    alert(mat)
    alert(`O maior ${maior} está na posição [${iMaior}][${jMaior}], e o menor ${menor} está na posição [${iMenor}][${jMenor}].`)
}
function exe3(){
    let mat = []
    entrada(mat)
    calculaMaiorMenor(mat)
}
exe3()





