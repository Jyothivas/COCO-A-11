let personInfo=[
    {id:101,name:'john',age:18},
    {id:102,name:'peter',age:26},
    {id:103,name:'sam',age:22},
    {id:104,name:'rahul',age:25},
];


let newPersonArray = personInfo.filter(function(person){
    return person.age>20;
});

console.log(newPersonArray);