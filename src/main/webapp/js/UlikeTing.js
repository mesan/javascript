
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
    "<tr id='sak_" + nesteId + "'>" +
      "<td id='id_" + nesteId + "'>" + nesteId + "</td>" +
      "<td id='tittel_" + nesteId + "'>" +
      	"<input class='editable' type='text'/>" +
      "</td>" +
      "<td id='beskrivelse_" + nesteId + "'>" +
      	"<input class='editable' type='text'/>" +
      "</td>" +
      "<td id='sakStatus_" + nesteId + "'>" +
      	"<input class='editable' type='text' value='NY'/>" +
      "</td>" +
      "<td id='operasjoner_" + nesteId + "'>" +
        "<input id='rediger_" + nesteId + "' class='redigerKnapp' type='button' value='Rediger'/>&#160;&#160;" +
        "<input id='slett_" + nesteId + "' class='slettKnapp' type='button' value='Slett'/>" +
        "<input id='lagre_" + nesteId + "' class='lagreKnapp' type='button' value='Lagre'/>" +
      "</td>" +
    "</tr>"
  );
  var test = 1;
}

Funksjoner.slettRad = function(rad) {
  jQuery(rad).remove();
}

Funksjoner.redigerSak = function(id) {
  var inputfelter = Funksjoner.finnEditfelter(id);
  Funksjoner.enableFelter(inputfelter);
}

// Finner editerbare inputfelter i en tabellrad
Funksjoner.finnEditfelter = function (id){
  // burde slåopp via klassen editable, men det får jeg ikke til :(
  // Antar derfor at alle inputfelter av typen text er editerbare.
  var editfelter = jQuery("#sak_" + id + " td input:text");
  return editfelter;
},

Funksjoner.enableFelter = function(felter){
  felter.removeAttr('disabled');
},

Funksjoner.disableFelter = function(felter){
  felter.attr('disabled', 'disabled');
}

// Best practice nr 2 - ?????????????????????????

// Best practice nr 3 - profit!
