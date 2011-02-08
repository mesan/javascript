package no.mesan.javascript.kontroller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.{RequestMethod, RequestMapping}
import org.springframework.beans.factory.annotation.Autowired
import no.mesan.javascript.Ape

/**
 * En scala klasse som også en en spring kontroller, som injecter en scala spring bønne.
 *
 * @author Christian Ihle
 */
@Controller
@RequestMapping(Array("scala"))
class ScalaKontroller {

  @Autowired
  var ape: Ape = _;

  @RequestMapping(method = Array(RequestMethod.GET))
  def visSide() = {
    ape.hopp(3)
    println("")
    "scala"
  }
}
