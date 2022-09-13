const numbers = [1,382,1,21,1,92,1]

function minimumOccurence(inputArray)
{
    let minElement = inputArray[0]
    for(let item in inputArray)
    {
        if(inputArray[item]<minElement)
        minElement = inputArray[item]
    }
    let counter =0
    for(let item in inputArray)
    {
        if(inputArray[item] === minElement)
        {
            counter++
            inputArray[item]=-1
        }
    }
    console.log('Number of times minimum number occured: '+counter)
    console.log("After Replacing minimum element in the array: ", inputArray)
    
    return inputArray
    
}

minimumOccurence(numbers)