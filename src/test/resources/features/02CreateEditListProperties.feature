@PropertyActions @Regression
Feature: Verify different actions like Add/list in

@Verify_Add_new_page_displayed 
Scenario Outline: Verify if the user is able to create and edit the property
Given the user open the Easy property Management application in <Browser>
When the user clicks Add New Button
Then Add New page should be displayed
Examples:
|Browser|
|Firefox|


  @ListProperty
  Scenario: Verify if all the properties are listed in GUI
    Given get the list of property details from API
    When user open the Easy property Management application
    Then All the properties should be displayed

  @AddProperty @API
  Scenario Outline: User should able to add new properties via API
    Given we submit <count> properties by API
    Then request should be posted sucessfully

    Examples: 
      | count |
      |     2 |

  @AddDuplicateProperty @API
  Scenario: User should not create duplicate property
    Given take a property which already exists
    When the user post a  duplicate property via API
    Then request should not be posted

  @AddPropertywith @stress
  Scenario Outline: Validate if user is able to create new property, if the application is preloaded with large volume of property details
    Given the system contains <count> properties
    When user open the Easy property Management application
    And the user clicks Add New Button
    When the user enters the unique property name and address
    And Click Ok button
    Then the property should be created

    Examples: 
      | count |
      |    10 |
