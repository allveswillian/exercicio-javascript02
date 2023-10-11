function analise(){
    let res = document.querySelector('section#result')
    now = new Date
    now1 = new Date

    document.write("hoje é" + now.getDate() + "/" + now.getMount() + "/" + now.getFullYear())
    document.write("Agora sao " + now1.getHours() + ":" + now1.getMinutes())
    
}