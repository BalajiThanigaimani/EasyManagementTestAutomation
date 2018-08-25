package Core.Utils;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

public class Browsers {
	public static void firefox_browser()
	{
		System.setProperty("webdriver.gecko.driver",GlobalCore.FIREFOX_DRIVER_PATH);
		DesiredCapabilities capabilities = DesiredCapabilities.firefox();
		capabilities.setCapability("marionette", true);
		GlobalCore.driver = new FirefoxDriver(capabilities);
		GlobalCore.driver.manage().window().maximize();
		GlobalCore.driver.manage().timeouts().implicitlyWait(GlobalCore.BROWSER_TIMEOUT, TimeUnit.SECONDS);
		GlobalCore.driver.get(GlobalCore.APP_URL);		
	}
	
	public static void ie_browser()
	{
		System.setProperty("webdriver.ie.driver",GlobalCore.IE_DRIVER_PATH);
		System.setProperty("java.net.preferIPv4Stack", "true");
		DesiredCapabilities capabilities = DesiredCapabilities.internetExplorer();
		capabilities.setCapability(InternetExplorerDriver.INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS,true);
		capabilities.setCapability("ignoreZoomSetting", true);		
		GlobalCore.driver  = new InternetExplorerDriver(capabilities);		
		GlobalCore.driver.manage().window().maximize();
		GlobalCore.driver.manage().timeouts().implicitlyWait(GlobalCore.BROWSER_TIMEOUT, TimeUnit.SECONDS);
		GlobalCore.driver.get(GlobalCore.APP_URL);		
	}
	
	public static void chrome_browser()
	{
		System.setProperty("webdriver.chrome.driver",GlobalCore.CHROME_DRIVER_PATH);		
		ChromeOptions options = new ChromeOptions();
		options.addArguments("disable-infobars");		
		GlobalCore.driver = new ChromeDriver(options);
		GlobalCore.driver.manage().window().maximize();
		GlobalCore.driver.manage().timeouts().implicitlyWait(GlobalCore.BROWSER_TIMEOUT, TimeUnit.SECONDS);
		GlobalCore.driver.get(GlobalCore.APP_URL);		
	}

	

}
