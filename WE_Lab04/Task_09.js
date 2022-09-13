const bday = new Date(2000,7,30)
const current = new Date(2022,5,30)

function diff(bday,current)
{
    let years = Math.abs(bday.getFullYear()-current.getFullYear())
  
    let months = Math.abs((bday.getMonth())-(current.getMonth())) 

    let days = Math.abs(bday.getDate()-current.getDate())
    
    return (years*365)+(months*30)+(days) 
    
}
console.log("Total Days: ",diff(bday,current))