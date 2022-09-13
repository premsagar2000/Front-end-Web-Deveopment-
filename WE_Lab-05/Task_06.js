function find(arr, callback){

    for(let i=0;i<arr.length;i++){
        if(callback(arr[i]))
            console.log(arr[i])
    }
}


find( [2,3,4,6,7,12], function(val){return val >= 10})
find( [2,3,4,5,6,7,12], function(val){return val === 5})