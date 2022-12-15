function onclickSubmit() {
  if ($.fn.DataTable.isDataTable("#example") && DataTable != "") {
    $("#example").DataTable().destroy();
  }
  $("#example tbody").empty();
  var sr = Employee.length + 1;
  
    let email = document.getElementById("inputEmail3").value;
    let age = document.getElementById("age").value;
    let gen;
    if (document.getElementById("gridRadios1").checked == true) {
      gen = "Male";
    } else {
      gen = "Female";
    }
  

  var Actions = `<button id='edit' onclick="onClickEdit(${sr})">${"Edit"}</button><button id='delete' onclick="onClickDelete(${sr})">${"Delete"}</button>`;
  Employee.push([sr, email, age, gen, Actions]);

  $("#example")
    .on("draw.dt", function () {})
    .DataTable({
      data: Employee,
      destroy: true,
      autoWidth: false,
      info: false,
      JQueryUI: true,
      ordering: true,
      paging: false,
      scrollY: "500px",
      scrollCollapse: true,
    });
  textClear();
}

function onClickDelete(e) {
  //   console.log(e);
  // for(let i=0;i<Employee.length;i++)
  // {
  //   if(e==Employee[i][0])
  //     {
  //       Employee.splice(i,1);
  //     }
  // }
  // for(let i=0;i<Employee.length;i++)
  // {
  //   Employee[i][0]=i+1;
  // }
  var dup = [];
  console.log(Employee);
  for (let i = 0; i < Employee.length; i++) {
    if (Employee[i][0] !== e) {
      Employee[i][0] = i + 1;
      dup[i] = Employee[i];
    }
  }
  Employee = dup;
  $("#example")
    .on("draw.dt", function () {})
    .DataTable({
      data: Employee,
      destroy: true,
      autoWidth: false,
      info: false,
      JQueryUI: true,
      ordering: true,
      paging: false,
      scrollY: "500px",
      scrollCollapse: true,
    });
}

// function onClickEdit(p) {
//   console.log(p);
//   for (let i = 0; i < Employee.length; i++) {
//     if (p == Employee[i][0]) {
//       document.getElementById("inputEmail3").value = Employee[i][1];
//       document.getElementById("age").value = Employee[i][2];
//     }
//   }
// }
function onClickEdit(p){
  let sr=Employee[p-1][0];
  let email=Employee[p-1][1];
  let age=Employee[p-1][2];


}
function updateEmployeeData(employeeNum,email,age,gender){
      let index=employeeNum-1;
 
   employeeData[index].splice(1,3,email,age,gender);
 
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




function textClear() {
  email = document.getElementById("inputEmail3").value = "";
  age = document.getElementById("age").value = "";
}
