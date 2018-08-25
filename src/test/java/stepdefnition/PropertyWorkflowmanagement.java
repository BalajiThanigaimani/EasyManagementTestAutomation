package stepdefnition;

import java.io.File;
import java.io.IOException;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Random;
import java.util.concurrent.TimeUnit;
import org.apache.commons.io.FileUtils;
import org.hamcrest.Matcher;
import org.junit.Rule;
import org.junit.rules.ErrorCollector;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.cucumber.listener.Reporter;

import Core.Utils.Browsers;
import Core.Utils.GlobalCore;
import ReusableFunctions.PropertyManagement;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pageobjects.AddEditPropertyPage;
import pageobjects.PropertyManagementPage;

public class PropertyWorkflowmanagement {

	@Given("^the user open the Easy property Management application$")
	public void the_user_open_the_Easy_property_Management_application() {
		Browsers.firefox_browser();
	}
	
	@Given("^the user open the Easy property Management application in IE$")
	public void the_user_open_the_Easy_property_Management_application_in_IE() {
		Browsers.ie_browser();
	}

	@Given("^the user open the Easy property Management application in Firefox$")
	public void the_user_open_the_Easy_property_Management_application_in_Firefox() {
		Browsers.firefox_browser();
	}

	@Given("^the user open the Easy property Management application in Chrome$")
	public void the_user_open_the_Easy_property_Management_application_in_Chrome() {
		Browsers.chrome_browser();
	}


	@When("^the user clicks Add New Button$")
	public void the_user_clicks_Add_New_Button() throws InterruptedException {
		PropertyManagementPage.addnew_button().click();
	}
    @Rule
    public ErrorCollector collector = new ErrorCollector();

	
	@Then("^Add New page should be displayed$")
	public void add_New_page_should_be_displayed() {		
		
		try
		{
			GlobalCore.driver.findElement(By.xpath("//div[text()='Add Property']"));
			Reporter.addStepLog("Add New Page text is  found in Dailog box");
			PropertyManagement.add_screenshot_extent();

		}
		catch(NoSuchElementException e){
			Reporter.addStepLog("Add New Page text is not found in Dailog box");			
			PropertyManagement.add_screenshot_extent();	        
			Reporter.addStepLog(e.getMessage());
			Assert.assertTrue(e.getMessage(), false);
		}	
		
	
	}

	@When("^the user enters the unique property name and address$")
	public void the_user_enters_the_unique_property_name_and_address() {
		GlobalCore.property_name = "TestAutomation_" + new Timestamp(new Date().getTime()).toString()
				.replaceAll("-", "").replaceAll(" ", "").replaceAll(":", "").replace(".", "");
		PropertyManagement.user_enter_uniquename_address(GlobalCore.property_name, "8000 Jones Branch Drive");
	}

	@When("^Click Ok button$")
	public void click_Ok_button() {
		AddEditPropertyPage.ok_button().click();
		PropertyManagement.validate_page_loaded(5);
	}

	@When("^the user enters the  property name and address$")
	public void the_user_enters_the_property_name_and_address() {
		GlobalCore.property_name = "TestAutomation_" + new Timestamp(new Date().getTime()).toString()
				.replaceAll("-", "").replaceAll(" ", "").replaceAll(":", "").replace(".", "");
		PropertyManagement.user_enter_uniquename_address(GlobalCore.property_name, "8000 Jones Branch Drive");
	}

	@SuppressWarnings("deprecation")
	@Then("^the property should be created$")
	public void the_property_should_be_created() {
		PropertyManagement.add_screenshot_extent();
		try {
			
			if (GlobalCore.driver.findElement(By.xpath("//td[contains(text(),'" + GlobalCore.property_name + "')]")).isDisplayed()) {
				Reporter.addStepLog(GlobalCore.property_name + " is created. please refer the screenshot");
			}
		} catch (Exception e) {
			Reporter.addStepLog(GlobalCore.property_name + " is not created. please refer the screenshot");
			Assert.assertTrue(e.getMessage(), false);
		}

	}

	@When("^the user click the Edit button for the created property$")
	public void the_user_click_the_Edit_button_for_the_created_property() {
		PropertyManagementPage.edit_button(GlobalCore.property_name).click();
	}

	@Then("^Edit New page should be displayed$")
	public void edit_New_page_should_be_displayed() {
		if (!PropertyManagement.isElementPresent(By.xpath("//div[text()='Edit Property']"))) {
			Reporter.addStepLog("Edit Dialog is not displayed");
			PropertyManagement.add_screenshot_extent();
		}
	}

	@When("^the user enters the updated property name and address$")
	public void the_user_enters_the_updated_property_name_and_address() {
		GlobalCore.property_name = GlobalCore.property_name + "Edit";
		AddEditPropertyPage.name_field().clear();
		AddEditPropertyPage.name_field().sendKeys(GlobalCore.property_name);
		AddEditPropertyPage.address_field().clear();
		AddEditPropertyPage.address_field().sendKeys("8001 Jones Branch");
	}

	@Then("^the property should be updated$")
	public void the_property_should_be_updated() {
		Assert.assertEquals(true, PropertyManagementPage.created_property(GlobalCore.property_name).isDisplayed());
		Reporter.addStepLog(GlobalCore.property_name + " is updated. please refer the screenshot");
		PropertyManagement.add_screenshot_extent();
	}

	@When("^Click Cancel button$")
	public void click_Cancel_button() {
		GlobalCore.driver.findElement(By.xpath("//button[contains(text(),'Cancel')]")).click();
		PropertyManagement.validate_page_loaded(5);
	}

	@Then("^the property should not be created$")
	public void the_property_should_not_be_created() {
		Assert.assertEquals(false, PropertyManagement
				.isElementPresent(By.xpath("//td[contains(text(),'" + GlobalCore.property_name + "')]")));
		Reporter.addStepLog(GlobalCore.property_name + " is not created. please refer the screenshot");
		PropertyManagement.add_screenshot_extent();

	}

	
}