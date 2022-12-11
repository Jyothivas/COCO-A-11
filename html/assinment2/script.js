

function onclickSubmit() {
 if ($.fn.DataTable.isDataTable("#example") && DataTable != "") {
   $("#example").DataTable().destroy();
 }
 $("#example tbody").empty();
var  sr = Employee.length+1;
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
    
    $('#example').on('draw.dt',function(){}).DataTable({
      data:Employee,
      "destroy":true,
      "autoWidth":false, 
      "info":false, 
      "JQueryUI":true, 
      "ordering":true, 
      "paging":false, 
      "scrollY":"500px", 
      "scrollCollapse":true
    });


   
    textClear();

}
  
function onClickDelete(e){
for(let i=0;i<Employee.length;i++)
{
  if(e==Employee[i][0])
    {
      Employee.splice(i,1);
    }
}
for(i=0;i<=Employee.length;i++)
{
  Employee[i]=1;
}
$('#example').on('draw.dt',function(){}).DataTable({
      data:Employee,
      "destroy":true,
      "autoWidth":false, 
      "info":false, 
      "JQueryUI":true, 
      "ordering":true, 
      "paging":false, 
      "scrollY":"500px", 
      "scrollCollapse":true
    });
//Employee=f;
//console.log(Employee);
  // for (let i = 0; i < Employee.length; i++) {
  //   if (Employee[i][0] != e) {
  //     dup[i] = Employee[i];
  //   }
  //   Employee[i] = dup[i];
  //   console.log(Employee);
  // }
  // for (let j = 0; j < Employee.length; j++) {
  //  Employee[j][0] =j+1;
  // }
  
}

function onClickEdit(p){
 console.log(p);
 
  document.getElementById("inputEmail3").value=Employee;
  document.getElementById("age").value=Employee;
}


function textClear(){
  email = document.getElementById("inputEmail3").value='';
  age = document.getElementById("age").value='';
}