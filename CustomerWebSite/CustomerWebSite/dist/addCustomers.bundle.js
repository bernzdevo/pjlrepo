!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){let n=document.getElementById("txtAge");n.addEventListener("change",function(){n.value<18?(n.setCustomValidity("Age is Invalid!"),n.className="AgeInvalid"):(n.setCustomValidity(""),n.className="AgeValid"),console.log("Check Age!")}),document.getElementById("frmCustomers").addEventListener("submit",function(t){t.preventDefault();var e={FirstName:document.getElementById("txtFname").value,LastName:document.getElementById("txtLname").value};fetch("http://localhost/serverside/api/Customers",{method:"POST",body:JSON.stringify(e),headers:{"content-type":"application/json"}}).then(function(t){t.json().then(function(t){alert("Customer Added!"),window.location="ViewCustomers.html",console.log(t)})})});var o=function(t,e){this.First=t,this.Last=e,this.Combine=function(){console.log(this.First+" "+this.Last)}};o.prototype={LastNameFirst:function(){console.log(this.Last+" "+this.First)}};var r=function(t,e){var n=t;this.Efname=t,this.Elname=e,this.myFunction=function(){console.log(n)}};customer1=new o("fname1","lname1"),(r.prototype=new o).constructor=r,employee1=new r("emp1","emp1last");Object.create(Object.getPrototypeOf(customer1));customer2=new class{constructor(t,e){this.First=t,this.Last=e}LastNameFirst(){console.log(this.Last+"  "+this.First)}}("newFname2","newLname2")}]);