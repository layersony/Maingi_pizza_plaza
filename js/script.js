//business logic

//add pizza

function Pizza(size, crust, topping, quan, total){
  this.size = size;
  this.crust = crust;
  this.topping = [];
  this.quan = quan;
  this.total = total;
}

function Topp(topp1, topp2=""){
  this.topp1 = topp1;
  this.topp2 = topp2;
};

Topp.prototype.addTopp = function(){
  return this.topp1+","+this.topp2;
};

crustarr = ['110|Bagels','120|FlatBread', '140|Thin-Crust', '155|Sicilian Style', '170|Cheese-Stuffed Crust','100|Neapolitan Crust'];
toppingarr = ['70|Pepperoni', '100|Mushrooms', '30|Onions', '60|Sausage', '110|Extra cheese', '60|Black olives', '50|Green peppers']

fintotal = 0;
$(document).ready(function(){
  $("#pizza-form").submit(function(event){
    event.preventDefault();
    let pizzasize = $("input:radio[name=size]:checked").val();
    let pizzacrust = $("#crustpizza").val();
    let pizzatopp = $("#topppizza").val();
    let pizzatopp2 = $("#addtopppizza").val();
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

    for (let i in toppingarr){
      let pair = toppingarr[i].split("|");
      if (pair[1] == pizzatopp2){
        total += parseInt(pair[0]);
      }
    };

    let finaltotal = total * pizzaquanity;
    let pizzaOrder = new Pizza(pizzasize, pizzacrust, pizzatopp, pizzaquanity, finaltotal);
    let pizzaOrderTop = new Topp(pizzatopp, pizzatopp2);

    pizzaOrder.topping.push(pizzaOrderTop)

    fintotal += finaltotal

    $("#checkout").prepend("<tr><td>"+pizzaOrder.size+"</td><td>"+pizzaOrder.crust+"</td><td>"+pizzaOrder.topping[0].topp1+","+pizzaOrder.topping[0].topp2+"</td><td>"+pizzaOrder.quan+"</td><td>"+pizzaOrder.total+"</td><td><i class='fa fa-trash-o' id='pizzaline' aria-hidden='true'></i></td></tr>")

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
          $(".delivr").toggle();
          alert("Collect within 1 hour");
        }else if (location  === "deliver"){
          $(".delivr").toggle();
          $("#ok").click(()=>{alert("Delivery Cost Is 150. Total Cost Ksh " + (fintotal + 150) + "/=");$(".delivr").toggle()})
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
  let toppingselect2 = $("#addtopppizza");
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

    let newOption2 = document.createElement("option");
    newOption2.value = pair[1];
    newOption2.innerHTML = pair[1];
    toppingselect2.append(newOption2);

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
  $("#addtopp").click(function(){
    $("#toadd").toggle(500);
  });
});