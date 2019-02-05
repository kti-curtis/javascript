let convertToUSD = function (event) {
  if ( event.target.value >= 100 || event.target.value <= 1 ) {
    var change = document.getElementById("equivUSD");
    console.log("amount.target.value: ", event.target.value);
    change.innerHTML = event.target.value;
  } else {
    var cadvalid = document.getElementById("CADvalidation");
    cadvalid.innerHTML = "Enter a number between 1 and 100";
  }
}

document.addEventListener("DOMContentLoaded",function() {
    document.getElementById("CAD").onchange=convertToUSD();
}, false);
