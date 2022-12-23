const btn = document.getElementById('btnAdd');

btn.addEventListener('click', function handleClick(event) {
  // 👇️ if you are submitting a form (prevents page reload)
  event.preventDefault();

  const hiddenInput = document.getElementById('srNo');
  const emailInput = document.getElementById('email');
  const ageInput = document.getElementById('age');

  // 👇️ clear input field
  hiddenInput.value = '';
  emailInput.value = '';
  ageInput.value = '';
});

//form submit function 
function AddRow(){
    var srNo=document.getElementById('srNo').value;
    let Email = document.getElementById('email').value;
    let Age = document.getElementById('age').value;
    let Gender = document.querySelector('input[name="gender"]:checked').value;
    var updateAction = `<button class="btn btn-success" onclick='editEmployeeData(${srNo})'>Edit</button>
                  <button class="btn btn-danger" onclick='deleteEmployee(${srNo})'>Delete</button>`;
    
    //checking update details or new inserted..              
    if(!srNo==''){
        updateEmployeeData(srNo,Email,Age,Gender,updateAction);
    }else{
         srNo = employeeData.length+1;
                Action = `<button class="btn btn-success" onclick='editEmployeeData(${srNo})'>Edit</button>
                  <button class="btn btn-danger" onclick='deleteEmployee(${srNo})'>Delete</button>`;
    
    //pushing employee data into array...
    employeeData.push([srNo,Email,Age,Gender,Action]);

    $('#example').on('draw.dt', function(){
    }).DataTable({
        data:employeeData,
       'destroy': true,
       'paging': true,
       'lengthChange': true,
       'searching': true,
       'ordering': true,
       'info': true,
       'autoWidth': true 
     })
    }
}


//deleteEmployee using sr number...
 function deleteEmployee(srno){
     //finding array index position..
    for( let i = 0; i < employeeData.length; i++){ 
         if ( employeeData[i][0] === srno) { 
                employeeData.splice(i, 1); 
        }
    }

    //new index position assigning...
    for (let i = 0; i < employeeData.length; i++) {
        employeeData[i][0] = i+1;
        employeeData[i][4] = `<button class="btn btn-success" onclick='editEmployeeData(${i+1})'>Edit</button>
                  <button class="btn btn-danger" onclick='deleteEmployee(${i+1})'>Delete</button>`;
    }

    //reloading data..
    $('#example').on('draw.dt', function(){
    }).DataTable({
        data:employeeData,
      'destroy': true,
      'paging': true,
      'lengthChange': true,
      'searching': true,
      'ordering': true,
      'info': true,
      'autoWidth': true 
    })
}  
//edit employee details...
function editEmployeeData(employeeNum){
    
    let srNo=employeeData[employeeNum-1][0];
    let email=employeeData[employeeNum-1][1];
    let age=employeeData[employeeNum-1][2];
    
    document.getElementById('srNo').value = srNo;
    document.getElementById('email').value = email;
    document.getElementById('age').value = age;
}

//updating employee data
function updateEmployeeData(employeeNum,email,age,gender,action){
      let index=employeeNum-1;
 
   employeeData[index].splice(1,3,email,age,gender,action);
 
   $('#example').on('draw.dt', function(){
    }).DataTable({
        data:employeeData,
      'destroy': true,
      'paging': true,
      'lengthChange': true,
      'searching': true,
      'ordering': true,
      'info': true,
      'autoWidth': true 
    })
}