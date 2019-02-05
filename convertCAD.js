function convertToUSD(event) {
  if ( event.target.value > 1 && event.target.value < 1000000 ) {
    // remove error message
    document.getElementById("CADvalidation").classList.remove("has-error");
    document.getElementById("errorMessage").innerHTML = "";
    // Check money.js has finished loading:
    if ( typeof fx !== "undefined" && fx.rates ) {
      fx.settings = {
        from : "CAD",
        to : "USD",
        base : "CAD"
        }
      } else {
        fxSetup = {
          from : "CAD",
          to : "USD",
          base : "CAD",
          // hardcode an approximate.  I don't like it either.
          rates : { "USD" : 0.76, "CAD" : 1 }
        }
      }

    var changeEl = document.getElementById("equivUSD");
    var converted = fx.convert(event.target.value);
    changeEl.innerHTML = "USD$ " + converted.toFixed(2);
  } else {
    var cadvalid = document.getElementById("CADvalidation");
    cadvalid.classList.add("has-error");
    document.getElementById("errorMessage").innerHTML = "Please enter a dollar value between 1 and 1,000,000";
  }
}

document.addEventListener("DOMContentLoaded",function() {
    document.getElementById("CAD").onchange=convertToUSD;
    // pre-fetch the exchange rates
    $.getJSON(
    	// using Open Exchange Rates
        'https://openexchangerates.org/api/latest.json?app_id=8fcd3600b7084946911bef59c67775f9',
        function(data) {
            // Check money.js has finished loading:
            if ( typeof fx !== "undefined" && fx.rates ) {
                fx.rates = data.rates;
                fx.base = data.base;
            } else {
                // If not, apply to fxSetup global:
                var fxSetup = {
                    rates : data.rates,
                    base : data.base
                }
            }
        }
    );
}, false);
