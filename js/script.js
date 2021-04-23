//business logic

//add pizza

function Pizza(size, crust, topping, price){
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.price = price;
}

crustarr = ['20|Bagels','30|FlatBread', '40|Thin-Crust', '50|Sicilian Style', '60|Cheese-Stuffed Crust','70|Neapolitan Crust'];
toppingarr = ['110|Pepperoni', '120|Mushrooms', '130|Onions', '140|Sausage', '150|Extra cheese', '160|Black olives', '170|Green peppers']

$(document).ready(function(){
  $("#pizza-form").submit(function(event){
    event.preventDefault();
    let pizzasize = $("input:radio[name=size]:checked").val();
    let pizzacrust = $("#crustpizza").val();
    let pizzatopp = $("#topppizza").val();

    let pizzaOrder = new Pizza(pizzasize, pizzacrust, pizzatopp);

    total = 0
    
    if (pizzasize === "small"){
      total += 400;
    }else if(pizzasize === "medium"){
      total += 750;
    }else if(pizzasize === "large"){
      total += 1300;
    }else if(pizzasize === "xlarge"){
      total += 1800;
    }else{
      alert("Choose One");
    }

    for (let i in crustarr){
      let pair = crustarr[i].split("|");
      if (pair[1] == pizzacrust){
        total += parseInt(pair[0]);
      }
    };

    for (let i in toppingarr){
      let pair = toppingarr[i].split("|");
      if (pair[1] == pizzatopp){
        total += parseInt(pair[0]);
      }
    };

    console.log(total)


    $("#checkout").append("<tr><td>"+pizzaOrder.size+"</td><td>"+pizzaOrder.crust+"</td><td>"+pizzaOrder.topping+"</td><td>"+pizzaOrder.price+"</td></tr>")
  });
});

$(window).on("load", function () {
  let crustselect = $("#crustpizza");
  let toppingselect = $("#topppizza")

  for (let i in crustarr){
    let pair = crustarr[i].split("|");
    let newOption = document.createElement("option");
    newOption.value = pair[1];
    newOption.innerHTML = pair[1];
    crustselect.append(newOption);
  };

  for (let i in toppingarr){
    let pair = toppingarr[i].split("|");
    let newOption = document.createElement("option");
    newOption.value = pair[1];
    newOption.innerHTML = pair[1];
    toppingselect.append(newOption);
  };
});