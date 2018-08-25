package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.cucumber.listener.Reporter;

import Core.Utils.GlobalCore;

public class PropertyManagementPage {

	public static WebElement addnew_button() {
		return GlobalCore.driver.findElement(By.xpath("//button[contains(text(),'Add New')]"));
	}

	public static WebElement edit_button(String prop_name) {
		return GlobalCore.driver.findElement(By.xpath("//tr[td[text()='" + prop_name + "']]//button[1]"));
	}

	public static WebElement created_property(String prop_name) {
		return GlobalCore.driver.findElement(By.xpath("//td[contains(text(),'" + prop_name + "')]"));
	}

}
