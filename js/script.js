//business logic

//add pizza

function Pizza(type, size, crust, topping){
  this.type = type;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
}

$(document).ready(function(){
  $("#pizza-form").submit(function(event){
    event.preventDefault();
    let pizzatype = $("#tpizza").val();
    let pizzasize = $("input:radio[name=size]:checked").val();
    let pizzacrust = $("#crustpizza").val();
    let pizzatopp = $("#topppizza").val();


    console.log(pizzatype);
    console.log(pizzasize);
    console.log(pizzacrust);
    console.log(pizzatopp);

  });
});