

 
function AddRow(){
    let srNum =employeeData.length+1;
    var Email = document.getElementById('email').value;
    var Age = document.getElementById('age').value;
    var Gender = document.querySelector('input[name="gender"]:checked').value;
    var Action = "<button class='btn btn-success'>Edit</button> <button class='btn btn-danger' onclick='deleteEmployee(srNUM)'>Delete</button>";;
    
        rows=[srNum,Email,Age,Gender,Action]
    
        employeeData.push(rows);
} 





























/*  function deleteEmployee(empId){

    console.log(empId);
    console.log(employeeData);
    employeeData=employeeData.filter(employeeData[empId]);
    console.log(employeeData)
}  */