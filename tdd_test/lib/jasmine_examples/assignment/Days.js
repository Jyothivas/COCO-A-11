class Days{
    dayOfWeek(number){
        let week =['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];
        if(number>0 && number<8){
            return week[number-1];
        }
        return "number is not less than 1 or greater than 7";
    }
}

module.exports=Days;