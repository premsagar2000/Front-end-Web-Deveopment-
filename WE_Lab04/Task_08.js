function ContainDigit(input)
{
    return /\d/.test(input)
}
function elementsContainsDigit(array){
    let newArray=[]
    for(let i=0;i<array.length;i++)
    {
        if(ContainDigit(array[i]))
        {
            newArray.push(array[i])
        }
    }
    return newArray
}

const containDigit = elementsContainsDigit(['Prem193', 'Sagar', 'Sagramani1', 'Ali'])
console.log(containDigit)
