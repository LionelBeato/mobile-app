package org.example;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.ios.IOSDriver;
import io.appium.java_client.ios.options.XCUITestOptions;

import java.net.MalformedURLException;
import java.net.URL;

public class Main {
    public static void main(String[] args) throws MalformedURLException, InterruptedException {
        XCUITestOptions options = new XCUITestOptions();
        options.setDeviceName("iPhone 15 Pro")
                .setPlatformVersion("17.0")
                .setBundleId("io.ionic.starter");

        AppiumDriver driver =
                new IOSDriver(
                        new URL("http://127.0.0.1:4723"),
                        options);

        driver.findElement(AppiumBy.xpath("//XCUIElementTypeButton[@name=\"Tab 2\"]")).click();
        Thread.sleep(1000);
        var element = driver.findElement(AppiumBy.xpath("//XCUIElementTypeStaticText[@name=\"Tab 2\"]")).getText();

        System.out.println(element);

        driver.quit();
    }
}