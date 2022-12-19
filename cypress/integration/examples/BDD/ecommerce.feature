Feature: End To end Ecommarce Validation

application Validation


    Scenario: Ecommarce Product delivary
    Given  I open Ecommarce page
    When  I add item to cart 
    And   validate the total price
    Then   select country submit and verify thank you
    
 
    Scenario: Filling the form to shop
    Given   I open Ecommarce page
    When     I fill the form
    Then     Validate the forms behaviour select the shop page
    