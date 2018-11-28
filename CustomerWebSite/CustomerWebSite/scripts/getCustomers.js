//(function () {
var tblCustomers = document.getElementById("tblCustomers");
var tblRow;
var col0;
var col1;
var col2;
var EditLink;
var DeleteLink;
var test = 5;

function GetCustomers() {
    fetch("http://localhost/serverside/api/Customers")
        .then(function (response) {
            response.json().then(
                function (result) {
                    for (var i = 0; i < result.length; i++) {
                        tblRow = document.createElement("tr");
                        col0 = document.createElement("td");

                        EditLink = document.createElement("button");
                        EditLink.setAttribute("id", "btnEdit" + result[i].CustomerID);
                        //EditLink.setAttribute("onclick", "Edit(" + result[i].CustomerID + ")");
                        EditLink.innerHTML = "EDIT";
                        EditLink.className = "btnAction";
                       
                        DeleteLink = document.createElement("button");
                        DeleteLink.setAttribute("id", "btnDelete" + result[i].CustomerID);
                        //DeleteLink.setAttribute("onclick", "Delete(" + result[i].CustomerID + ")");
                        DeleteLink.innerHTML = "DELETE";
                        DeleteLink.className = "btnAction";
                       
                        col0.appendChild(EditLink);
                        col0.appendChild(DeleteLink);

                        col1 = document.createElement("td");
                        col1.innerHTML = result[i].FirstName;
                        col2 = document.createElement("td");
                        col2.innerHTML = result[i].LastName;
                        tblRow.appendChild(col0);
                        tblRow.appendChild(col1);
                        tblRow.appendChild(col2);
                        tblCustomers.appendChild(tblRow);
                        createEditEventListener(result[i].CustomerID);
                        createDeleteEventListener(result[i].CustomerID);
                    }
                })
        })
}

GetCustomers();

function createEditEventListener(cid) {
    const elemEdit = document.querySelector('[id=btnEdit'+cid+']');
    return elemEdit.addEventListener('click', function (event) {
        Edit(cid);
    })
}
function createDeleteEventListener(cid) {
    const elemDelete = document.querySelector('[id=btnDelete'+cid+']');
    return elemDelete.addEventListener('click', function (event) {
        Delete(cid);
    })
}

function Edit(custID) {
    var data = {
        CustomerID: custID,
        FirstName: "UpdatedFname",
        LastName: "UpdatedLname"
    }
    fetch("http://localhost/serverside/api/Customers/" + custID, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "content-type": "application/json"
        }
    }).then(function (response) {
        //response.json().then(function (res) {

        //}) 
        alert("Customer Update!");
        window.location = "ViewCustomers.html";
        console.log(res);
    });
    console.log("Editing" + custID);
    return "Editing Done!";
}
function Delete(custID) {
    if (confirm("Are you sure you want to delete this?")) {
        fetch("http://localhost/serverside/api/Customers/" + custID, {
            method: "DELETE"
        }).then(function (response) {
            response.json().then(function (res) {
                alert("Customer is deleted!");
                window.location = "ViewCustomers.html";
                console.log(res);
            })
        });
    }
    console.log("Deleting" + custID);
}




//})();