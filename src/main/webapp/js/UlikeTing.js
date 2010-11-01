
// Best practice nr 1 - bruke namespace på alle funksjoner

var Funksjoner = {};

Funksjoner.pluss = function(tall1, tall2) {
  return tall1 + tall2;
}

Funksjoner.finnId = function(felt) {
  var id = jQuery(felt).attr("id");
  return id.match(/\d+/);
}

// Best practice nr 2 - ??

// Best practice nr 3 - profit!
