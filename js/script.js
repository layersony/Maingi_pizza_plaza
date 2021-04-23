//business logic

//add pizza

function Pizza(size, crust, topping, quan, total){
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.quan = quan;
  this.total = total;
}

crustarr = ['20|Bagels','30|FlatBread', '40|Thin-Crust', '50|Sicilian Style', '60|Cheese-Stuffed Crust','70|Neapolitan Crust'];
toppingarr = ['110|Pepperoni', '120|Mushrooms', '130|Onions', '140|Sausage', '150|Extra cheese', '160|Black olives', '170|Green peppers']

fintotal = 0;
$(document).ready(function(){
  $("#pizza-form").submit(function(event){
    event.preventDefault();
    let pizzasize = $("input:radio[name=size]:checked").val();
    let pizzacrust = $("#crustpizza").val();
    let pizzatopp = $("#topppizza").val();
    let pizzaquanity = parseInt($("#quantity").val());

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

    let finaltotal = total * pizzaquanity;
    let pizzaOrder = new Pizza(pizzasize, pizzacrust, pizzatopp, pizzaquanity, finaltotal);

    fintotal += finaltotal

    $("#checkout").prepend("<tr id='pizzaline'><td>"+pizzaOrder.size+"</td><td>"+pizzaOrder.crust+"</td><td>"+pizzaOrder.topping+"</td><td>"+pizzaOrder.quan+"</td><td>"+pizzaOrder.total+"</td></tr>")

    $("#pizzaline").last().click(function(){
      $(this).closest("tr").remove();
      fintotal -= parseInt(pizzaOrder.total)
    });

    $("#chckttl").click(function(){
      $("#ttl").text(fintotal);
    });
    
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