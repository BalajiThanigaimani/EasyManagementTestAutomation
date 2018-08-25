package stepdefnition;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import com.cucumber.listener.Reporter;

import Core.Utils.Browsers;
import Core.Utils.GlobalCore;
import ReusableFunctions.PropertyManagement;
import ReusableFunctions.PropertyMgmt_API;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import junit.framework.Assert;

public class Add_Edit_List {
	int status_code;
	List<String> jsonResponse = new ArrayList<String>();

	@Given("^get the list of property details from API$")
	public void get_the_list_of_property_details_from_API() {
		Response response = PropertyMgmt_API.doGetRequest();
		jsonResponse = response.jsonPath().getList("name");
		PropertyMgmt_API.add_responsefile_extent(response.asString());
	}

	@When("^user open the Easy property Management application$")
	public void user_open_the_Easy_property_Management_application() {
		Browsers.firefox_browser();

	}

	@SuppressWarnings("null")
	@Then("^All the properties should be displayed$")
	public void all_the_properties_should_be_displayed() {
		List<WebElement> tableRows = GlobalCore.driver.findElement(By.xpath("//table[@class='table table-condensed']"))
				.findElements(By.tagName("td"));
		List<String> gui_rows = new ArrayList<String>();
		int j = 0;
		for (int i = 0; i < tableRows.size() - 1; i = i + 3) {
			gui_rows.add(tableRows.get(i).getText().toString());

		}
		Assert.assertEquals(true, gui_rows.equals(jsonResponse));
		Reporter.addStepLog("List is displayed please refer the screenshot");
		// PropertyManagement.add_screenshot_extent(driver);

		PropertyManagement.add_screenshot_extent();
		GlobalCore.driver.quit();

	}

	@Given("^we submit (\\d+) properties by API$")
	public void we_submit_properties_by_API(int no_of_properties) {
		for (int i = 0; i < no_of_properties; i++) {
			GlobalCore.property_name = "TestAutomation_" + new Timestamp(new Date().getTime()).toString()
					.replaceAll("-", "").replaceAll(" ", "").replaceAll(":", "").replace(".", "");
			status_code = PropertyMgmt_API.property_mgmnt_post_request(GlobalCore.property_name, "8000 Jones Branch ");
		}

	}

	@Then("^request should be posted sucessfully$")
	public void request_should_be_posted_sucessfully() {
		Assert.assertEquals(200, status_code);
		Response response = PropertyMgmt_API.doGetRequest();
		jsonResponse = response.jsonPath().getList("name");
		PropertyMgmt_API.add_responsefile_extent(response.asString());
	}

	@Given("^take a property which already exists$")
	public void take_a_property_which_already_exists() {
		Response response = PropertyMgmt_API.doGetRequest();
		GlobalCore.property_name = response.jsonPath().getString("name[0]");
		GlobalCore.property_address = response.jsonPath().getString("address[0]");

	}

	@When("^the user post a  duplicate property via API$")
	public void the_user_post_a_duplicate_property_via_API() {
		status_code = PropertyMgmt_API.property_mgmnt_post_request(GlobalCore.property_name,
				GlobalCore.property_address);
	}

	@Then("^request should not be posted$")
	public void request_should_not_be_posted() {
		boolean flag = true;
		if (status_code == 200) {
			flag = false;
			Reporter.addStepLog("Duplicate Property details are added , please refer the response file");
		}
		Response response = PropertyMgmt_API.doGetRequest();
		jsonResponse = response.jsonPath().getList("name");
		PropertyMgmt_API.add_responsefile_extent(response.asString());
		Assert.assertEquals(flag, true);

	}

	@Given("^the system contains (\\d+) properties$")
	public void the_system_contains_properties(int no_properties) {
		int no_of_existing_properties;
		Response response = PropertyMgmt_API.doGetRequest();
		no_of_existing_properties = response.jsonPath().getList("name").size();
		Reporter.addStepLog("No of Properties already exist in the system = " + no_of_existing_properties);
		Reporter.addStepLog("Total No of properties requested to be added for stress testing = " + no_properties);
		int no_of_properties_to_be_created;
		no_of_properties_to_be_created = no_properties - no_of_existing_properties;
		if (no_of_properties_to_be_created > 0) {
			Reporter.addStepLog("Total No of new properties will be created = " + no_of_properties_to_be_created);
			for (int i = 0; i < no_of_properties_to_be_created; i++) {
				GlobalCore.property_name = "TestAutomation_" + new Timestamp(new Date().getTime()).toString()
						.replaceAll("-", "").replaceAll(" ", "").replaceAll(":", "").replace(".", "");
				status_code = PropertyMgmt_API.property_mgmnt_post_request(GlobalCore.property_name,
						"8000 Jones Branch ");
			}
		} else {
			Reporter.addStepLog("So no new properties are added");
		}
	}

}
