function data(){
    
    var dia, mes, ano, d, m, e, mensagem
    dia = Number(window.prompt("Informe o dia:"))
    mes = Number(window.prompt("Informe o mês:"))
    ano = Number(window.prompt("Informe o ano:"))

    switch (mes){
        case 1:
            m = "janeiro";         e = "verão";         d = "31";          
        break;
        case 2:
            m = "fevereiro";         e = "verão";
            if(ano % 4 == 0 && (ano % 100 != 0 || ano % 400 == 0))
            d = 29;
            else
            d = 28;     
        break;
        case 3:
            m = "março";         d = "31";
            if(dia > 20)
            e = "outono";
            else
            e = "verão";     
        break;
        case 4:
            m = "abril";         e = "outono";         d = "30";          
        break;
        case 5:
            m = "maio";         e = "outono";         d = "31";          
        break;
        case 6:
            m = "junho";         d = "30";
            if(dia > 21)
            e = "outono";
            else
            e = "inverno";     
        break;
        case 7:
            m = "julho";         e = "inverno";         d = "31";          
        break;
        case 8:
            m = "agosto";         e = "inverno";         d = "31";          
        break;
        case 9:
            m = "setembro";         d = "30";
            if(dia > 22)
            e = "primavera";
            else
            e = "inverno";     
        break;
        case 10:
            m = "outubro";         e = "primavera";         d = "31";          
        break;
        case 11:
            m = "novembro";         e = "primavera";         d = "30";          
        break;
        case 9:
            m = "setembro";         d = "31";
            if(dia > 20)
            e = "verão";
            else
            e = "primavera";     
        break;
    }
    mensagem = "Mês: " + m + " - " + d + " dias. " + "Estação: " + e + "."
    window.alert(mensagem);
}