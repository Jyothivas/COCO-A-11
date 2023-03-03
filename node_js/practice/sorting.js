let personInfo=[
    {id:101,name:'john'},
    {id:102,name:'peter'},
    {id:103,name:'sam'},
    {id:104,name:'rahul'},
];


console.log(personInfo.sort(function(a,b){
    if(a.name < b.name){
        return -1;
    }else
    return 1;
}));

console.log(personInfo.sort((a,b)=>{
    if(a.name >b.name)
        return -1;
    else
        return 1;
}));