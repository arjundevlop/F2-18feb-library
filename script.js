var infoArr = [];

function addData(){
    var obj = {id:0, book_name:"", issued_to:"", issued_time:"", status:""};
    var bookName = document.getElementById("book-name").value;
    var issuedTo = document.getElementById("issued-to").value;
    const today = new Date();
const date = today.toLocaleDateString();
const time = today.toLocaleTimeString();
const dateAndTime = date +" "+"at"+" "+time;
    var currStatus = "Not Returned";
    obj.id = infoArr.length+1;
    obj.book_name= bookName;
    obj.issued_to = issuedTo;
    obj.issued_time = dateAndTime;
    obj.status = currStatus;
    infoArr.push(obj);

    var table = document.getElementById("data-table");
    var newRow = table.insertRow();
    var idCell = newRow.insertCell(0);
    var bookNameCell = newRow.insertCell(1);
    var issuedToCell = newRow.insertCell(2);
    var issuedDateCell = newRow.insertCell(3);
    var statusCell = newRow.insertCell(4);
    var statusSpan = document.createElement("span");
    statusCell.appendChild(statusSpan);
    idCell.innerHTML = obj.id;
    bookNameCell.innerHTML = obj.book_name;
    issuedToCell.innerHTML = obj.issued_to;
    issuedDateCell.innerHTML = obj.issued_time;
    statusSpan.innerHTML = obj.status;

    if(obj.status==="Not Returned"){
        statusCell.style.color = "red";
    }else{
        statusCell.style.color = "green";
    }
    var editButton = document.createElement("button");
    statusCell.appendChild(editButton);
    editButton.innerHTML = "Edit";
    editButton.style.marginLeft = "20px";
    editButton.style.fontFamily= "'Inter', sans-serif";
    editButton.style.borderColor = "black";
    editButton.style.cursor = "pointer";

    editButton.addEventListener("click",changeStatus);
    function changeStatus(){
        statusSpan.innerHTML = "Returned";
        statusSpan.style.color = "green";
    }
    document.getElementById("book-name").value = "";
    document.getElementById("issued-to").value = "";
    

}


    
