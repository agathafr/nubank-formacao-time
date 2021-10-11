function formacaoDeTime(pontuacao, tamanho_do_time, k) {
    //const n = this.pontuacao;
    const n = pontuacao;
    /*
    k = this.k;
    tamanho_do_time = this.tamanho_do_time;
     */
    var i = 0;
    var pontuacaoTime = [];
    //var pontuacao = [8, 2, 3, 4, 5, 6, 7, 8];
    var tamanho_do_array_pontuacao = pontuacaoTime.length;

    function addElement(array, elemento) {
        array = array.push(elemento)
    }

    while (i < n) {
        console.log(`Esse é o Array de pontuação: ${pontuacaoTime}`);
        var elemento = (Math.random() * (50 - 0) + 0).toFixed(0);
        console.log(`Esse é um elemento randomico do Array: ${elemento} e seu indice é ${i}`);
        addElement(pontuacaoTime, elemento)
        i++;
        console.log(`proximo indice: ${i}`)
        console.log(`O array de pontuação ficou: ${pontuacaoTime}`)
    }


    var somaArray = [];
    var soma = 0;


    for (i = 1; i <= tamanho_do_time; i++) {
        console.log(`------ Para o time ${i}  ------`)

        console.log(`O array de pontuacao é ${pontuacaoTime}`)
        var pontuacao1 = pontuacaoTime.slice(0, k)
        var pontuacao2 = pontuacaoTime.reverse()
        var pontuacao3 = pontuacaoTime.slice(0, k)
        console.log(`Pontuacao 1 é ${pontuacao1}`)
        console.log(`Pontuacao 2 é ${pontuacao2}`)
        console.log(`Pontuacao 3 é ${pontuacao3}`)
        pontuacao2 = pontuacaoTime.reverse()

        var maiorPontuacao1 = getMaxOfArray(pontuacao1)
        console.log(`A maior pontuacao do array seg1: ${maiorPontuacao1}`);
        var maiorPontuacao3 = getMaxOfArray(pontuacao3)
        console.log(`A maior pontuacao do array seg3: ${maiorPontuacao3}`);

        if (maiorPontuacao1 > maiorPontuacao3) {
            console.log(`A pontuacao do 1 foi maior que a do 3`)
            var buscar = maiorPontuacao1;
            console.log(`Variável buscar é ${buscar}. Ela buscou o valor`)
            var indice = pontuacaoTime.indexOf(buscar)
            console.log(`Variável indice é ${indice}. Ela buscou o indice da maior variavel`)
            soma = parseInt(soma + buscarIgual1);
            somaArray.push(maiorPontuacao1); //adicionando a maior pontuacao a soma
            console.log(`O maior elemento foi adicionado a soma neste momento. -> O array ficou: ${somaArray} e a variavel soma: ${soma}`)
            pontuacaoTime.splice(indice, 1)//removendo a pontuacao maior do array
            indice = pontuacaoTime.indexOf(buscar)
            console.log(`Verificando se foi removido: ${indice}`)
            console.log(`Removendo o elemento maior ficamos com o array desta forma: ${pontuacaoTime}`)
        } else if (maiorPontuacao3 > maiorPontuacao1) {
            console.log(`A pontuacao do 3 foi maior que a do 1`)
            var buscar = maiorPontuacao3;
            console.log(`Variável buscar é ${buscar}. Ela buscou o valor`)
            var indice = pontuacaoTime.indexOf(buscar)
            console.log(`Variável indice é ${indice}. Ela buscou o indice da maior variavel`)
            soma = parseInt(soma + maiorPontuacao3);
            somaArray.push(maiorPontuacao3); //adicionando a maior pontuacao a soma
            console.log(`O maior elemento foi adicionado a soma neste momento. -> O array ficou: ${somaArray} e a variavel soma: ${soma}`)
            pontuacaoTime.splice(indice, 1)//removendo a pontuacao maior do array
            indice = pontuacaoTime.indexOf(buscar)
            console.log(`Verificando se foi removido: ${indice}`)
            console.log(`Removendo o elemento maior ficamos com o array desta forma: ${pontuacaoTime}`)
        } else {
            //remover o de menor indice
            console.log(`Os valores das substrings sao iguais. Procurando pelo menor indice`)
            //BUSCANDO VALOR DAS VARIAVELS
            var buscarIgual1 = maiorPontuacao1;
            var buscarIgual3 = maiorPontuacao3;
            //BUSCANDO SEU INDICE
            var indice1 = pontuacao1.indexOf(buscarIgual1)
            var indice3 = pontuacao3.indexOf(buscarIgual3)

            console.log(`O indice1 é menor que o indice3 - OBVIO pela lógica dos indices`)

            console.log(`Variável buscar é ${buscarIgual1}. Ela buscou o valor`)
            console.log(`Variável indice é ${indice1}. Ela buscou o indice da maior variavel`)
            soma = parseInt(soma + buscarIgual1);
            somaArray.push(buscarIgual1); //adicionando a maior pontuacao a soma
            console.log(`O maior elemento foi adicionado a soma neste momento. -> O array ficou: ${somaArray} e a variavel soma: ${soma}`)
            pontuacaoTime.splice(indice1, 1)//removendo a pontuacao maior do array
            var indiceRemovido = pontuacaoTime.indexOf(buscarIgual1)
            console.log(`Verificando se foi removido: ${indiceRemovido}`)
            console.log(`Removendo o elemento maior ficamos com o array desta forma: ${pontuacaoTime}`)

        }

        function getMaxOfArray(nameArray) {
            return Math.max.apply(null, nameArray)
        }

        console.log(`O array de soma é: ${somaArray}`)
        soma = somaArray.reduce(function (soma, i) {
            return soma + i;
        })
        console.log(`A soma das pontuações é: ${soma}`)
        tamanho_do_array_pontuacao--;
    }

    return soma
}

console.log(formacaoDeTime(7, 2, 3));
