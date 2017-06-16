//business logic
function Order(size, toppings) {
  this.size = size;
  this.toppings = toppings;
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

    // $("#order-confirm").show();
    // var sizeInput = $("#size").val();
    // $(".size").text(sizeInput);
  });
});
