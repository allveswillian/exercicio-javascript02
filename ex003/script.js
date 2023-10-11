function sorteio(){
    let res = document.querySelector('section#result')
    let min = 1
    let max = 20
    let numeroAleatorio = Math.floor(Math.random() * (max - min +1))
    
    res.innerHTML = `<p>O numero sorteado foi ${numeroAleatorio} </p>`
}