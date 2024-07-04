const prompt = require('prompt-sync')({sigint: true});

while (true) {
    console.log(`
    1. Soma
    2. Subtração
    3. Multiplicação
    4. Divisão
    5. Porcentagem
    0. Sair
    `);

    let opcao = prompt('Escolha uma opção: ');

    if(opcao === '1') {

        let num1 = +prompt('Digite o primeiro numero: ');
        let num2 = +prompt('Digite o segundo numero: ');
        if(isNaN (num1,num2)){
            console.log('Digite um numero valido!')
        }else{
            soma = num1 + num2;
            }
            console.log('O resultado da soma é: ' + soma);
        
        } else if (opcao === '2') {

            let num1 = +prompt('Digite o primeiro numero: ');
            let num2 = +prompt('Digite o segundo numero: ');
            if(isNaN (num1,num2)){
                console.log('Digite um numero valido!')
            }else{
                sub = num1 - num2
                }
                console.log('O resultado da subtração é: ' + sub);

        } else if (opcao === '3') {

            let num1 = +prompt('Digite o primeiro numero: ');
            let num2 = +prompt('Digite o segundo numero: ');
            if(isNaN (num1,num2)){
                console.log('Digite um numero valido!')
            }else{
                mult = num1 * num2
                }
                console.log('O resultado da multiplicação é: ' + mult);

        } else if (opcao === '4') {

            let num1 = +prompt('Digite o primeiro numero: ');
            let num2 = +prompt('Digite o segundo numero: ');
            if(isNaN (num1,num2)){
                console.log('Digite um numero valido!')
            }else{
                if(num2 === 0){
                    console.log('Não existe divisão por ZERO!')
                }else{
                div = num1 / num2
                console.log('O resultado da divisão é: ' + div);
                }
                
            }

        } else if (opcao === '5') {

            let num1 = +prompt('Digite o primeiro numero: ');
            let num2 = +prompt('Digite a porcentagem: ');
            if(isNaN (num1,num2)){
                console.log('Digite um numero valido!')
            }else{
                if(num2 < 0){
                    console.log('Não existe porcentagem Negativa!')
                }else{
                porc = num1 * num2
                resultporc = porc / 100
                console.log('O resultado da porcentagem é: ' + resultporc + '%')
                }
            }
            
        } else if (opcao === '0') {
            console.log('Até logo!');
            break;
        } else {
        console.log('Opção invalida, digite uma opção valida!');
        }  

}



    