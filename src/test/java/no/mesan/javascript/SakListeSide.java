package no.mesan.javascript;

import org.apache.commons.lang.Validate;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

public class SakListeSide {
    private WebDriver driver;

    public SakListeSide(WebDriver driver) {
        this.driver = driver;
        Validate.isTrue(driver.getCurrentUrl().endsWith("/sak"));
    }

    public int getAntallSaker() {
        final WebElement element = driver.findElement(By.className("saker"));

        final WebElement tbody = element.findElement(By.tagName("tbody"));
        final List<WebElement> rader = tbody.findElements(By.tagName("tr"));

        return rader.size();
    }
}
