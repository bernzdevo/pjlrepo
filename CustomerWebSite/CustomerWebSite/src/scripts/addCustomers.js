let ageInput = document.getElementById("txtAge");

function CheckAge() {

    if (ageInput.value < 18) {
        ageInput.setCustomValidity("Age is Invalid!");
        ageInput.className = "AgeInvalid";
    } else {
        ageInput.setCustomValidity("");
        ageInput.className = "AgeValid";
    }
    console.log("Check Age!");
}

ageInput.addEventListener("change", CheckAge);
//Add Customer Codes
var customerForm = document.getElementById("frmCustomers");
customerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = {
        FirstName: document.getElementById("txtFname").value,
        LastName:  document.getElementById("txtLname").value
    }
    fetch("http://localhost/serverside/api/Customers", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "content-type":"application/json"
        }
    }).then(function (response) {
        response.json().then(function (res) {
            alert("Customer Added!");
            window.location="ViewCustomers.html";
            console.log(res);
        })
    });

});


var Customers = function (fname, lname) {
    this.First = fname;
    this.Last = lname;
    this.Combine = function () {
        console.log(this.First + " " + this.Last);
    }
}

Customers.prototype = {
    LastNameFirst : function () {
        console.log(this.Last+" "+this.First);
    }
}


var Employees = function (fname, lname) {
    var X=fname;

    this.Efname = fname;
    this.Elname = lname;
    this.myFunction = function () {
        console.log(X);
    }
}

customer1 = new Customers("fname1", "lname1");

Employees.prototype = new Customers();
Employees.prototype.constructor = Employees;
employee1 = new Employees("emp1","emp1last");






var newObj = Object.create(Object.getPrototypeOf(customer1));

class CustomerClass {
    constructor(fname,lname) {
        this.First = fname;
        this.Last = lname;
    }
    LastNameFirst() {
        console.log(this.Last+"  "+this.First);
    }
}

customer2 = new CustomerClass("newFname2", "newLname2");





















//var btn = document.getElementById("btnTest");
//btn.addEventListener("click", function () {
//    var data = {
//        FirstName: "sample string 2",
//        LastName: "sample string 3"
//    }

//    fetch("http://localhost/serverside/api/Customers", {
//        method: "POST",
//        body: JSON.stringify(data),
//        headers: {
//            "content-type": "application/json"
//        }
//    }).then(function (response) {
//        response.json().then(function (res) {
//            console.log(res);
//        })
//    });

//});
