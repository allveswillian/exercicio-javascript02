function calcular(){
    let res = document.querySelector('section#result')
    var ani = window.prompt("Digite  o mes do seu nascimento")
    var ano = Number(window.prompt("Digite o ano em que vc nasceu"))
    var resp = 2023-ano
    
    res.innerHTML = `<p>Você nasceu em ${ani}</p>`
    res.innerHTML += `<p>O ano que você nasceu foi ${ano}</p>`
    res.innerHTML += `<p>Você tem ${resp} anos</p>`
}