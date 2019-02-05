function convertToUSD(event) {
  if ( event.target.value > 1 || event.target.value < 100 ) {
    if ( typeof fx !== "undefined" && fx.rates ) {
      fx.settings = {
        from : "CAD",
        to : "USD"
      } else {
        var window.fxSetup = {
          from : "CAD",
          to : "USD",
          base : "CAD",
          rates : { "USD" : 0.76, "CAD" : 1 }
        }
      }

    var change = document.getElementById("equivUSD");
    console.log("event.target.value: ", event.target.value);
    change.innerHTML = "$" + fx.convert(event.target.value) + "USD";
  } else {
    var cadvalid = document.getElementById("CADvalidation");
    cadvalid.innerHTML = "Enter a number between 1 and 100";
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
