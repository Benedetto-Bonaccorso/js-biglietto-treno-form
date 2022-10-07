let fNameInput = document.querySelector("#fullname");
let kiloInput = document.querySelector("#kilometers");
let ageInput = document.querySelector("#age");

let fName;
let kilo;
let age;

let pricePerKilometer = 0.21
let minorDiscountRate = 20
let seniorDiscountRate = 40

let discount;
let price;


document.getElementById('submitbtn').addEventListener("click", function() {
    fName = fNameInput.value
    kilo = kiloInput.value
    age = ageInput.value
    
    if(isNaN(kilo)||isNaN(age)){
        alert("Please insert valid credentials under \"Name and Surname\" and \"kilometers\" ")
    }

    let preDiscountPrice = kilo*pricePerKilometer

    if(age <=18){
        discount = ((preDiscountPrice /100) *minorDiscountRate)
        price = preDiscountPrice - discount
    } else if(age >= 65){
        discount = ((preDiscountPrice /100) *seniorDiscountRate)
        price = preDiscountPrice - discount
    } else {
        price = preDiscountPrice
    }

    console.log("a")
    console.log(age,fName,kilo,price)
});