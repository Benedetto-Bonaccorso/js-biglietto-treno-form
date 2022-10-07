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

let ticketName = document.querySelector("#ticketname");
let ticketKilometers = document.querySelector("#ticketkilometers")
let ticketdiscount = document.querySelector("#ticketdiscount")
let ticketWagon = document.querySelector("#ticketwagon")
let ticketPrice = document.querySelector("#ticketprice")

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
        ticketdiscount.innerHTML = "Discount: minors"
    } else if(age >= 65){
        discount = ((preDiscountPrice /100) *seniorDiscountRate)
        price = preDiscountPrice - discount
        ticketdiscount.innerHTML = "Discount: seniors"
    } else {
        price = preDiscountPrice
        ticketdiscount.innerHTML = "Discount: none eligible"
    }
    
    price = price.toFixed(2)
    
    let wagonRng = Math.round(Math.random()*10)

    ticketName.innerHTML = fName
    ticketKilometers.innerHTML = kilo
    ticketWagon.innerHTML = wagonRng
    ticketPrice.innerHTML = "&#8364;" + price


    console.log("a")
    console.log(age,fName,kilo,price)
});