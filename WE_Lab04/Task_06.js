const marksArray = [90,87,66,65,77,59,99,95,45,47]

let gradingfunction = (array) => {
    let markSum=0
    array.forEach(i => markSum+=i)
    console.log('Sum of Marks is: '+markSum)
    let average=0
    average = markSum/array.length
    console.log('Average of given marks is: '+average)
    
    if(average>92 && average<=100)
    {
        console.log('A+')
    }
    else if(average>87 && average<=92)
    {
        console.log('A')
    }
    else if(average>77 && average<=87)
    {
        console.log('B+')
    }    
    else if (average>=60 && average<=77)
    {
        console.log('B')
    }
    else if(average<60)
    {
        console.log('F')
    }
    else
    {
        console.log('Something Wrong!')
    }
    
    
}

gradingfunction(marksArray)