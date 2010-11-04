package no.mesan.javascript;

import org.junit.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

/**
 * Eksempel på test som kjøres mot en kjørende server.
 */
@Ignore
public class ForsideTest {

    private static WebDriver driver;
    private static JettyStarter jettyStarter;

    private Forside forside;

    @BeforeClass
    public static void startServer() throws Exception {
        jettyStarter = new JettyStarter();
        jettyStarter.start(9090);
        driver = new HtmlUnitDriver(true);
//        driver = new ChromeDriver();
    }

    @AfterClass
    public static void stopServer() throws Exception {
        jettyStarter.stop();
        driver.close();
    }

    @Before
    public void setUp() throws Exception {
        driver.get("http://localhost:9090/javascript/side/test");
        Thread.sleep(1000);

        forside = new Forside(driver);
    }

    @Test
    public void lastForside() throws Exception {
        assertTrue(forside.harLinkTilSaker());
    }

    @Test
    public void navigerTilSaker() throws Exception {
        final SakListeSide sakListeSide = forside.navigerTilSaker();
        assertEquals(4, sakListeSide.getAntallSaker());
    }
}
