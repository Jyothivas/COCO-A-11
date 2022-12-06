    let n= data.length;
    var index=data.length-1;

    function AddRow(){
        console.log(data.length);
        let addRow = document.getElementById('example');
        let NewRow = addRow.insertRow(n);

        data[index][0] = n;
        data[index][1] = document.getElementById('email').value;
        data[index][2] = document.getElementById('age').value;
        data[index][3] = document.querySelector('input[name="gender"]:checked').value;
        data[index][4] = "<a href=''>Edit</a> / <a href=''>Delete</a>";;
        console.log(data[index]);

        
        let cell1 = NewRow.insertCell(0);
        let cell2 = NewRow.insertCell(1);
        let cell3 = NewRow.insertCell(2);
        let cell4 = NewRow.insertCell(3);
        let cell5 = NewRow.insertCell(4);

        cell1.innerHTML = data[index][0];
        cell2.innerHTML = data[index][1];
        cell3.innerHTML = data[index][2];
        cell4.innerHTML = data[index][3];
        cell5.innerHTML = data[index][4]; 
        n++;
        
        
    } 

    function deleteData(id){

    }
 