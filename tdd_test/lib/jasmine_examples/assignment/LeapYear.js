class LeapYear{
    isLeapYear(year){
        if(year==0 || year=='')
            return 'Enter a valid year';
        if(year%4==0)
            return 'Leap Year';
            
        return 'Not Leap Year';
    }
}
module.exports=LeapYear;