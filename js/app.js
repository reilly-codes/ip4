var order = document.getElementById("order").addEventListener("click", function(){
    document.getElementById("orderSect").scrollIntoView(true);
    //alert('hello boy');
});

//calculation requirements
//size prices from small to xlarge
var sm = 200;
var md = 350;
var lrg = 450;
var xlrg = 600;
//crust price from normal to glutttenfree
var normal = 0;
var crispy = 150;
var stuffed = 200;
var gluttenFree = 300;
//toppings prices
var toppingsPrices = [];
toppingsPrices['bacon'] = 100;
toppingsPrices['ham'] = 100;
toppingsPrices['sausage'] = 100;
toppingsPrices['pepperoni'] = 100;
toppingsPrices['chicken'] = 100;
toppingsPrices['beef'] = 100;
toppingsPrices['pepper'] = 50;
toppingsPrices['onion'] = 30;
toppingsPrices['mushroom'] = 50;
toppingsPrices['pineapple'] = 50;
toppingsPrices['olives'] = 50;
toppingsPrices['tomato'] = 30;

//getting order
var size = 0;
var crust = 0;
var toppings = 0;
var quantity = 1;
var quantified = 0;
var totalAmt = 0;
//var toBePaid = 0;
var selectedToppings = [];

//function for size
function getSize(){    
    if(document.getElementById("small").checked){
        size = sm;
    }else if(document.getElementById("medium").checked){
        size = md;
    }
    else if(document.getElementById("large").checked){
        size = lrg;
    }
    else if(document.getElementById("extraLarge").checked){
        size = xlrg;
    }
    else{
        alert('Pick Pizza size');
    }
}

//function for crust type
function getCrust(){
    if(document.getElementById("normal").checked){
        crust = normal
    }else if(document.getElementById("crispy").checked){
        crust = crispy
    }
    else if(document.getElementById("stuffed").checked){
        crust = stuffed
    }
    else if(document.getElementById("gluttenFree").checked){
        crust = gluttenFree
    }
    else{
        alert('Pick Crust type');
    }
}


//function for toppings
function getToppings(){
  var alltoppings = document.getElementsByName('toppings[]');
  selectedToppings = [].filter.call(alltoppings, function(c) {
    return c.checked;
  }).map((c) => c.value);
  //console.log(selectedToppings);
  if(selectedToppings.length <=0) {
      alert('Select a topping');
  } else {
      toppings=0;
      for(var i=0; i< selectedToppings.length; i++) {
        toppings+=toppingsPrices[selectedToppings[i]]
      } 
    // alert(toppings);
  }     
}

//compute total
function total() {
    totalAmt = 0;
    totalAmt = parseInt(size) + parseInt(crust) + parseInt(toppings); 
     //totalAmt =  parseInt(toppings); 
    //alert(totalAmt);
}

//quantity
function multiplier() {
    quantity = document.getElementById("qty").value;
    if(quantity == '' || quantity =='0'){
        alert("choose valid quantity");
    }
    else {
        //alert(quantity);
        quantified =parseInt(totalAmt) * parseInt(quantity);
        //alert(quantified);
    }
}

function reset(){
    document.getElementById('order-form').reset();
}

//update the made order section
function updateList(){
    let rowDiv = document.createElement('div');
    rowDiv.setAttribute("class","row");
    let colOne = document.createElement('div');
    colOne.setAttribute("class","col-md-3");
    let colTwo = document.createElement('div');
    colTwo.setAttribute("class","col-md-3");
    let colThree = document.createElement('div');
    colThree.setAttribute("class","col-md-3");   
    let colFour = document.createElement('div');
    colFour.setAttribute("class","col-md-1");
    let colFive = document.createElement('div');
    colFive.setAttribute("class","col-md-1");
    let colSix = document.createElement('div');
    colSix.setAttribute("class","col-md-1");
    
    rowDiv.appendChild(colSix);
    rowDiv.insertBefore(colFive, colSix);
    rowDiv.insertBefore(colFour, colFive);
    rowDiv.insertBefore(colThree, colFour);
    rowDiv.insertBefore(colTwo, colThree);
    rowDiv.insertBefore(colOne, colTwo);
    
    //remove button
    let removeBtn =document.createElement("button");
    removeBtn.setAttribute("class", "removebtn")
    removeBtn.appendChild(document.createTextNode("Remove"));
    removeBtn.addEventListener("click", function removeItem() {
        rowDiv.remove();
    });
    
    colFour.appendChild(document.createTextNode(quantity));
    colFive.appendChild(document.createTextNode(quantified));
    colSix.appendChild(removeBtn);
    document.querySelector("#summary").appendChild(rowDiv);

    //output size and price
    if(size == sm){
        colOne.appendChild(document.createTextNode('small ' +'(' + size + ')'));
    }
    else if(size == md){
        colOne.appendChild(document.createTextNode('medium ' +'(' + size + ')'));
    }
    else if(size == lrg){
        colOne.appendChild(document.createTextNode('large ' +'(' + size + ')'));
    }
    else if(size == xlrg){
        colOne.appendChild(document.createTextNode('extra large ' +'(' + size + ')'));
    }

    //output crust type ad price
    if(crust == normal){
        colTwo.appendChild(document.createTextNode('normal ' + '(' + crust +')'));
    }
    else if(crust == crispy){
        colTwo.appendChild(document.createTextNode('crispy ' + '(' + crust +')'));
    }
    else if(crust == stuffed){
        colTwo.appendChild(document.createTextNode('stuffed ' + '(' + crust +')'));
    }
    else if(crust == gluttenFree){
        colTwo.appendChild(document.createTextNode('glutten free ' + '(' + crust +')'));
    }

    //selected toppings
    colThree.appendChild(document.createTextNode(selectedToppings.join(', ')));

    //total amount
}

document.getElementById("addOrder").addEventListener("click", function getOrder(){
    //gets everything
    getSize();
    getCrust();
    getToppings();
    total();
    multiplier();
    updateList();
    //finish functions
    reset();
});

//delivery
function delivery() {
    var deliver = document.getElementById("deliver");
    if(deliver.checked == true){
        // alert("Hello World!");
        var location = prompt('Enter your Location');
        if(location != ""){
            //alert("Your pizza will be delivered to " + location + " in 30 mins");
            var deliverSummary = document.createElement("div");
            deliverSummary.setAttribute("class", "deliver");
            deliverSummary.appendChild(document.createTextNode("Your order will be delivered to " + location + " in 30 mins"));
            var fika = document.querySelector(".delivery");
            fika.appendChild(deliverSummary);
        }
        else{
            alert("enetr valid location");
        }
    }
    else{
        alert("Pickup order in 30 minutes");
    }
}

document.getElementById("checkout").addEventListener("click", function checkout(){
    delivery();
});