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
  