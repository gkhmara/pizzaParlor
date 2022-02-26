//constructor
function Menu(size, topping= []) {
  this.size = size;
  this.topping = topping= [];
  this.total = 0;
}

//USER INPUT
let sizeTest = ["medium"];
let toppingTest = ["pepperoni", "cheese"];

//prototype method
Menu.prototype.fullOrder = function() {
  return this.size + " " + this.topping[0];
}

//new objects
let order1 = new Menu();
let order2 = new Menu();

//console.log
console.log(order1);

// for (const key in order1) {
//   if(order1.hasOwnProperty(key)) {
//     console.log(order1[key]);
//   }
// }

Menu.prototype.displayToppings = function() {
  
  if(order1.size === "small") {
    this.total += 3.00;
  } else if (order1.size === "medium") {
    this.total += 4.00;
  } else if (order1.size === "large") {
    this.total += 5.00;
  }
  
  
  
  for(let i = 0; i < order1.topping.length; i++) {

    if(order1.topping[i] === "cheese") {
      this.total += 1.00;
    }

    if(order1.topping[i] === "pepperoni") {
      this.total += 2.00;
    }

    if(order1.topping[i] === "anchovies") {
      this.total += 3.00;
    }

    if(order1.topping[i] === "pineapple") {
      this.total += 4.00;
    }
  }
  // console.log(order1.total);
  return order1.total;
}


// console.log(order1.displayToppings());
// console.log("Your total is $" + order1.total);

//prototype method
// Menu.prototype.customerOrder = function () {
//   order1.size = prompt("What size?");
//   order1.topping = prompt("What topping?");

//   if (order1.size === "medium") {
//     console.log("You owe $5");
//   }
// }


// Menu.prototype.customerOrder = function () {
//   this.size = prompt("What size?");
//   this.topping = prompt("What topping?");
// }

// order1.customerOrder();
// console.log(order1);

$(document).ready(function(){
  $("#menu").submit(function(event){
    event.preventDefault();
    order1.size = document.getElementById("size").value;
    order1.topping[0] = document.getElementById("topping1").value;
    order1.topping[1] = document.getElementById("topping2").value;
    order1.topping[2] = document.getElementById("topping3").value;
    order1.topping[3] = document.getElementById("topping4").value;
    const total = order1.displayToppings();
    console.log(order1.size);
    console.log(order1.topping);
    console.log(order1);
    console.log("Your total is $" + total + ".00");
    $("#total").text("Your total is $" + total + ".00");
  });
  $('#refresh').click(function() {
    location.reload();
  });
});