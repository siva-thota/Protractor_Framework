Feature: To invite a user to register on the portal

  Scenario:
    Given Login to the portal as "admin"
    When user navigates to "Users>Invite new user"
    When user enters firstname as "sriram", lastname as "kancharla",  role as "Supervisor",  mobile number as "07424383810",  email as "srirama.kancharla@barclaycard.co.uk" and confirms
    When user clicks on Send Invite button
    Then user should see a success message