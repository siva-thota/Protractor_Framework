Feature: To check if the user is able to login

  Scenario: Test Scenario
    Given I am on the login page
    When I enter the username and password
    When I click on the login button
    Then I should be directed to the home page
    Then I should click on logout


    Scenario:
