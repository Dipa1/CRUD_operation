var selectedRow = null;

function onFormSubmit()
{
    var formdata=readFormData();
    if(selectedRow == null)
         insertNewRecord(formdata);
    else
         updateRecord(formdata);
    resetForm();

}

function readFormData()
{
    var formdata={};
    formdata["ename"]= document.getElementById("ename").value;
    formdata["university"]= document.getElementById("university").value;
    formdata["age"]= document.getElementById("age").value;
    return formdata;
}

function insertNewRecord(data)
{
    var table=document.getElementById("table").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.ename;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.university;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.age;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<button onclick = "onEdit(this);">Edit</button>
                        <button onclick= "onDelete(this);">Delete</button>`;
}

function resetForm()
{
    document.getElementById("ename").value = "";
    document.getElementById("university").value = "";
    document.getElementById("age").value = "";
    selectedRow = null;
}

function onEdit(td)
{
    selectedRow = td.parentElement.parentElement;
    document.getElementById("ename").value =  selectedRow.cells[0].innerHTML;
    document.getElementById("university").value = selectedRow.cells[1].innerHTML;
    document.getElementById("age").value = selectedRow.cells[2].innerHTML;
}

function updateRecord(formdata)
{
    selectedRow.cells[0].innerHTML = formdata.ename;
    selectedRow.cells[1].innerHTML = formdata.university;
    selectedRow.cells[2].innerHTML = formdata.age;
}

function onDelete(td)
{
   if(confirm('Are you sure to delete this record ?'))
    {
        row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);
        resetForm();
    }
}

