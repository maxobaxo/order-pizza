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

function Contact(name, phone) {
  this.name = name;
  this.phone = phone;
  this.addresses = [];
};

function Address(street, city, zip) {
  this.street = street;
  this.city = city;
  this.zip = zip;
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
    $("#order-confirm").append("<h5>Toppings</h5><ul class='toppings'</ul>");
    newPizza.toppings.forEach(function(item) {
      $("#order-confirm").append("<li class='list-inline'>" + item + "</li>");
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

  $("#delivery").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val();
    var phone = $("input#phone").val();
    newContact = new Contact(name, phone);

    var street = $(this).find("input#street").val();
    var city = $(this).find("input#city").val();
    var zip = $(this).find("input#zip").val();
    var newAddress = new Address(street, city, zip);
    newContact.addresses.push(newAddress);

    $(".name").append(newContact.name);
    $(".street").text(newAddress.street + ", " + newAddress.city + ", " + newAddress.zip);
    $(".on-our-way").show();

    // $(".contact").last().click(function() {
    //   $("#show-contact").show();
    //   $("#show-contact h2").text(newContact.fullName());
    //   $(".first-name").text(newContact.firstName);
    //   $(".last-name").text(newContact.lastName);
    //   $("ul#addresses").text("");
    //   newContact.addresses.forEach(function(address) {
    //     $("ul#addresses").append("<li>" + address.street + ", " + address.city + " " + address.state + "</li>");
    //   });
    // });

  });
});
