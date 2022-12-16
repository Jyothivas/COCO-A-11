class LeafYear{
    isLeafYear(year){
        if(year==0 || year=='')
            return 'Enter a valid year';
        if(year%4==0 && year%100!==0 || year%400==0)
            return 'Leaf Year';
            
        return 'Not Leaf Year';
    }
}
module.exports=LeafYear;