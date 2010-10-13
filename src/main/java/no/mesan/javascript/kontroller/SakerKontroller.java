package no.mesan.javascript.kontroller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import no.mesan.javascript.domene.Sak;
import no.mesan.javascript.domene.SakStatus;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Klasse
 *
 * @author Christian Ihle
 */
@Controller
@RequestMapping("sak")
public class SakerKontroller {

    private static final String SAKER_ATTRIBUTT = "saker";

    private List<Sak> lagOriginaleSaker() {
        final List<Sak> saker = new ArrayList<Sak>();

        saker.add(new Sak(1L, "Sak 1 tittel", "Sak 1 beskrivelse", SakStatus.NY));
        saker.add(new Sak(2L, "Sak 2 tittel", "Sak 2 beskrivelse", SakStatus.IGANG));
        saker.add(new Sak(3L, "Sak 3 tittel", "Sak 3 beskrivelse", SakStatus.NY));
        saker.add(new Sak(4L, "Sak 4 tittel", "Sak 4 beskrivelse", SakStatus.FERDIG));

        return saker;
    }

    private void leggSakerISesjonenHvisDeMangler(HttpSession sesjon) {
        if (sesjon.getAttribute(SAKER_ATTRIBUTT) == null) {
            sesjon.setAttribute(SAKER_ATTRIBUTT, lagOriginaleSaker());
        }
    }

    @RequestMapping(method = RequestMethod.GET)
    public String visSide(HttpSession sesjon) {
        leggSakerISesjonenHvisDeMangler(sesjon);
        return "saker";
    }
}
