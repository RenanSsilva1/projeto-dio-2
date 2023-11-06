let finish  = partidas(105, 45)

console.log(`Com ${finish} Vitórias`)

function partidas(vitorias, derrotas){
    let resultado = vitorias - derrotas

    if(resultado < 10){
        console.log("Você está no Ranking Ferro")
    }else if(resultado  >= 11 && resultado <= 20){
        console.log("Você está no Ranking Bronze")
    }else if(resultado  >= 21 && resultado <= 50){
        console.log("Você está no Ranking Prata")
    }else if(resultado  >= 51 && resultado <= 80){
        console.log("Você está no Ranking Ouro")
    }else if(resultado  >= 81 && resultado <= 90){
        console.log("Você está no Ranking Diamante")
    }else if(resultado  >= 91 &&  resultado <= 100){
        console.log("Você está no Ranking Lendário")
    }else if(resultado  >= 101){
        console.log("Você está no Ranking Imortal")
    }
    return resultado
}
