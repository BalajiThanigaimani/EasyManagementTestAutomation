package executor;

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/features",glue="stepdefnition",
plugin={"pretty","html:target/cucumber","json:cucumber.json","com.cucumber.listener.ExtentCucumberFormatter:target/testautomationreport/report.html"}
,tags = {"~@wip"})
public class TestExecutor {
	
	  @AfterClass
	    public static void setup() {
	        Reporter.loadXMLConfig(new File("src/test/resources/extent-config.xml"));
	        Reporter.setSystemInfo("user", System.getProperty("user.name"));
	        Reporter.setTestRunnerOutput("Property Management");
	    }
	
}