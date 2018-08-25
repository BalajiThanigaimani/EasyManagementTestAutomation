$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("01PropertyWorflowManagement.feature");
formatter.feature({
  "line": 2,
  "name": "To validate the E2E Workflows flows for Property Management",
  "description": "",
  "id": "to-validate-the-e2e-workflows-flows-for-property-management",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@PropertyWorkFlowManagement"
    },
    {
      "line": 1,
      "name": "@E2E"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Verify if the user is able to create and edit the property",
  "description": "",
  "id": "to-validate-the-e2e-workflows-flows-for-property-management;verify-if-the-user-is-able-to-create-and-edit-the-property",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@List_Create_Edit_Properties"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user open the Easy property Management application in \u003cBrowser\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user clicks Add New Button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user enters the unique property name and address",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click Ok button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the property should be created",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the user click the Edit button for the created property",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Edit New page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "the user enters the updated property name and address",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Click Ok button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the property should be updated",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "to-validate-the-e2e-workflows-flows-for-property-management;verify-if-the-user-is-able-to-create-and-edit-the-property;",
  "rows": [
    {
      "cells": [
        "Browser"
      ],
      "line": 17,
      "id": "to-validate-the-e2e-workflows-flows-for-property-management;verify-if-the-user-is-able-to-create-and-edit-the-property;;1"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 18,
      "id": "to-validate-the-e2e-workflows-flows-for-property-management;verify-if-the-user-is-able-to-create-and-edit-the-property;;2"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 19,
      "id": "to-validate-the-e2e-workflows-flows-for-property-management;verify-if-the-user-is-able-to-create-and-edit-the-property;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 156522,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify if the user is able to create and edit the property",
  "description": "",
  "id": "to-validate-the-e2e-workflows-flows-for-property-management;verify-if-the-user-is-able-to-create-and-edit-the-property;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@E2E"
    },
    {
      "line": 1,
      "name": "@PropertyWorkFlowManagement"
    },
    {
      "line": 4,
      "name": "@List_Create_Edit_Properties"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user open the Easy property Management application in Firefox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user clicks Add New Button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user enters the unique property name and address",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click Ok button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the property should be created",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the user click the Edit button for the created property",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Edit New page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "the user enters the updated property name and address",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Click Ok button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the property should be updated",
  "keyword": "Then "
});
formatter.match({
  "location": "PropertyWorkflowmanagement.the_user_open_the_Easy_property_Management_application_in_Firefox()"
});
formatter.result({
  "duration": 12180510492,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.the_user_clicks_Add_New_Button()"
});
formatter.result({
  "duration": 306734920,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.the_user_enters_the_unique_property_name_and_address()"
});
formatter.result({
  "duration": 165024687,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.click_Ok_button()"
});
formatter.result({
  "duration": 1371084126,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.the_property_should_be_created()"
});
formatter.result({
  "duration": 263630318,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.the_user_click_the_Edit_button_for_the_created_property()"
});
formatter.result({
  "duration": 254994259,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.edit_New_page_should_be_displayed()"
});
formatter.result({
  "duration": 17104906,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.the_user_enters_the_updated_property_name_and_address()"
});
formatter.result({
  "duration": 229314448,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.click_Ok_button()"
});
formatter.result({
  "duration": 1320420727,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.the_property_should_be_updated()"
});
formatter.result({
  "duration": 227135120,
  "status": "passed"
});
formatter.after({
  "duration": 2936489425,
  "status": "passed"
});
formatter.before({
  "duration": 127441,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify if the user is able to create and edit the property",
  "description": "",
  "id": "to-validate-the-e2e-workflows-flows-for-property-management;verify-if-the-user-is-able-to-create-and-edit-the-property;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@E2E"
    },
    {
      "line": 1,
      "name": "@PropertyWorkFlowManagement"
    },
    {
      "line": 4,
      "name": "@List_Create_Edit_Properties"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user open the Easy property Management application in Chrome",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user clicks Add New Button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user enters the unique property name and address",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click Ok button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the property should be created",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the user click the Edit button for the created property",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Edit New page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "the user enters the updated property name and address",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Click Ok button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the property should be updated",
  "keyword": "Then "
});
formatter.match({
  "location": "PropertyWorkflowmanagement.the_user_open_the_Easy_property_Management_application_in_Chrome()"
});
formatter.result({
  "duration": 5548028833,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.the_user_clicks_Add_New_Button()"
});
formatter.result({
  "duration": 138814156,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.the_user_enters_the_unique_property_name_and_address()"
});
formatter.result({
  "duration": 367709502,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.click_Ok_button()"
});
formatter.result({
  "duration": 1176369510,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.the_property_should_be_created()"
});
formatter.result({
  "duration": 392941986,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.the_user_click_the_Edit_button_for_the_created_property()"
});
formatter.result({
  "duration": 71912707,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.edit_New_page_should_be_displayed()"
});
formatter.result({
  "duration": 18366487,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.the_user_enters_the_updated_property_name_and_address()"
});
formatter.result({
  "duration": 391938708,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.click_Ok_button()"
});
formatter.result({
  "duration": 1138511804,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.the_property_should_be_updated()"
});
formatter.result({
  "duration": 397313900,
  "status": "passed"
});
formatter.after({
  "duration": 742732329,
  "status": "passed"
});
formatter.before({
  "duration": 48325,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify if the user does not create the property if the cancel is selected in Add new page",
  "description": "",
  "id": "to-validate-the-e2e-workflows-flows-for-property-management;verify-if-the-user-does-not-create-the-property-if-the-cancel-is-selected-in-add-new-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@CancelFunctionality"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "the user open the Easy property Management application",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "the user clicks Add New Button",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "the user enters the  property name and address",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click Cancel button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "the property should not be created",
  "keyword": "Then "
});
formatter.match({
  "location": "PropertyWorkflowmanagement.the_user_open_the_Easy_property_Management_application()"
});
formatter.result({
  "duration": 11041447013,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.the_user_clicks_Add_New_Button()"
});
formatter.result({
  "duration": 316976395,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.the_user_enters_the_property_name_and_address()"
});
formatter.result({
  "duration": 238086502,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.click_Cancel_button()"
});
formatter.result({
  "duration": 1335472462,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.the_property_should_not_be_created()"
});
formatter.result({
  "duration": 10118105404,
  "status": "passed"
});
formatter.after({
  "duration": 1830317726,
  "status": "passed"
});
formatter.uri("02CreateEditListProperties.feature");
formatter.feature({
  "line": 2,
  "name": "Verify different actions like Add/list in",
  "description": "",
  "id": "verify-different-actions-like-add/list-in",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@PropertyActions"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Verify if the user is able to create and edit the property",
  "description": "",
  "id": "verify-different-actions-like-add/list-in;verify-if-the-user-is-able-to-create-and-edit-the-property",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Verify_Add_new_page_displayed"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user open the Easy property Management application in \u003cBrowser\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user clicks Add New Button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Add New page should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "verify-different-actions-like-add/list-in;verify-if-the-user-is-able-to-create-and-edit-the-property;",
  "rows": [
    {
      "cells": [
        "Browser"
      ],
      "line": 10,
      "id": "verify-different-actions-like-add/list-in;verify-if-the-user-is-able-to-create-and-edit-the-property;;1"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 11,
      "id": "verify-different-actions-like-add/list-in;verify-if-the-user-is-able-to-create-and-edit-the-property;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 90663,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify if the user is able to create and edit the property",
  "description": "",
  "id": "verify-different-actions-like-add/list-in;verify-if-the-user-is-able-to-create-and-edit-the-property;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@PropertyActions"
    },
    {
      "line": 4,
      "name": "@Verify_Add_new_page_displayed"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user open the Easy property Management application in Firefox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user clicks Add New Button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Add New page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "PropertyWorkflowmanagement.the_user_open_the_Easy_property_Management_application_in_Firefox()"
});
formatter.result({
  "duration": 11149943442,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.the_user_clicks_Add_New_Button()"
});
formatter.result({
  "duration": 285075492,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.add_New_page_should_be_displayed()"
});
formatter.result({
  "duration": 10177960386,
  "error_message": "junit.framework.AssertionFailedError: Unable to locate element: //div[text()\u003d\u0027Add Property\u0027]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027LIVINGLEGEND\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 61.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:headless: false, moz:processID: 10436, moz:profile: C:\\Users\\Balaji\\AppData\\Loc..., moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: XP, platformName: XP, platformVersion: 6.3, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: 485eea1b-fc96-434a-86cb-b20cd0342220\n*** Element info: {Using\u003dxpath, value\u003d//div[text()\u003d\u0027Add Property\u0027]}\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat stepdefnition.PropertyWorkflowmanagement.add_New_page_should_be_displayed(PropertyWorkflowmanagement.java:85)\r\n\tat ✽.Then Add New page should be displayed(02CreateEditListProperties.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1995675983,
  "status": "passed"
});
formatter.before({
  "duration": 46187,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify if all the properties are listed in GUI",
  "description": "",
  "id": "verify-different-actions-like-add/list-in;verify-if-all-the-properties-are-listed-in-gui",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@ListProperty"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "get the list of property details from API",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user open the Easy property Management application",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "All the properties should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Edit_List.get_the_list_of_property_details_from_API()"
});
formatter.result({
  "duration": 2345002748,
  "status": "passed"
});
formatter.match({
  "location": "Add_Edit_List.user_open_the_Easy_property_Management_application()"
});
formatter.result({
  "duration": 9297829866,
  "status": "passed"
});
formatter.match({
  "location": "Add_Edit_List.all_the_properties_should_be_displayed()"
});
formatter.result({
  "duration": 2479037862,
  "status": "passed"
});
formatter.after({
  "duration": 48753,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "User should able to add new properties via API",
  "description": "",
  "id": "verify-different-actions-like-add/list-in;user-should-able-to-add-new-properties-via-api",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@AddProperty"
    },
    {
      "line": 20,
      "name": "@API"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "we submit \u003ccount\u003e properties by API",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "request should be posted sucessfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "verify-different-actions-like-add/list-in;user-should-able-to-add-new-properties-via-api;",
  "rows": [
    {
      "cells": [
        "count"
      ],
      "line": 26,
      "id": "verify-different-actions-like-add/list-in;user-should-able-to-add-new-properties-via-api;;1"
    },
    {
      "cells": [
        "2"
      ],
      "line": 27,
      "id": "verify-different-actions-like-add/list-in;user-should-able-to-add-new-properties-via-api;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 88525,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User should able to add new properties via API",
  "description": "",
  "id": "verify-different-actions-like-add/list-in;user-should-able-to-add-new-properties-via-api;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@PropertyActions"
    },
    {
      "line": 20,
      "name": "@API"
    },
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 20,
      "name": "@AddProperty"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "we submit 2 properties by API",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "request should be posted sucessfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 10
    }
  ],
  "location": "Add_Edit_List.we_submit_properties_by_API(int)"
});
formatter.result({
  "duration": 365932598,
  "status": "passed"
});
formatter.match({
  "location": "Add_Edit_List.request_should_be_posted_sucessfully()"
});
formatter.result({
  "duration": 119497848,
  "status": "passed"
});
formatter.after({
  "duration": 20955,
  "status": "passed"
});
formatter.before({
  "duration": 27797,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "User should not create duplicate property",
  "description": "",
  "id": "verify-different-actions-like-add/list-in;user-should-not-create-duplicate-property",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@AddDuplicateProperty"
    },
    {
      "line": 29,
      "name": "@API"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "take a property which already exists",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "the user post a  duplicate property via API",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "request should not be posted",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Edit_List.take_a_property_which_already_exists()"
});
formatter.result({
  "duration": 114556726,
  "status": "passed"
});
formatter.match({
  "location": "Add_Edit_List.the_user_post_a_duplicate_property_via_API()"
});
formatter.result({
  "duration": 18976751,
  "status": "passed"
});
formatter.match({
  "location": "Add_Edit_List.request_should_not_be_posted()"
});
formatter.result({
  "duration": 61129394,
  "error_message": "junit.framework.AssertionFailedError: expected:\u003cfalse\u003e but was:\u003ctrue\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:174)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:181)\r\n\tat stepdefnition.Add_Edit_List.request_should_not_be_posted(Add_Edit_List.java:106)\r\n\tat ✽.Then request should not be posted(02CreateEditListProperties.feature:33)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 18389,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 36,
  "name": "Validate if user is able to create new property, if the application is preloaded with large volume of property details",
  "description": "",
  "id": "verify-different-actions-like-add/list-in;validate-if-user-is-able-to-create-new-property,-if-the-application-is-preloaded-with-large-volume-of-property-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@AddPropertywith"
    },
    {
      "line": 35,
      "name": "@stress"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "the system contains \u003ccount\u003e properties",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "user open the Easy property Management application",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "the user clicks Add New Button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "the user enters the unique property name and address",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "Click Ok button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "the property should be created",
  "keyword": "Then "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "verify-different-actions-like-add/list-in;validate-if-user-is-able-to-create-new-property,-if-the-application-is-preloaded-with-large-volume-of-property-details;",
  "rows": [
    {
      "cells": [
        "count"
      ],
      "line": 45,
      "id": "verify-different-actions-like-add/list-in;validate-if-user-is-able-to-create-new-property,-if-the-application-is-preloaded-with-large-volume-of-property-details;;1"
    },
    {
      "cells": [
        "10"
      ],
      "line": 46,
      "id": "verify-different-actions-like-add/list-in;validate-if-user-is-able-to-create-new-property,-if-the-application-is-preloaded-with-large-volume-of-property-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 29509,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Validate if user is able to create new property, if the application is preloaded with large volume of property details",
  "description": "",
  "id": "verify-different-actions-like-add/list-in;validate-if-user-is-able-to-create-new-property,-if-the-application-is-preloaded-with-large-volume-of-property-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@stress"
    },
    {
      "line": 1,
      "name": "@PropertyActions"
    },
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 35,
      "name": "@AddPropertywith"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "the system contains 10 properties",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "user open the Easy property Management application",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "the user clicks Add New Button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "the user enters the unique property name and address",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "Click Ok button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "the property should be created",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 20
    }
  ],
  "location": "Add_Edit_List.the_system_contains_properties(int)"
});
formatter.result({
  "duration": 180466871,
  "status": "passed"
});
formatter.match({
  "location": "Add_Edit_List.user_open_the_Easy_property_Management_application()"
});
formatter.result({
  "duration": 10283628736,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.the_user_clicks_Add_New_Button()"
});
formatter.result({
  "duration": 297029296,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.the_user_enters_the_unique_property_name_and_address()"
});
formatter.result({
  "duration": 167634235,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.click_Ok_button()"
});
formatter.result({
  "duration": 1430398125,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.the_property_should_be_created()"
});
formatter.result({
  "duration": 10148401319,
  "error_message": "junit.framework.AssertionFailedError: Unable to locate element: //td[contains(text(),\u0027TestAutomation_20180824222629568\u0027)]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027LIVINGLEGEND\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 61.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:headless: false, moz:processID: 11356, moz:profile: C:\\Users\\Balaji\\AppData\\Loc..., moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: XP, platformName: XP, platformVersion: 6.3, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: 8b3f6b42-57cc-4d38-a498-4f9246a8ca15\n*** Element info: {Using\u003dxpath, value\u003d//td[contains(text(),\u0027TestAutomation_20180824222629568\u0027)]}\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat stepdefnition.PropertyWorkflowmanagement.the_property_should_be_created(PropertyWorkflowmanagement.java:122)\r\n\tat ✽.Then the property should be created(02CreateEditListProperties.feature:42)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1920521225,
  "status": "passed"
});
formatter.uri("03StressTesting.feature");
formatter.feature({
  "line": 2,
  "name": "Verify different actions like Add/list in",
  "description": "",
  "id": "verify-different-actions-like-add/list-in",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Stress"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Validate if user is able to create new property, if the application is preloaded with large volume of property details",
  "description": "",
  "id": "verify-different-actions-like-add/list-in;validate-if-user-is-able-to-create-new-property,-if-the-application-is-preloaded-with-large-volume-of-property-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@StressTestwithLargeData"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the system contains \u003ccount\u003e properties",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user open the Easy property Management application",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user clicks Add New Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the user enters the unique property name and address",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Click Ok button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the property should be created",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "verify-different-actions-like-add/list-in;validate-if-user-is-able-to-create-new-property,-if-the-application-is-preloaded-with-large-volume-of-property-details;",
  "rows": [
    {
      "cells": [
        "count"
      ],
      "line": 14,
      "id": "verify-different-actions-like-add/list-in;validate-if-user-is-able-to-create-new-property,-if-the-application-is-preloaded-with-large-volume-of-property-details;;1"
    },
    {
      "cells": [
        "10"
      ],
      "line": 15,
      "id": "verify-different-actions-like-add/list-in;validate-if-user-is-able-to-create-new-property,-if-the-application-is-preloaded-with-large-volume-of-property-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 70135,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Validate if user is able to create new property, if the application is preloaded with large volume of property details",
  "description": "",
  "id": "verify-different-actions-like-add/list-in;validate-if-user-is-able-to-create-new-property,-if-the-application-is-preloaded-with-large-volume-of-property-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@StressTestwithLargeData"
    },
    {
      "line": 1,
      "name": "@Stress"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the system contains 10 properties",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user open the Easy property Management application",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user clicks Add New Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the user enters the unique property name and address",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Click Ok button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the property should be created",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 20
    }
  ],
  "location": "Add_Edit_List.the_system_contains_properties(int)"
});
formatter.result({
  "duration": 116931492,
  "status": "passed"
});
formatter.match({
  "location": "Add_Edit_List.user_open_the_Easy_property_Management_application()"
});
formatter.result({
  "duration": 10761706513,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.the_user_clicks_Add_New_Button()"
});
formatter.result({
  "duration": 357491976,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.the_user_enters_the_unique_property_name_and_address()"
});
formatter.result({
  "duration": 223715165,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.click_Ok_button()"
});
formatter.result({
  "duration": 1330751154,
  "status": "passed"
});
formatter.match({
  "location": "PropertyWorkflowmanagement.the_property_should_be_created()"
});
formatter.result({
  "duration": 10171839364,
  "error_message": "junit.framework.AssertionFailedError: Unable to locate element: //td[contains(text(),\u0027TestAutomation_20180824222654504\u0027)]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027LIVINGLEGEND\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 61.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:headless: false, moz:processID: 11496, moz:profile: C:\\Users\\Balaji\\AppData\\Loc..., moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: XP, platformName: XP, platformVersion: 6.3, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: 1ee4a9d5-7df8-4683-959a-108f5cd95bc7\n*** Element info: {Using\u003dxpath, value\u003d//td[contains(text(),\u0027TestAutomation_20180824222654504\u0027)]}\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat stepdefnition.PropertyWorkflowmanagement.the_property_should_be_created(PropertyWorkflowmanagement.java:122)\r\n\tat ✽.Then the property should be created(03StressTesting.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1714717951,
  "status": "passed"
});
});