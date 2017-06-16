//business logic
function Order(size, toppings) {
  this.size = size;
  this.toppings = toppings;
};

Order.prototype.price = function() {
  var pizzaTotal = 0;

  if (this.size === "small") {
    pizzaTotal += 8;
  } else if (this.size === "medium") {
    pizzaTotal += 10;
  } else {
    pizzaTotal += 12;
  }

  this.toppings.forEach(function(item) {
    if (item === "cheese") {
      pizzaTotal += 1;
    }
    if (item === "pepperoni") {
      pizzaTotal += 2;
    }
    if (item === "olives") {
      pizzaTotal += 1;
    }
    if (item === "sausage") {
      pizzaTotal += 3;
    }
    if (item === "anchovy") {
      pizzaTotal += 2;
    }
  });
  return pizzaTotal;
};

//user interface logic
$(document).ready(function() {
  $("#order-form").submit(function(event) {
    event.preventDefault();

    var sizeInput = $("#size").val();
    var toppingsInput = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      var toppingSelection = $(this).val();
      toppingsInput.push(toppingSelection);
    });
    var newOrder = new Order(sizeInput, toppingsInput);
console.log(newOrder);
console.log(newOrder.toppings);
console.log(newOrder.price());

    $(".size").text(newOrder.size)
    newOrder.toppings.forEach(function(item) {
      $(".toppings").append("<li>" + item + "</li>");
    });
    $(".grandTotal").text(newOrder.price());
    $("#order-confirm").show();
  });
});
