const isPrime = function(number){
    let count=0
    for(let i=1;i<=number;i++){
        if(number%i==0){
            count++
        }
    }

    if(count > 2){
        return false
    }
    else
        return true
}


console.log(isPrime(2))