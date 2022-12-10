

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
  
    
var dup=[];
function onClickDelete(e){
 for(let i=0;i<Employee.length;i++)
 {
  if(Employee[i][0]!=e)
  {
    dup[i]=Employee[i];
  }
  Employee[i]=dup[i];
 }
 console.log(Employee);
  $('#example').DataTable({
      data:Employee,
      
      "autoWidth":false, 
      "info":false, 
      "JQueryUI":true, 
      "ordering":true, 
      "paging":false, 
      "scrollY":"500px", 
      "scrollCollapse":true
});
}

function onClickEdit(i){
 console.log(i);
  document.getElementById("inputEmail3").value=i;
  document.getElementById("age").value=i;
}


function textClear(){
  email = document.getElementById("inputEmail3").value='';
  age = document.getElementById("age").value='';
}