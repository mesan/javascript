package no.mesan.javascript.kontroller

import org.springframework.stereotype.Controller
import org.springframework.beans.factory.annotation.Autowired
import no.mesan.javascript.domene.{Sak, SakService}
import org.springframework.ui.ModelMap
import java.lang.{String, Long}
import org.springframework.web.bind.annotation._

/**
 * En scala kontroller som injecter en scala bønne som implementerer et java interface.
 *
 * @author Christian Ihle
 */
@Controller
@RequestMapping(Array("sak/{id}"))
class SakKontroller {

  @Autowired
  var sakService: SakService = null

  @RequestMapping(method = Array(RequestMethod.GET))
  def visSideri(@PathVariable id: Long, modell: ModelMap) = {
    val sak: Sak = sakService.hentSak(id)
    modell.put("sak", sak)
    "sak"
  }

  @RequestMapping(method = Array(RequestMethod.POST))
  def oppdater(@PathVariable id: Long, modell: ModelMap, @RequestParam tittel: String) = {
    val sak: Sak = sakService.oppdaterTittel(id, tittel)
    modell.put("sak", sak);
    "sak"
  }
}
