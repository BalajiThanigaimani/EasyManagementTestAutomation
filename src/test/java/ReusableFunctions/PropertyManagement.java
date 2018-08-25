package ReusableFunctions;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.cucumber.listener.Reporter;

import Core.Utils.GlobalCore;
import pageobjects.AddEditPropertyPage;

public class PropertyManagement {

	
	
	public static void user_enter_uniquename_address(String prop_name, String prop_address) {
		AddEditPropertyPage.name_field().sendKeys(prop_name);
		AddEditPropertyPage.address_field().sendKeys(prop_address);

	}

	public static boolean validate_page_loaded(int maxtimeout) {
		boolean iselementpresent = true;

		for (int i = 1; i <= maxtimeout && iselementpresent == true; i++)
			iselementpresent = PropertyManagement.isElementPresent(By.xpath("/html/body/modal-container"));
		if (iselementpresent) {
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				Reporter.addStepLog(e.getMessage());				
			}
		}
		return iselementpresent;

	}

	public static WebElement created_property_SupressFailure(String prop_name) {
		WebElement element = null;
		try
		{
			element = GlobalCore.driver.findElement(By.xpath("//td[contains(text(),'" + prop_name + "')]"));
		}
		catch(NoSuchElementException e){
			Reporter.addStepLog(prop_name + "is not found in the property management page");
			Reporter.addStepLog(e.getMessage());
		}
		return element;
	}
	
	public static void add_screenshot_extent() {
		File scrFile = ((TakesScreenshot) GlobalCore.driver).getScreenshotAs(OutputType.FILE);
		String fileName = new SimpleDateFormat("yyyyMMddHHmmssFFF'.png'").format(new Date());
		String filepath = System.getProperty("user.dir") + "\\target\\testautomationreport\\Screenshots\\" + fileName;

		try {
			FileUtils.copyFile(scrFile, new File(filepath));
			Reporter.addScreenCaptureFromPath(".\\Screenshots\\" + fileName);

		} catch (IOException e) {			
			Reporter.addStepLog(e.getMessage());	
		}

	}

	public static boolean isElementPresent(By locatorKey) {
		try {
			GlobalCore.driver.findElement(locatorKey);
			return true;
		} catch (org.openqa.selenium.NoSuchElementException e) {
			return false;
		}
	}

}
