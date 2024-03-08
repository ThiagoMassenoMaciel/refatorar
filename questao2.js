/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.



IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

let a = 0 
let b = 1 
let c = a + b
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34
while ( c < 15 ){
  a = b 
  b = c 
  console.log(c)
}



/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/
const numeroo = 1

const array_fibonacci = calcular_Sequencia_Fibonacci(numeroo)

const resultado =  Ele_E_Ou_Nao_E_Fibonacci( numeroo , array_fibonacci)

console.log( `o numero ${numeroo} esta na sequancia fibonnacci ? ${resultado}` )

function Ele_E_Ou_Nao_E_Fibonacci( numero , array_dos_fibonacci){
  // esta função verifica se o numero existe dentro da sequencia fibonacci
  let flag = false 

  for( let indice = 0 ; indice < array_dos_fibonacci.lenght ; indice++ ){

    if( array_dos_fibonacci[i] === numero){
      flag = true
    }

  }
  return flag
}

function calcular_Sequencia_Fibonacci( numero){
  //---------------Ideias para melhorar a performace do código--------------
  // n precisa calcular muitas vezes o loop da sequencia quando o numero a ser testado tem poucos digitos
  // isso melhora a performace do código
  //se o numero tiver 4 digitos calcular a sequencia até 18 loops 
  //se o numero tiver 3 digitos calcular a sequencia até 14 loops
  //se o numero tiver 2 digitos calcular a sequencia até 9 loops 
  //se o numero tiver 1 digitos calcular a sequencia até 4 loops

  let digitos = 0
  let loops = 0

  loops = quantosLoops(QuantosDigitos(numero, digitos))
  console.log(loops)

  let count = 0
  let a = 0 
  let b = 1 
  let c = a + b
  const numeros_fibonacci = []
  numeros_fibonacci.push(a)
  numeros_fibonacci.push(b)
  numeros_fibonacci.push(c)
  
  while( count < loops ){
    console.log("---------")
    count++
    a = b 
    b = c 
    c = a + b
    numeros_fibonacci.push(c)
    console.log(a)
    console.log(b)
    console.log(c)
  }
  console.log(numeros_fibonacci)

  return numeros_fibonacci
}



function QuantosDigitos(numero, digitos){

  if( numero/1000 >= 1){
    return digitos += 4
  }else if(numero/100 >= 1){
    return digitos += 3
  }else if(numero/10 >= 1){
    return digitos += 2
  }else if(numero/1 >= 1){
    return digitos += 1
  }
  
}

function quantosLoops(digitos){
  if(digitos === 4 ){
    return 18
  }else if(digitos === 3 ){
    return 14
  }else if(digitos === 2 ){
    return 9
  }else if(digitos === 1 ){
    return 4
  }
}
