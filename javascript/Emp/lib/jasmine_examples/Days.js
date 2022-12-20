class Days{
    dayOfWeek(number){
        let week =['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];
        for(let index=0;index<week.length;index++){
            if(number==index)
                return week[index-1];
        }
    }
}

module.exports=Days;
