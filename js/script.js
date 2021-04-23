//business logic

//add pizza

function Pizza(size, crust, topping, quan, total){
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.quan = quan;
  this.total = total;
}

crustarr = ['110|Bagels','120|FlatBread', '140|Thin-Crust', '155|Sicilian Style', '170|Cheese-Stuffed Crust','100|Neapolitan Crust'];
toppingarr = ['70|Pepperoni', '100|Mushrooms', '30|Onions', '60|Sausage', '110|Extra cheese', '60|Black olives', '50|Green peppers']

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
      total += 450;
    }else if(pizzasize === "medium"){
      total += 800;
    }else if(pizzasize === "large"){
      total += 1350;
    }else if(pizzasize === "xlarge"){
      total += 1850;
    }else{
      alert("Choose Size");
    }

    if(pizzacrust === ""){
      alert("Choose Pizza Crust");
    }else if(pizzatopp === ""){
      alert("Choose Pizza Toppings");
    }else if (pizzaquanity <= 0){
      alert("Quanity Ranges from 1 to 100")
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

    $("#pay").click(function(){
      $(".fin").toggle()
      $("#confr").click(function(){
        let location = $("input:radio[name=pickup]:checked").val();
        if (location === "collect"){
          $(".delivr").hide();
          alert("Collect within 1 hour");
        }else if (location  === "deliver"){
          $(".delivr").toggle();
          $("#ok").click(()=>{alert("Location Recorded, Delivery Cost Is 150");$(".delivr").toggle()})
        }else{
          alert("Choose a Collect of Delivery")
        }
      })
    });
  });
});

$(window).on("load", function () {
  let crustselect = $("#crustpizza");
  let toppingselect = $("#topppizza");
  let crustMenu = $('#crustMenu');
  let toppMenu = $('#toppMenu');

  for (let i in crustarr){
    let pair = crustarr[i].split("|");
    let newOption = document.createElement("option");
    newOption.value = pair[1];
    newOption.innerHTML = pair[1];
    crustselect.append(newOption);

    let row = document.createElement("tr");
  	let cell = document.createElement("td");
    let cell2 = document.createElement("td");
    let cellText = document.createTextNode(pair[1]);
    let cellText2 = document.createTextNode(pair[0]);
    cell.appendChild(cellText);
    cell2.appendChild(cellText2);
    row.appendChild(cell);
    row.appendChild(cell2);
    crustMenu.append(row);
  };

  for (let i in toppingarr){
    let pair = toppingarr[i].split("|");
    let newOption = document.createElement("option");
    newOption.value = pair[1];
    newOption.innerHTML = pair[1];
    toppingselect.append(newOption);

    let row = document.createElement("tr");
  	let cell = document.createElement("td");
    let cell2 = document.createElement("td");
    let cellText = document.createTextNode(pair[1]);
    let cellText2 = document.createTextNode(pair[0]);
    cell.appendChild(cellText);
    cell2.appendChild(cellText2);
    row.appendChild(cell);
    row.appendChild(cell2);
    toppMenu.append(row);
  };

});