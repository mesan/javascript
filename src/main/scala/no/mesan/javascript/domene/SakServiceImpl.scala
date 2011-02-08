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
    sak
  }
}
