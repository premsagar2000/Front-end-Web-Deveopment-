function isEven(num){
    if(num%2==0){
        return true
    }
    else
        return false
}

function isOdd(num){
    if(num%2!=0){
        return true
    }
    else
        return false
}

function isPrime(num){
    let count=0
    for(let i=1;i<=num;i++){
        if(num%i==0){
            count++
        }
    }

    if(count > 2){
        return false
    }
    else
        return true
}

 function numberFact(num, callbackfunction){

    if(callbackfunction === isEven)
        return isEven(num)
    else if(callbackfunction === isOdd)
        return isOdd(num)
    else if(callbackfunction === isPrime)
        return isPrime(num)
}


console.log(numberFact(59,isEven))
console.log(numberFact(59,isOdd))
console.log(numberFact(59,isPrime))