function sorteio(){
    let res = document.querySelector('section#result')
    let min = 10
    let max = 20
    let numeroAleatorio = Math.floor(Math.random() * (max - min +1))
    let usu = window.prompt("Tente adivinhar o numero sorteado")
    
    if(usu>numeroAleatorio){
        window.prompt("O numero digitado é maior")
    }
    if(usu<numeroAleatorio){
        window.prompt("O numero digitado é menor")
    }
    if(usu=numeroAleatorio){
        window.prompt("Você acertou ! Parabens!!")
    }
}