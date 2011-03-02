package no.mesan.javascript.domene

import java.lang.{Long, String}
import org.springframework.stereotype.Service

/**
 * Scala klasse som implementerer et java interface.
 *
 * @author Christian Ihle
 */
@Service
class SakServiceImpl extends SakService {

  def hentSak(id: Long) = {
     new Sak(id, "Sak " + id + " tittel", "Sak " + id + " beskrivelse", SakStatus.NY)
  }

  def oppdaterTittel(id: Long, tittel: String) = {
    val sak: Sak = hentSak(id)
    sak.setTittel(tittel)

    val regex = "([0-9]*)([0-9]{2})".r
    val r2 = "([a-z]{2})".r
    sak.getTittel() match {
      case regex(first, last) => println("Tall " + first + last)
      case r2(tekst) => println("Tekst " + tekst)
      case _ => println("Ukjent")
    }

    sak
  }
}

abstract class SakCase
case class Var(name: String) extends SakCase

// binde scala objekt
// bruke trait i kontrollere, og pattern matching, og case

