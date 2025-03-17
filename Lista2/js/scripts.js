function seguir() {
    alert(`Você agora está seguindo DevKunoichi.`)
}
// exercicio1
function exe1() {
    //recupera os dados de usúario
    let nota1 = Number (document.getElementById("nota1").value)
    let nota2 = Number (document.getElementById("nota2").value)
    let nota3 = Number (document.getElementById("nota3").value)
    let nota4 = Number (document.getElementById("nota4").value)
    // calcular a média
    let media = (nota1 + nota2 + nota3 + nota4) / 4

    let status="";
    if (media >= 7){
        status="Aprovado(a)";
    }else{
        status="Reprovado(a)";
    }
    document.getElementById("media").innerText = "A média do(a) aluno(a) é: " + media + "status: " + status
}


