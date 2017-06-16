//business logic
function Cart() {
  this.items = [];
};

Cart.prototype.totalPrice = function() {
  this.grandTotal = 0;
  for (var i = 0; i < this.items.length; i++) {
    this.grandTotal += this.items[i].pizzaTotal;
  }
  return this.grandTotal;
};

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
    var newPizzaprice = newPizza.price();
    newOrder.items.push(newPizza);
    // var updatedTotal = newOrder.totalPrice();

    $("order-confirm h3").empty();
    for (var i = 1; i <= newOrder.items.length; i++) {
      $("#order-confirm h3").append("<h4 class='pizza-title'>Pizza #" + i + ":</h4>");
      // $("#order-confirm h3").append(newOrder.addToCart());
    }
    // $(".size").text(newPizza.size)
    // newPizza.toppings.forEach(function(item) {
    //   $(".toppings").append("<li>" + item + "</li>");
    // });
    // $(".pizzaTotal").text(newPizza.price());
    $("#order-confirm").show();
    console.log(newOrder.totalPrice());
  });
});
