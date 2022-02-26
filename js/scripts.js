//constructor
function Menu(size, topping) {
  this.size = size;
  this.topping = topping;
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
let order1 = new Menu(["small", "medium", "large"], ["cheese", "pepperoni", "anchovies", "pineapple"]);
let order2 = new Menu();

// for (const key in order1) {
//   if(order1.hasOwnProperty(key)) {
//     console.log(order1[key]);
//   }
// }

Menu.prototype.displayToppings = function() {
  for(let i = 0; i < order1.topping.length; i++) {

    if(sizeTest[i] === order1.size[i]) {
      this.total += 3.00
    }

    if(toppingTest[i] === "cheese") {
      this.total += 1.99;
    }

    if(toppingTest[i] === "pepperoni") {
      this.total += 2.99;
    }
  }
  console.log(order1.total);
}


console.log(order1.displayToppings());
console.log("Your total is $" + order1.total);

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

$(document).click(function(){
  $("#menu").submit(function(event){
    event.preventDefault();
    // let topping = [];
    order2.topping = document.getElementById("topping1").value;
    const secondTopping = document.getElementById("topping2").value;
    console.log(order2.topping);
    console.log(secondTopping);
  });
});