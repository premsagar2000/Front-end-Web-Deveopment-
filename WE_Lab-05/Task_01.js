function countDown(number){

    const HODF = function(){
        number--
        if(number==0){
            clearInterval(ID)
            console.log("Done")

        }
        else
            console.log(number)
    }

        var ID = setInterval(HODF, 1000)
}

countDown(8)
