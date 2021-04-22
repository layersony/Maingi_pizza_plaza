//business logic

//add pizza

function Pizza(type, size, crust, topping, price){
  this.type = type;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.price = price;
}

$(document).ready(function(){
  $("#pizza-form").submit(function(event){
    event.preventDefault();
    let pizzatype = $("#tpizza").val();
    let pizzasize = $("input:radio[name=size]:checked").val();
    let pizzacrust = $("#crustpizza").val();
    let pizzatopp = $("#topppizza").val();

    let pizzaOrder = new Pizza(pizzatype,pizzasize, pizzacrust, pizzatopp)
    
    $("#checkout").append("<tr><td>"+pizzaOrder.type+"</td><td>"+pizzaOrder.size+"</td><td>"+pizzaOrder.crust+"</td><td>"+pizzaOrder.topping+"</td><td>"+pizzaOrder.price+"</td></tr>")
  });
});