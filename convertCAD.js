let convertToUSD = function (amount) {
  if ( amount.target.value >= 100 || amount.target.value <= 1 ) {
    var change = document.getElementById("equivUSD");
    console.log("amount.target.value: ", amount.target.value);
    change.innerHTML = amount.target.value;
  } else {
    var cadvalid = document.getElementById("CADvalidation");
    cadvalid.innerHTML = "Enter a number between 1 and 100";
  }
}

document.addEventListener("DOMContentLoaded",function() {
    document.getElementById("CAD").onchange=convertToUSD();
}, false);
