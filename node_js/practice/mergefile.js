let personInfo = [
    { id: 101, name: 'john' },
    { id: 102, name: 'peter' },
    { id: 103, name: 'sam' },
    { id: 104, name: 'rahul' },
];

let personDOB = [
    { id: 101, dateOfBirth: "1994-08-21" },
    { id: 102, dateOfBirth: "1993-05-26" },
    { id: 103, dateOfBirth: "1996-11-01" },
    { id: 104, dateOfBirth: "1999-07-11" },
];
let mergeArray = (personInfo = [], personDOB = []) => {
    let res = [];
    res = personInfo.map(obj => {
        const index = personDOB.findIndex(e1 => e1.id == obj.id);
        const { dateOfBirth } = index !== -1 ? personDOB[index]:{};
        return {
            ...obj,
            dateOfBirth
        }
    })
    return res;
}
console.log(mergeArray(personInfo, personDOB));

