//business logic
function Cart() {
  this.items = [];
};

Cart.prototype.addToCart = function(newPizza) {
  this.items.push(newPizza);
  return this.items;
  this.grandTotal = 0;
};

// Cart.prototype.totalPrice = function() {
//   this.items.forEach(function(item) {
//     this.grandTotal += item.pizzaTotal();
//   });
//   return this.grandTotal;
// };

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.pizzaTotal = 0;
};

Pizza.prototype.price = function() {
  if (this.size === "small") {
    this.pizzaTotal += 8;
  } else if (this.size === "medium") {
    this.pizzaTotal += 10;
  } else {
    this.pizzaTotal += 12;
  }

  this.toppings.forEach(function(item) {
    if (item === "cheese") {
      this.pizzaTotal += 1;
    }
    if (item === "pepperoni") {
      this.pizzaTotal += 2;
    }
    if (item === "olives") {
      this.pizzaTotal += 1;
    }
    if (item === "sausage") {
      this.pizzaTotal += 3;
    }
    if (item === "anchovy") {
      this.pizzaTotal += 2;
    }
  });
  return this.pizzaTotal;
};

//user interface logic
$(document).ready(function() {
  var newOrder = new Cart();

  $("#order-form").submit(function(event) {
    event.preventDefault();

    var sizeInput = $("#size").val();
    var toppingsInput = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      var toppingSelection = $(this).val();
      toppingsInput.push(toppingSelection);
    });
    var newPizza = new Pizza(sizeInput, toppingsInput);
    var addItem = newOrder.addToCart(newPizza);
// console.log(newPizza);
// console.log(newPizza.toppings);
// console.log(newPizza.price());
    $(".size").text(newPizza.size)
    newPizza.toppings.forEach(function(item) {
      $(".toppings").append("<li>" + item + "</li>");
    });
    $(".grandTotal").text(newPizza.price());
    $("#order-confirm").show();
    console.log(addItem);
  });
});
