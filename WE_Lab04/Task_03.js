let obj ={

    name: 'Prem Sagar',
    age:18,
    city: 'Mithi',
    Interest: 'Politics'
};

function myfunc(obj){

    for(let property in obj){
        if(typeof(obj[property])=='string'){
            console.log(obj[property])
        }
    }

}


myfunc(obj);