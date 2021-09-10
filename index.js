var pontuacao = []; //começa vazio
console.log(`pontuacao é ${pontuacao}`)
const n = 9; //tamanho do array
console.log(`n é ${n}`)
var i = 0;
console.log(`variavel i é ${i}`)


var pontuacaoatual = []
console.log("ENTROU NO LAÇO")
console.log("------------")
while(i < n){
    //ADICIONAR POR INDICE E NAO POR PUSH
    console.log(`pontuacao é ${pontuacao}`)
    var elemento = (Math.random() * (50 - 0) + 0).toFixed(0)
    console.log(`o elemento que será adicionado  é ${elemento}`)
    console.log(`NUMERO RANDOMICO é ${elemento} e o INDICE É ${i}`)
    i++;
    pontuacao = pontuacao.push(elemento);  
    console.log(`novo array é ${pontuacao}`)
    console.log("------------")

}
//console.log((Math.random() * (50 - 0) + 0).toFixed(0))

/**
 * 
for(i>=0 ; i<n ; i++){
    console.log(i)
    var elemento = (Math.random() * (50 - 0) + 0).toFixed(0)
    console.log(elemento)
    pontuacao = pontuacao.push(elemento);
    console.log(pontuacao)
    //pontuacao = pontuacao.splice(1, 0,  Math.random() * (50 - 0) + 0  )
    console.log(`O item ${i} é ${elemento}`)
}
console.log(pontuacao)



 */