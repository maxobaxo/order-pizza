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
  };

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
    var newPizzaPrice = newPizza.price();
    newOrder.items.push(newPizza);

    $(".totalPrice").empty();
    $(".totalPrice").append(newOrder.totalPrice());
    $("#order-confirm").append("<h4 class='pizza-title'>" + newPizza.size + " pizza:</h4>");
    $("#order-confirm").append("<h5>Toppings:</h5><ul class='toppings list-inline'></ul>");
    newPizza.toppings.forEach(function(item) {
      $("#order-confirm").append("<li>" + item + "</li>");
    });
    $("#order-confirm").append("<h5>Cost: $" + newPizzaPrice + ".00</h5>");
    $("#order-confirm").show();
  });

  $("#final-submit").click(function(event) {
    event.preventDefault();
    $(".totalPrice").empty();
    $(".totalPrice").append(newOrder.totalPrice());
    $("#time-to-leave").show();
  });
});
