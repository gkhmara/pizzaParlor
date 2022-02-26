function Menu(size, topping= []) {
  this.size = size;
  this.topping = topping= [];
  this.total = 0;
}

let order1 = new Menu();

Menu.prototype.totalOrder = function() {
  
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
  return order1.total;
}

Menu.prototype.clearTotal = function() {
  this.total = 0;
}

$(document).ready(function(){
  $("#menu").submit(function(event){
    event.preventDefault();
    order1.size = document.getElementById("size").value;
    order1.topping[0] = document.getElementById("topping1").value;
    order1.topping[1] = document.getElementById("topping2").value;
    order1.topping[2] = document.getElementById("topping3").value;
    order1.topping[3] = document.getElementById("topping4").value;
    const total = order1.totalOrder();
    $("#total").text("Your total is $" + total + ".00");
    console.log(order1);
    order1.clearTotal();
  });
});