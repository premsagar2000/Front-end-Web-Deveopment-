function findIndex(arr, callback){

    for(let i=0;i<arr.length;i++){
        if(callback(arr[i])){
            console.log(i)
            break
        }
       
        
    }
}


findIndex([8,11,4,27], function(val){return val >= 10});
findIndex([8,11,4,7],function(val){return val === 7});