//business logic

//add pizza

function Pizza(size, crust, topping, price){
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.price = price;
}

crustarr = ['Bagels','FlatBread', 'Thin-Crust', 'Sicilian Style', 'Cheese-Stuffed Crust',' Neapolitan Crust'];
toppingarr = ['Pepperoni', 'Mushrooms', 'Onions', 'Sausage', 'Extra cheese', 'Black olives', 'Green peppers']

$(document).ready(function(){
  $("#pizza-form").submit(function(event){
    event.preventDefault();
    let pizzasize = $("input:radio[name=size]:checked").val();
    let pizzacrust = $("#crustpizza").val();
    let pizzatopp = $("#topppizza").val();

    let pizzaOrder = new Pizza(pizzasize, pizzacrust, pizzatopp);

    price_small = 0;
    price_medium = 0;
    price_large = 0;
    price_xlarge = 0;
    
    if (pizzasize === "small"){
      price_small = 500;
    }else if(pizzasize === "medium"){
      price_medium += 900;
    }else if(pizzasize === "large"){
      price_large += 1500;
    }else if(pizzasize === "xlarge"){
      price_small += 2000;
    }else{
      alert("Choose One");
    }

    if (pizzasize === "small"){
      price_small 
    }

    $("#checkout").append("<tr><td>"+pizzaOrder.size+"</td><td>"+pizzaOrder.crust+"</td><td>"+pizzaOrder.topping+"</td><td>"+pizzaOrder.price+"</td></tr>")
  });
});

$(window).on("load", function () {
  let crustselect = $("#crustpizza");
  let toppingselect = $("#topppizza")

  for (let i in crustarr){
    let newOption = document.createElement("option");
    newOption.value = crustarr[i];
    newOption.innerHTML = crustarr[i];
    crustselect.append(newOption);
  };

  for (let i in toppingarr){
    let newOption = document.createElement("option");
    newOption.value = toppingarr[i];
    newOption.innerHTML = toppingarr[i];
    toppingselect.append(newOption);
  };
});