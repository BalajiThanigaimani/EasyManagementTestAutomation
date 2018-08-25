package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import Core.Utils.GlobalCore;

public class AddEditPropertyPage {

	public static WebElement editproperty_page() {
		return GlobalCore.driver.findElement(By.xpath("//div[text()='Edit Property']"));

	}

	public static WebElement name_field() {
		return GlobalCore.driver.findElement(By.xpath("//div[@class='form-horizontal']//div[1]//div[2]//input[1]"));
	}

	public static WebElement address_field() {
		return GlobalCore.driver.findElement(By.xpath("//div[@class='form-horizontal']//div[2]//div[2]//input[1]"));
	}

	public static WebElement ok_button() {
		return GlobalCore.driver.findElement(By.xpath("//button[contains(text(),'OK')]"));
	}

	public static WebElement cancel_button() {
		return GlobalCore.driver.findElement(By.xpath("//button[contains(text(),'Cancel')]"));
	}

}
