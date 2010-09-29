package no.mesan.javascript;

import org.mortbay.jetty.Connector;
import org.mortbay.jetty.Server;
import org.mortbay.jetty.nio.SelectChannelConnector;
import org.mortbay.jetty.webapp.WebAppContext;

/**
 * Starter Jetty med eVurdering indre sone, for bruk utenfor server-støtten i IntelliJ IDEA og MyEclipse.
 *
 * <p>For å bruke denne klassen trenger du en mappe i prosjektet hvor property filene kan ligge.
 * F.eks <code>evurdering/run</code>. I run mappen kopierer du filene som normalt kopieres
 * til Jetty mappen. Lag et nytt Eclipse prosjekt som peker til run mappen.
 * Propertiene som normalt settes opp rett på config til serveren i MyEclipse
 * settes isteden opp som vm arguments i denne klassens run configuration. Run mappen må
 * settes som working directory på samme fane. For å få JSP støtte så må <code>mvn eclipse:eclipse -P IDEA</code>
 * brukes.</p>
 *
 * @author tmo
 */
public final class JettyStarter {

    private static Server SERVER;

    private JettyStarter() {

    }

    @SuppressWarnings({ "unchecked" })
    public static void main(final String[] args) throws Exception {

        SERVER = new Server();
        final Connector connector = new SelectChannelConnector();
        connector.setPort(8080);
        SERVER.setConnectors(new Connector[] { connector });

        final WebAppContext context = new WebAppContext();
        context.setServer(SERVER);
        context.getInitParams().put("org.mortbay.jetty.servlet.Default.useFileMappedBuffer", "false");
        context.getInitParams().put("useFileMappedBuffer", "false");
        context.setServerClasses(new String[] { "-org.mortbay.jetty.plus.jaas.", "org.mortbay.jetty."});
        context.setContextPath("/javascript");
        context.setWar("src/main/webapp");

        SERVER.addHandler(context);
        SERVER.start();
        SERVER.join();
    }
}
