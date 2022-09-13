function specialMultiply(num1,num2)
{
    if(arguments.length==2)
    { 
        return num1*num2;
    }   
    else{ 
            return function fn(num2){ return num1*num2;}
    }
}
console.log(specialMultiply(3,4))