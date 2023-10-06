import io.appium.java_client.AppiumBy;
import io.appium.java_client.ios.IOSDriver;
import java.net.MalformedURLException;
import java.net.URL;

import io.appium.java_client.ios.options.XCUITestOptions;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class IosDeviceTest {
    private static IOSDriver driver;

    @BeforeAll
    public static void setUp() throws MalformedURLException {

        XCUITestOptions options = new XCUITestOptions();
        options.setDeviceName("iPhone 15 Pro")
                .setPlatformVersion("17.0")
                .setBundleId("io.ionic.starter");

        driver = new IOSDriver(
                new URL("http://127.0.0.1:4723"),
                options);
    }

    @AfterAll
    public static void tearDown() {
        driver.quit();
    }

    @Test
    public void givenTab2Button_whenClicked_thenSwitchViewToTab2() throws InterruptedException {

        driver
                .findElement(AppiumBy.xpath("//XCUIElementTypeButton[@name=\"Tab 2\"]"))
                .click();

        Thread.sleep(1000);

        var expected = "Tab 2";
        var actual = driver
                .findElement(AppiumBy.xpath("//*[contains(@name, \"Tab\")]"))
                .getText();

        assertEquals(expected, actual);
    }
}

