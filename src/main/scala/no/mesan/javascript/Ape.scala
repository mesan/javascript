package no.mesan.javascript
import org.springframework.stereotype.Component;

/**
 * En scala klasse som også er en spring bønne.
 *
 * @author Christian Ihle
 */
@Component
class Ape /*(ting: String, tang: Int) */ {

  def hopp(antallGanger: Int) {
    for (i <- 0 to antallGanger) println(i);

    val even = new Function[Int, Boolean] {
      def apply(i: Int) = i % 2 == 0
    }

    println("even: " + even(antallGanger))
  }
}
