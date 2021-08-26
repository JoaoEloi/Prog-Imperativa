//Quadrado do Numero

function quadradoDoNumero(numA) {
 let   multiplicar = numA ** 2;
        console.log("o quadrado do numero", + numA, " é:", " " + multiplicar);
}

//Média de três numeros
function mediaDeTresNumeros(numA,numB,numC){
   let mediadetres = (numA + numB + numC) / 3;
    console.log("A média dos numeros é de: "," " + mediadetres);

}
 
//Calculo de porcentagem 
function calculaPorcentagem(numA,numB){
    let porcentagem = (numA / 100) * numB;

    console.log(numB + "%","de","" + numA, "é de: " + porcentagem)

}
//Gerador de porcentagem
function geradorPorcentagem(numA,numB){
    let porcentagem = (numA / numB) * 100;

    console.log(numA + "", "representa","" + porcentagem,"%", "de", "" + numB)

}
geradorPorcentagem(10,45)
