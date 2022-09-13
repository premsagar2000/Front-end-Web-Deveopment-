const obj = 
{
    name: 'Prem Sagar',
    age: 21,
    address:{city:'Mithi',province:'Sindh'},
    Degree: 'CS',
    religion:'Hindu'
}

function key_values(obj)
{
    if(Object.keys(obj).length === 0)
        console.log("Object is empty")
    else{
        for(let key in obj)
        {
            if(typeof obj[key] === 'object')
            {
                key_values(obj[key])
            }
            else
            {
                console.log(key,':',obj[key])
            }
        }
    }

}
   
key_values(obj)