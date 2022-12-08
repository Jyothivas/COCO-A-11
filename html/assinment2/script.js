

function onclickSubmit() {
var  sr = Employee.length+1;
  let email = document.getElementById("inputEmail3").value;
  let age = document.getElementById("age").value;
  let gen;
  if (document.getElementById("gridRadios1").checked == true) {
    gen = "Male";
  } else {
    gen = "Female";
  }
  var Actions = `<button id='edit'>${"Edit"}</button><button id='delete' onclick="onClickDelete(this)">${"Delete"}</button>`;  
  Employee.push([sr, email, age, gen, Actions]);

    $('#example').on('draw.dt',function(){}).DataTable({
      data:Employee,
      'destroy':true,
      'ordering':true,
      'lengthChange':true
    });

}
  
function onClickDelete(){
 
}
    

// function onClickDelete(){
//   console.log("clicked");
//   var selectedRows = dt.rows(".selected");
//   dt.rows(selectedRows).remove().draw();
//   console.log("dt.data(): ");
//   console.log(dt); 
// }

// $("#example tbody").on("click", function () {
//   dt.row($(this).parents("tr")).remove().draw();
// });
