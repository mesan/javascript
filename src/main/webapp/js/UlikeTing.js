
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
  var nesteId = Funksjoner.finnNesteId(tabell);

  jQuery(tabell).append(
    "<tr id='rad_" + nesteId + "'>" +
      "<td id='id_" + nesteId + "'>" + nesteId + "</td>" +
      "<td id='tittel_" + nesteId + "'></td>" +
      "<td id='beskrivelse_" + nesteId + "'></td>" +
      "<td id='sakStatus_" + nesteId + "'>NY</td>" +
      "<td id='operasjoner_" + nesteId + "'>" +
        "<input id='rediger_" + nesteId + "' class='redigerKnapp' type='button' value='Rediger'/>&#160;&#160;" +
        "<input id='slett_" + nesteId + "' class='slettKnapp' type='button' value='Slett'/>" +
      "</td>" +
    "</tr>"
  );
}

// Best practice nr 2 - ??

// Best practice nr 3 - profit!
