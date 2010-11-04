package no.mesan.javascript;

import org.apache.commons.lang.Validate;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Forside {
    private WebDriver driver;

    public Forside(final WebDriver driver) {
        this.driver = driver;
        System.out.println(driver.getCurrentUrl());
        Validate.isTrue(driver.getCurrentUrl().contains("/test"), "not on the frontpage...");
    }

    public SakListeSide navigerTilSaker() {
        final WebElement sakerLink = driver.findElement(By.linkText("Saker"));
        sakerLink.click();

        return new SakListeSide(driver);
    }

    public boolean harLinkTilSaker() {
        final WebElement sakerLink = driver.findElement(By.linkText("Saker"));
        return true;
    }
}
