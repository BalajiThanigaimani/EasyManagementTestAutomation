package Core.Utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class GlobalCore {
	public static WebElement element = null;
	public static String property_name;
	public static String property_address;
	public static WebDriver driver;	
	public static final String FIREFOX_DRIVER_PATH = System.getProperty("user.dir")+"\\browser_drivers\\geckodriver.exe";
	public static final String IE_DRIVER_PATH = System.getProperty("user.dir")+"\\browser_drivers\\IEDriverServer.exe";
	public static final String CHROME_DRIVER_PATH = System.getProperty("user.dir")+"\\browser_drivers\\chromedriver.exe";
	public static final String APP_URL = "http://localhost:4500/";
	public static final String ENDPOINT_URL = "http://localhost:3000/api/properties";	
	public static final int BROWSER_TIMEOUT = 10;
	
	
}
