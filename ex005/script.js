function calcular(){
    let res = document.querySelector('section#result')
    var n1 = Number(window.prompt("Digite um numero"))
    var n2 = Number(window.prompt("Digite outro numero"))
    let op = Number(window.prompt("Qual operação realizar? \n{1} Somar \n{2} Subtrair \n{3} Multiplicar \n{4} Dividir "))


    switch (op){
        case 1:
            result.innerHTML += `<p>${n1} + ${n2} = ${n1+n2}</p>`
            break
        case 2:
            result.innerHTML += `<p>${n1} - ${n2} = ${n1-n2}</p>`
            break
        case 3:
            result.innerHTML += `<p>${n1} * ${n2} = ${n1*n2}</p>`
            break
        case 4:
            result.innerHTML += `<p>${n1} / ${n2} = ${n1/n2}</p>`
            break
        default:
            result.innerHTML += `<p>Opção invalida. Digite uma das opções apresentadas</p>`  
        
    }
    
    
}