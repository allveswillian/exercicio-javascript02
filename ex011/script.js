function contando(){

    var numeroDaTabuada = Number(window.prompt("Digite o numero da tabuada desejada"));
    
    // Loop para criar a tabuada de multiplicação
 document.write(`Tabuada de ${numeroDaTabuada}:`);
    for (let i = 1; i <= 10; i++) {
        const resultado = numeroDaTabuada * i;
        document.write("<br>"+`${numeroDaTabuada} x ${i} = ${resultado}`);
    }
}