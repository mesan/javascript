TestCase("UlikeTingTest", {

  "test skal plusse sammen 2 og 8": function() {
    assertEquals(10, Funksjoner.pluss(2, 8));
  },

  "test skal finne id 87 for rediger knapp": function() {
    /*:DOC knapp = <input id="rediger_87" type="button"/> */
    assertEquals(87, Funksjoner.finnId(this.knapp));
  },

  "test skal finne id 5 for slett knapp": function() {
    /*:DOC knapp = <input id="slett_5" type="button"/> */
    assertEquals(5, Funksjoner.finnId(this.knapp));
  },

  "test opprettNySak skal lage ny rad": function() {
    /*:DOC += <table id="tabell"></table> */
    assertEquals(0, jQuery("#tabell tr").size());

    Funksjoner.opprettNyTomSak("#tabell");

    assertEquals("Skal lage 1 ny rad", 1, jQuery("#tabell tr").size());
    assertEquals("Skal lage rad med id", 1, jQuery("#tabell #sak_1").size());
    assertEquals("Skal lage 5 kolonner", 5, jQuery("#tabell #sak_1 td").size());
    assertEquals("Skal lage id kolonne", 1, jQuery("#tabell #sak_1 #id_1").size());
    assertEquals("Skal lage tittel kolonne", 1, jQuery("#tabell #sak_1 #tittel_1").size());
    assertEquals("Skal lage beskrivelse kolonne", 1, jQuery("#tabell #sak_1 #beskrivelse_1").size());
    assertEquals("Skal lage sakStatus kolonne", 1, jQuery("#tabell #sak_1 #sakStatus_1").size());
  },

  "test opprettNySak skal fylle ut noen felter": function() {
    /*:DOC += <table id="tabell"></table> */
    assertEquals(0, jQuery("#tabell tr").size());

    Funksjoner.opprettNyTomSak("#tabell");

    assertEquals("1", jQuery("#tabell #sak_1 #id_1").text());
    assertEquals("NY", jQuery("#sak_1 #sakStatus_1 input:text").attr('value'));
  },  

  "test opprettNySak skal lage slett knapp i ny rad": function() {
    /*:DOC += <table id="tabell"></table> */
    assertEquals(0, jQuery("#tabell tr").size());

    Funksjoner.opprettNyTomSak("#tabell");

    var slett = jQuery("#tabell #sak_1 #operasjoner_1 #slett_1");
    assertEquals("Skal lage knapp for slett i kolonne for operasjoner", 1, slett.size());
    assertTrue("Slett skal ha riktig klasse", slett.hasClass("slettKnapp"));
    assertEquals("Slett skal ha riktig type", "button", slett.attr("type"));
    assertEquals("Slett skal ha riktig tekst", "Slett", slett.val());
  },

  "test opprettNySak skal lage rediger knapp i ny rad": function() {
    /*:DOC += <table id="tabell"></table> */
    assertEquals(0, jQuery("#tabell tr").size());

    Funksjoner.opprettNyTomSak("#tabell");

    var rediger = jQuery("#tabell #sak_1 #operasjoner_1 #rediger_1");
    assertEquals("Skal lage knapp for rediger i kolonne for operasjoner", 1, rediger.size());
    assertTrue("Rediger skal ha riktig klasse", rediger.hasClass("redigerKnapp"));
    assertEquals("Rediger skal ha riktig type", "button", rediger.attr("type"));
    assertEquals("Rediger skal ha riktig tekst", "Rediger", rediger.val());
  },
  
  "test opprettNySak skal lage lagre knapp i ny rad": function(){
    /*:DOC += <table id="tabell"></table> */
    assertEquals(0, jQuery("#tabell tr").size());

	Funksjoner.opprettNyTomSak("#tabell");

	var lagre = jQuery("#tabell #sak_1 #operasjoner_1 #lagre_1");
	assertEquals("Skal lage knapp for lagring i kolonne for operasjoner", 1, lagre.size());
	assertTrue("Lagre skal ha riktig klasse", lagre.hasClass("lagreKnapp"));
	assertEquals("Lagre skal ha riktig type", "button", lagre.attr("type"));
	assertEquals("Lagre skal ha riktig tekst", "Lagre", lagre.val());
  },

  "test opprettNySak skal takle flere nye rader": function() {
    /*:DOC += <table id="tabell"></table> */
    assertEquals(0, jQuery("#tabell tr").size());

    Funksjoner.opprettNyTomSak("#tabell");
    Funksjoner.opprettNyTomSak("#tabell");

    assertEquals("Skal lage 1 ny rad", 2, jQuery("#tabell tr").size());
    assertEquals("Skal lage rad med id", 1, jQuery("#tabell #sak_2").size());
    assertEquals("Skal lage 5 kolonner", 5, jQuery("#tabell #sak_2 td").size());
    assertEquals("Skal lage id kolonne", 1, jQuery("#tabell #sak_2 #id_2").size());
    assertEquals("Skal lage tittel kolonne", 1, jQuery("#tabell #sak_2 #tittel_2").size());
    assertEquals("Skal lage beskrivelse kolonne", 1, jQuery("#tabell #sak_2 #beskrivelse_2").size());
    assertEquals("Skal lage sakStatus kolonne", 1, jQuery("#tabell #sak_2 #sakStatus_2").size());
    assertEquals("Skal lage rediger knapp i operasjoner kolonne", 1, jQuery("#tabell #sak_2 #operasjoner_2 #rediger_2").size());
    assertEquals("Skal lage slett knapp i operasjoner kolonne", 1, jQuery("#tabell #sak_2 #operasjoner_2 #slett_2").size());
    assertEquals("2", jQuery("#tabell #sak_2 #id_2").text());
  },

  "test finnNesteId skal finne 1 dersom tom tabell": function() {
    /*:DOC += <table id="tabell"></table> */
    assertEquals(0, jQuery("#tabell tr").size());

    var nesteId = Funksjoner.finnNesteId("#tabell");

    assertEquals(1, nesteId);
  },

  "test finnNesteId skal pluss på 1 etter forrige id": function() {
    /*:DOC += <table id="tabell"><tr id='sak_1'/></table> */
    assertEquals(1, jQuery("#tabell tr").size());

    var nesteId = Funksjoner.finnNesteId("#tabell");

    assertEquals(2, nesteId);
  },

  "test finnNesteId skal takle tilfeldig rekkefølge": function() {
    /*:DOC += <table id="tabell"><tr id='sak_1'/><tr id='sak_5'/><tr id='sak_2'/></table> */
    assertEquals(3, jQuery("#tabell tr").size());

    var nesteId = Funksjoner.finnNesteId("#tabell");

    assertEquals(6, nesteId);
  },
  
  "test slettRad skal slette raden med gitt id": function() {
	/*:DOC += <table id="tabell"><tr id='sak_1'/></table> */
    assertEquals(1, jQuery('#sak_1').size());
    
    Funksjoner.slettRad('#sak_1');
    
    assertEquals(0, jQuery('#tabell tr').size());    
  },
  
  "test redigerSak skal åpne felter for redigering": function() {
    /*:DOC += <table id="tabell">
	 *  <tr id='sak_1'>
	 *    <td id='felt_1'><input type="text" disabled="disabled"/></td>
	 *  </tr>
	 *</table> */
	 Funksjoner.redigerSak(1);
	 assertEquals(0, jQuery('input:text[disabled]').size());	  
  },
  
  "test finnEditfelter skal finne 3 editerbare felter": function() {
    /*:DOC += <table id="tabell">
     *  <tr id='sak_1'>
     *    <td id='felt_1'><input type="text"/></td>
     *    <td id='felt_2'><input type="text"/></td>
     *    <td id='felt_3'><input type="text"/></td>
     *  </tr>
     *</table> */  
	 assertEquals(3, Funksjoner.finnEditfelter(1).size());
  },
  
  "test finnEditFelter skal ignorere felt som ikke er editerbare": function(){
    /*:DOC += <table id="tabell">
	 *  <tr id='sak_1'>
	 *    <td id='felt_1'><input type="text"/></td>
	 *    <td id='felt_2'><input type="button"/></td>
	 *    <td id='felt_3'><input type="text"/></td>
	 *  </tr>
	 *</table> */
	 assertEquals(2, Funksjoner.finnEditfelter(1).size());
  },  
	  
  "test finnEditFelter skal kun finne rad med gitt id": function(){
    /*:DOC += <table id="tabell">
	 *  <tr id='sak_1'>
	 *    <td id='felt_1'><input type="text"/></td>
	 *  </tr>
	 *  <tr id='sak_2'> 
	 *    <td id='felt_2'><input type="text"/></td>
	 *  </tr>
	 *</table> */
	 assertEquals(1, Funksjoner.finnEditfelter(1).size());
  },
  
  "test enableFelter skal enable gitte felter": function(){
    /*:DOC += <table id="tabell">
     *  <tr id='sak_1'>
     *    <td id='felt_1'><input type="text" disabled="disabled"/></td>
     *  </tr>
     *</table> */
	 var felter = jQuery('input');
	 Funksjoner.enableFelter(felter);
     assertEquals(0, jQuery('input:text[disabled]').size());
  },
  
  "test enableFelter skal ikke enable annet en den får beskjed om": function(){
    /*:DOC += <table id="tabell">
	 *  <tr id='sak_1'>
	 *    <td id='felt_1'><input type="text" disabled="disabled"/></td>
	 *    <td id='felt_2'><input type="button" disabled="disabled"/></td>
	 *  </tr>
	 *</table> */
	 var felter = jQuery('input:text');
	 Funksjoner.enableFelter(felter);
	 assertEquals(1, jQuery('input:button[disabled]').size());
  },
  
  "test disableFelter skal disable gitte felter": function(){
    /*:DOC += <table id="tabell">
	 *  <tr id='sak_1'>
	 *    <td id='felt_1'><input type="text"/></td>
	 *  </tr>
	 *</table> */
	 var felter = jQuery('input');
	 Funksjoner.disableFelter(felter);
	 assertEquals(1, jQuery('input:text[disabled]').size());    
  }
	  
  
});
