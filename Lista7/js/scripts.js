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

//exercício4
function entrada(mat, vet){
    for(let i=0; i<3; i++){
        mat[i] = []
        vet.push(prompt(`Informe o ${1+i}º nome: `))
        for(let j=0; j<3; j++){
            mat[i][j] = Number(prompt(`Informe a ${1+j}ª nota do(a) aluno(a) ${vet[i]}: `))
        }
    }
}
function calculaMedias(mat, vet){ //de 0 a 2.9(reprovado), de 3 a 5.9(exame) e maior que 6(aprovado)
   for(let i=0; i<3; i++){
        let soma = 0
        for(let j=0; j<3; j++){
            soma += mat[i][j]
        }
        let media = soma / 3
        let situacao
        if(media < 3){
            situacao = 'Reprovado(a)'
        }
        else if(media >= 3 && media < 6){
            situacao = 'Exame'
        }
        else{
            situacao = 'Aprovado(a)'
        }
        alert(`${vet[i]} teve média ${media}, portanto ${situacao}.`)
    }
}
function calculaMediaClasse(mat){
    let soma = 0
    for(let i=0; i<3; i++){
        for(j=0; j<3; j++){
            soma += mat[i][j]
        }
    }
    return (soma / 20)
}
function exe4(){
    let mat = []
    let vet = []
    entrada(mat, vet)
    calculaMedias(mat, vet)
    alert(`A média da classe é ${calculaMediaClasse(mat)}: `)
}
exe4()

//exercício5
function cadastra(mat, vet){
    for(let i=0;i<12;i++){
        mat[i] = [] // cria espaço na memória para cada vetor da matriz
        for(let j=0;j<4;j++){
            mat[i][j] = Number(prompt(`Informe as vendas na semana ${j+1} do mês ${vet[i]}`))    
        }
    }
}
function calculaTotalMes(mat, vet){
    for(let i=0;i<mat.length;i++){
        let soma = 0 // vamos iniciar um novo mês
        for(let j=0;j<mat[i].length;j++){
            soma = soma + mat[i][j]
        } 
        alert(`Total vendido em ${vet[i]} foi de ${soma}`)
    }
}
function calculaTotalSemana(mat){
    for(let j=0;j<4;j++){ // para cada semana
        let soma = 0
        for(let i=0;i<12;i++){ // para cada mês
            soma = soma + mat[i][j]
        }
        alert(`Total vendido na semana ${j} foi de ${soma}`)
    }
}
function calculaTotalAno(mat){
    let soma = 0
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<4;j++){
            soma += mat[i][j]
        }
    }
    return soma
}
function calculaVendasMaior5000(mat, vet){
    for(let i=0;i<12;i++){
        let qtde = 0
        for(let j=0;j<4;j++){
            if (mat[i][j] > 5000){
                qtde++
            }
        }
        alert(`Em ${vet[i]} teve ${qtde} vendas maiores que R$5.000,00`)
    }
}
function calculaMesesVendasMenores1000(mat, vet){
    for(let i=0;i<12;i++){
        let qtde = 0
        for(let j=0;j<4;j++){
            if (mat[i][j] < 1000){
                qtde++
            }
        }
        if (qtde > 0){
            alert(`Em ${vet[i]} teve ${qtde} vendas menores que R$1.000,00`)
        }
    }
}
function exe5(){
    let mat = []
    const vet = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    cadastra(mat, vet)
    calculaTotalMes(mat, vet)
    calculaTotalSemana(mat)
    calculaVendasMaior5000(mat, vet)
    calculaMesesVendasMenores1000(mat, vet)
    alert(`Total vendido no ano ${calculaTotalAno(mat)}`)
}
exe5()
// crie uma função que calcula e mostra a qtde de vendas maiores que 5000 em cada mês
// crie uma função que calcula e mostra os meses que tiveram vendas menores que 1000




