let seats = document.getElementById("seats-count");
let noOfSeats = document.getElementById("options");
let btn = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let sName =document.getElementById("name");
let sEmail =document.getElementById("email");
let sPhNumber =document.getElementById("phone");
let sAttendee =document.getElementById("attendee");

btn.addEventListener("click", function (event) {
  event.preventDefault();
});

btn2.addEventListener("click",function(event){
    event.preventDefault();
})
var total = 23;

function update() {
    let valuee =false;
    if(sName.value ==""||sEmail.value ==""||sPhNumber.value ==""||sAttendee.value ==""){
       alert("Please enter all values");
          }
  else if (noOfSeats.value  >total) {
    alert("seats not available....");
  } else {
    seats.textContent =
      "Number of available seats:" + `${total - noOfSeats.value}`;
    total -= noOfSeats.value;
  }
}

function cancelDetails(){
    sName.value ="";
    sEmail.value ="";
    sPhNumber.value ="";
    sAttendee.value =""
    noOfSeats.value=1;
}
