@Stress
Feature: Preload Property details to do stress testing

@StressTestwithLargeData
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
