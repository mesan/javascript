package no.mesan.javascript.kontroller

import org.springframework.stereotype.Controller
import no.mesan.javascript.domene.ScalaBean
import org.springframework.web.bind.annotation.{ModelAttribute, RequestMethod, RequestMapping}

/**
 * En scala kontroller som binder mot en scala bønne.
 *
 * @author Christian Ihle
 */
@Controller
@RequestMapping(Array("scalabean"))
class ScalaBeanKontroller {

  @ModelAttribute
  def lagScalaBean() = {
    new ScalaBean()
  }

  @RequestMapping(method = Array(RequestMethod.GET))
  def visSide() = {
    "scalabean"
  }

  @RequestMapping(method = Array(RequestMethod.POST))
  def lagre(scalaBean: ScalaBean) = {
    "scalabean"
  }
}
