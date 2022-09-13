const reverseStringMethod = function(input)
{
    let str=''
    for(let i=input.length-1; i>=0; i--)
    {
        str+=input[i]
    }
    console.log(str)
}

reverseStringMethod("Prem")
reverseStringMethod("Sagramani")
reverseStringMethod("Danish")
reverseStringMethod("Sahil")
