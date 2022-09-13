function checkSpeed(speed){
    var points
    if(speed < 70)
    {
        console.log("Good Safe Driving")
    }
    else if(speed > 70){
        points = (speed - 70)/5
        if(points <=10)
            console.log("Speed Limit is crossed by penality point:"+ points)
        else
            console.log('License Suspended')
    }
   
}
checkSpeed(100)
checkSpeed(75)
checkSpeed(120)
checkSpeed(80)
checkSpeed(130)

