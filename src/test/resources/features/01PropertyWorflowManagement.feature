@PropertyWorkFlowManagement   @E2E
Feature: To validate the E2E Workflows flows for Property Management

@List_Create_Edit_Properties 
Scenario Outline: Verify if the user is able to create and edit the property
Given the user open the Easy property Management application in <Browser>
When the user clicks Add New Button
When the user enters the unique property name and address
And Click Ok button
Then the property should be created
When the user click the Edit button for the created property
Then Edit New page should be displayed
When the user enters the updated property name and address
And Click Ok button
Then the property should be updated
Examples:
|Browser|
|Firefox|
|Chrome|

@CancelFunctionality
Scenario: Verify if the user does not create the property if the cancel is selected in Add new page
Given the user open the Easy property Management application 
When the user clicks Add New Button
And the user enters the  property name and address
And Click Cancel button
Then the property should not be created    