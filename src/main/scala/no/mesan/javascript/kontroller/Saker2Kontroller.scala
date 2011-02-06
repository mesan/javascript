package no.mesan.javascript.kontroller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.{RequestMapping, RequestMethod}
import no.mesan.javascript.domene.{Sak, SakStatus}
import javax.servlet.http.HttpSession
import no.mesan.javascript.Ape
import java.util.ArrayList

@Controller
@RequestMapping(Array("scalasak"))
class Saker2Kontroller {
  private val SAKER_ATTRIBUTT: String = "saker"

  private def lagOriginaleSaker: List[Sak] = List(
    new Sak(1L, "Sak 1 tittel", "Sak 1 beskrivelse", SakStatus.NY),
    new Sak(2L, "Sak 2 tittel", "Sak 2 beskrivelse", SakStatus.IGANG),
    new Sak(3L, "Sak 3 tittel", "Sak 3 beskrivelse", SakStatus.NY),
    new Sak(4L, "Sak 4 tittel", "Sak 4 beskrivelse", SakStatus.FERDIG))

  private def leggSakerISesjonenHvisDeMangler(sesjon: HttpSession) = {
    if (sesjon.getAttribute(SAKER_ATTRIBUTT) == null) {
      sesjon.setAttribute(SAKER_ATTRIBUTT, lagOriginaleSaker)
    }
  }

  @RequestMapping(method = Array(RequestMethod.GET))
  def visSide(sesjon: HttpSession) = {
    leggSakerISesjonenHvisDeMangler(sesjon)
    val ape: Ape = new Ape
    ape.hopp(3)
    "saker"
  }
}