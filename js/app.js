var order = document.getElementById("order").addEventListener("click", function(){
    //document.getElementsByClassName("order-section").scrollIntoView(true);
    alert('hello boy');
});

//calculation requirements
//size prices from small to xlarge
var sm = 200;
var md = 350;
var lrg = 450;
var xlrg = 600;
//crust price from normal to glutttenfree
var normal = ''
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
toppingsPrices['peineapple'] = 50;
toppingsPrices['olives'] = 50;
toppingsPrices['tomato'] = 30;

//getting order
var size = '';
var crust = '';
var toppings = [];
var quantity = '';
var totalAmt = ''

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
  var toppings = document.getElementsByName('toppings[]');
  var selectedToppings = [].filter.call(toppings, function(c) {
    return c.checked;
  }).map((c) => c.value);
  console.log(selectedToppings);
  if(selectedToppings.length <=0) {
      alert('Select a topping');
      return [];
  } else {
      toppings=0;
      for(var i=0; i< selectedToppings.length; i++) {
        toppings+=toppingsPrices[selectedToppings[i]]
      } 
    //alert(toppings);
    toppings = parseInt(toppings);
    return selectedToppings;
  }     
}

//compute total
function total() {
    totalAmt = 0;
    totalAmt +=size;
    totalAmt +=crust;
    totalAmt +=toppings; 
    alert(totalAmt);
}


document.getElementById("addOrder").addEventListener("click", function getOrder(){
    //gets everything
    getSize();
    getCrust();
    getToppings();
    total();
});

