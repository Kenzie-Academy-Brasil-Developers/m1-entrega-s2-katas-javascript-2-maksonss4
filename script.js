function add(num1, num2){
    return num1 + num2
}
console.log(add(-1, -2))


function multiply(num1, num2){
    let resultado = 0
    for(let i = 0; i < num1; i++){
        resultado += add(0, num2)
    }
    return resultado
}
console.log(multiply(7, 10))


function power(x, n){
    let resultado = x
    for(let i = 0; i < add(n, -1); i++){
        resultado = multiply(resultado, x)
    }
    return resultado
}
console.log(power(2, 8))


function factorial(number){
    let resultado = number
    for(let i = add(number, -1); i > 0; i--){
        resultado = multiply(resultado, i)
    }
    return resultado
}
console.log(factorial(7))


function fibonacci(number){
    let sequencia = [0, 1]
    for(let i = 0; sequencia.length < add(number, 1); i++){
        sequencia.push(add(sequencia[i], sequencia[add(i,1)]))
    }
    if(number == 0){
        return 0
    }else{
        return sequencia[add(sequencia.length, -1)]
    }    
}
console.log(fibonacci(7))