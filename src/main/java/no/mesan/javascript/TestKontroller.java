package no.mesan.javascript;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Klasse
 *
 * @author Christian Ihle
 */
@Controller
@RequestMapping("test")
public class TestKontroller {

    @RequestMapping(method = RequestMethod.GET)
    public void test() {

    }
}
