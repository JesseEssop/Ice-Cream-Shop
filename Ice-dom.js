var flavours = document.querySelector(".flavourDropDown");
var container = document.querySelector(".containerDropDown");
var selectBtn = document.querySelector(".SelectBtn");
var addBtn = document.querySelector(".addBtn");
var toppings = document.querySelector(".toppings");
var Total = document.querySelector(".Total")
var iceInstance = IceCreamFactory()
var getPriceBtn = document.querySelector(".getPriceBtn");
// const toppers = document.querySelectorAll(".toppers:checked");



var active;

var iceCreamPrice = 0

var topTing = []

var topsPrice = 0;

window.onload = function () {
    toppings.style.display = 'none';
    active = false;
}

selectBtn.addEventListener("click", function () {
    if (!active) {
        toppings.style.display = 'unset';
        active = true;
    }
    else {
        toppings.style.display = 'none';
        active = false;
    }
});

function topStuffs (){
    const iceInstanceFunc = IceCreamFactory()

    const toppers = document.querySelectorAll(".toppers:checked");
    // var toppingArray = []

    toppers.forEach((element) => {
        iceInstanceFunc.topping(element.value);
        // toppingArray.push(element.value)
    });

    

    // var tops = iceInstance.topping(toppers);
    topsPrice = iceInstanceFunc.total();

    console.log(topsPrice);

}
addBtn.addEventListener("click", topStuffs);

getPriceBtn.addEventListener('click', function () {

    var flav = iceInstance.flavour(flavours.value);
    var con = iceInstance.contains(container.value);

    console.log(con)

    
    var conPrice = iceInstance.total(flav, con)
    console.log(conPrice);

    iceCreamPrice = conPrice + topsPrice
    console.log(iceCreamPrice)

    Total.innerHTML = "R" + iceCreamPrice

})














