//exemplo1
function entrada(mat){
    //será 3 x 3
    for(let i=0; i<3; i++){
        mat[i] = [] //cria cada linha da matriz
        for(let j=0; j<3; j++){
            mat[i][j] = Number(prompt(`Informe o elemento [${i}][${j}] da matriz.`))
        }
    }
}
function calculaSomaDiagonalPrincipal(mat){
    let soma = 0
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
           if (i == j){
                soma += mat[i][j]
            }
        }
    }
    return soma
}
function exemplo(){
    let mat = []
    entrada(mat)
    alert(`A soma da diagonal principal é ${calculaSomaDiagonalPrincipal(mat)}`)
}
exemplo()

//exercício1
function exe1(mat){
    for (let i=0; i<3; i++){
         mat[i] = []
         for(let j=0; j<3; j++){
            mat[i][j] = parseInt(Math.random() * 10) + 15 //gera número aletório 
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
    for(let i=0; i<mat.lenght; i++){
        saida = saida + '\n'
        for(let j=0; j<mat[i].lenght; j++){
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

