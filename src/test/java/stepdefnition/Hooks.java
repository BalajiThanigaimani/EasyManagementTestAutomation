package stepdefnition;

import Core.Utils.GlobalCore;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	@Before
	public void beforeScenario() {
	}

	@After
	public void afterScenario() {
		if (GlobalCore.driver != null)
			GlobalCore.driver.quit();
	}
}
