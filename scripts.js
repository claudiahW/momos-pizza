console.log('Hello')
function getSize() {
    var size = document.getElementById("pizzaSize").value;
    
    return parseInt(size);
  }
  function getCrust() {
    var crust = document.getElementById("pizzaCrust").value;
    return parseInt(crust);
  }
  
  function getTopping() {
    var topping = document.getElementById("pizzaTopping").value;
    return parseInt(topping);
  }
  function getQuantity() {
    var number = document.getElementById("quantity").value;
    return parseInt(number);
  }
  console.log(getSize()) ;
  function totalAmount() {
      var totals = (getSize() + getCrust() + getTopping()) * getQuantity();
      alert(
      "Your order of "  +
       getQuantity ("") +
      " Pizza, " + 
      " " +  "total to Shillings " + 
       totals +
      "" + ""+ ".Thank you for shopping with us!See you soon.")
  };
  
  //local reviews data

  const reviews = [
    {
      id: 1,
      name: "Susan Smith",
      job:"web developer",
      img:"/woman.png" ,
      text: "lorem20",
    },

    {
      id: 2,
      name: "Jane Doe",
      job:"web developer",
      img:"/man.png" ,
      text: "lorem20",
    },

    {
      id: 3,
      name: "Mike Davis",
      job:"web developer",
      img:"/profile.png" ,
      text: "lorem20",
    },

  ];

  //select items 
  const img = document.getElementById("woman.png");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");

  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".prev-btn");
  const randomBtn = document.querySelector(".prev-btn");

  //set starting item
  let currentItem = 0;

  //load initial item
  window.addEventListener("DOMContentLoaded", function(){

    showPerson(currentItem);

  });

  //show person based on item
  function showPerson(person){

   const item = reviews[person];
   img.src = item.img;
   author.textContent = item.name;
   job.textContent = item.job;
   info.textContent = item.text;

  }
  //show next person

  nextBtn.addEventListener("click", function () {
    currentItem++;
    if(currentItem > reviews.length -1){
      currentItem = 0;
    }
    showPerson(currentItem);
  } );

  //show previous person

  prevBtn.addEventListener("click", function () {
    currentItem--;
    if(currentItem <0){
      currentItem = reviews.length -1;
    }

    showPerson(currentItem);
  } );

  

