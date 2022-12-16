class Days{
    dayOfWeek(number){
        if(number>0 && number<8){
            let week =['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];
                return week[number-1];
        }
        return "number is not less than 1 or greater than 7";
    }
}

module.exports=Days;