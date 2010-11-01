TestCase("UlikeTingTest", {

  "test skal plusse sammen 2 og 8": function() {
    assertEquals(10, Funksjoner.pluss(2, 8));
  },

  "test skal finne id 87 for rediger knapp": function() {
    /*:DOC knapp = <input id="rediger_87" type="button"/>&#160;*/
    assertEquals(87, Funksjoner.finnId(this.knapp));
  },

  "test skal finne id 5 for slett knapp": function() {
    /*:DOC knapp = <input id="slett_5" type="button"/>&#160;*/
    assertEquals(5, Funksjoner.finnId(this.knapp));
  }
});
