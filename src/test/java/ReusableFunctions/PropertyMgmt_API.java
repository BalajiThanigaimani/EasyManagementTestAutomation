package ReusableFunctions;

import static io.restassured.RestAssured.given;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.json.simple.JSONObject;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import com.cucumber.listener.Reporter;

import Core.Utils.GlobalCore;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.parsing.Parser;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import junit.framework.Assert;

public class PropertyMgmt_API {

	public static Response doGetRequest() {
		RestAssured.defaultParser = Parser.JSON;
		return

		given().headers("Content-Type", ContentType.JSON, "Accept", ContentType.JSON).when()
				.get(GlobalCore.ENDPOINT_URL).then().contentType(ContentType.JSON).extract().response();
	}

	public static void create_file(String path, String str) {
		File file = new File(path);
		file.getParentFile().mkdirs();

		// Create the file
		try {
			if (file.createNewFile()) {
			} else {
				System.out.println("File already exists.");
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		// Write Content
		FileWriter writer = null;
		try {
			writer = new FileWriter(file);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		try {
			writer.write(str);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		try {
			writer.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public static void add_responsefile_extent(String content) {

		String fileName = new SimpleDateFormat("yyyyMMddHHmmssFFF'.json'").format(new Date());
		String filepath = System.getProperty("user.dir") + "\\target\\testautomationreport\\ResponseFiles\\" + fileName;
		create_file(filepath, content);
		Reporter.addStepLog("<a href='./ResponseFiles/" + fileName + "'>Response Output</a>");

	}

	public static int property_mgmnt_post_request(String prop_name, String prop_address) {
		RequestSpecification request = RestAssured.given();
		request.header("Content-Type", "application/json");
		JSONObject json = new JSONObject();
		json.put("name", prop_name);
		json.put("address", prop_address);
		request.body(json.toJSONString());
		Response resp = request.post(GlobalCore.ENDPOINT_URL);
		Reporter.addStepLog("Property name = " + prop_name + " address =" + prop_address);
		return resp.getStatusCode();

	}
}
