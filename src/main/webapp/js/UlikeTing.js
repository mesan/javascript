
// Best practice nr 1 - bruke namespace på alle funksjoner

var Funksjoner = {};

Funksjoner.pluss = function(tall1, tall2) {
  return tall1 + tall2;
}

Funksjoner.finnId = function(felt) {
  var id = jQuery(felt).attr("id");
  return id.match(/\d+/);
}

Funksjoner.finnNesteId = function(tabell) {
  var rader = jQuery(tabell + " tr");
  var hoyesteId = 0;

  rader.each(function() {
    var id = parseInt(Funksjoner.finnId(this));

    if (id > hoyesteId) {
      hoyesteId = id;
    }
  });

  return hoyesteId +1;
}

Funksjoner.opprettNyTomSak = function(tabell) {
  jQuery(tabell).append(
    "<tr id='rad_1'>" +
      "<td id='id_1'>1</td>" +
      "<td id='tittel_1'></td>" +
      "<td id='beskrivelse_1'></td>" +
      "<td id='sakStatus_1'>NY</td>" +
      "<td id='operasjoner_1'>" +
        "<input id='rediger_1' class='redigerKnapp' type='button' value='Rediger'/>&#160;&#160;" +
        "<input id='slett_1' class='slettKnapp' type='button' value='Slett'/>" +
      "</td>" +
    "</tr>"
  );
}

// Best practice nr 2 - ??

// Best practice nr 3 - profit!
