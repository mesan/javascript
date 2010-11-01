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
    assertEquals("Skal lage rad med id", 1, jQuery("#tabell #rad_1").size());
    assertEquals("Skal lage 5 kolonner", 5, jQuery("#tabell #rad_1 td").size());
    assertEquals("Skal lage id kolonne", 1, jQuery("#tabell #rad_1 #id_1").size());
    assertEquals("Skal lage tittel kolonne", 1, jQuery("#tabell #rad_1 #tittel_1").size());
    assertEquals("Skal lage beskrivelse kolonne", 1, jQuery("#tabell #rad_1 #beskrivelse_1").size());
    assertEquals("Skal lage sakStatus kolonne", 1, jQuery("#tabell #rad_1 #sakStatus_1").size());
  },

  "test opprettNySak skal fylle ut noen felter": function() {
    /*:DOC += <table id="tabell"></table> */
    assertEquals(0, jQuery("#tabell tr").size());

    Funksjoner.opprettNyTomSak("#tabell");

    assertEquals("1", jQuery("#tabell #rad_1 #id_1").text());
    assertEquals("NY", jQuery("#tabell #rad_1 #sakStatus_1").text());
  },

  "test opprettNySak skal lage slett knapp i ny rad": function() {
    /*:DOC += <table id="tabell"></table> */
    assertEquals(0, jQuery("#tabell tr").size());

    Funksjoner.opprettNyTomSak("#tabell");

    var slett = jQuery("#tabell #rad_1 #operasjoner_1 #slett_1");
    assertEquals("Skal lage knapp for slett i kolonne for operasjoner", 1, slett.size());
    assertTrue("Slett skal ha riktig klasse", slett.hasClass("slettKnapp"));
    assertEquals("Slett skal ha riktig type", "button", slett.attr("type"));
    assertEquals("Slett skal ha riktig tekst", "Slett", slett.val());
  },

  "test opprettNySak skal lage rediger knapp i ny rad": function() {
    /*:DOC += <table id="tabell"></table> */
    assertEquals(0, jQuery("#tabell tr").size());

    Funksjoner.opprettNyTomSak("#tabell");

    var rediger = jQuery("#tabell #rad_1 #operasjoner_1 #rediger_1");
    assertEquals("Skal lage knapp for rediger i kolonne for operasjoner", 1, rediger.size());
    assertTrue("Rediger skal ha riktig klasse", rediger.hasClass("redigerKnapp"));
    assertEquals("Rediger skal ha riktig type", "button", rediger.attr("type"));
    assertEquals("Rediger skal ha riktig tekst", "Rediger", rediger.val());
  }
});
