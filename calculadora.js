// Criando uma calculadora

function calculadora(){

    // Definindo as operações e pegando os valores de entrada
    const operacao = Number(prompt('Escolha uma opção:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));

    // Verificando se a operação é valida
    if (!operacao || operacao >= 7){
        alert('Erro - Operação Inválida');
        calculadora();
    } else {

        // Definindo as variáveis do qual as entradas devem ser do tipo Number
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

        // Verificando se as variáreis são válidas
        if (!n1 || !n2){
            alert('Erro - Parâmetros Inválidos');
            calculadora();
        } else {

            // Definindo as funções
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
            function subtracao() {
                resultado = n1 - n2;
                alert (`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert (`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoReal(){
                resultado = n1 / n2;
                alert (`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoInteira(){
                resultado = n1 % n2;
                alert (`${n1} % ${n2} = ${resultado}`);
                novaOperacao();
            }
            function potenciacao(){
                resultado = n1 ** n2;
                alert (`${n1} ** ${n2} = ${resultado}`);
                novaOperacao();
            } 
            
            // Nova Operação
            function novaOperacao(){
                let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

                if (opcao == 1){
                    calculadora();
                } else if (opcao == 2){
                    alert('Até Mais!');
                }else {
                    alert('Digite uma Opção Válida!');
                    novaOperacao();
                }
            }
        }
    }
    // Escolhendo a Operação
    if (operacao == 1){
        soma();
    } else if (operacao == 2) {
        subtracao();
    } else if (operacao == 3){
        multiplicacao();
    } else if (operacao == 4){
        divisaoReal();
    } else if (operacao == 5){
        divisaoInteira();
    } else if (operacao == 6){
        potenciacao();
    }
    
}
calculadora();