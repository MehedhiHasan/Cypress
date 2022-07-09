/// <reference types="cypress" />
describe('example to-do app', function() {
  it('Navigates to google search and search for a car and then get search number from result page',() =>{
    let cars = [];
    cars.push('BMW');
    cars.push('Mercedes');
    cars.push('Audi');

    for (let i = 0; i < cars.length; i++) {
      cy.visit('https://www.google.com');
      cy.xpath('//*[@name="q"]',{timeout:7000}).type(cars[i]);
      cy.xpath('//*[@name="q"]',{timeout:7000}).type("{enter}");
      cy.xpath('//div[@id="result-stats"]').then(($searchResult) => {
        const text = $searchResult.text();
        //cy.addContext("Search result is " + text);
        //cy.log("Search result is " + text);
        const arrayResult = text.split(' ');
        cy.log("Search number for " + cars[i] + " is " + arrayResult[1]);
        cy.addContext("Search number for " + cars[i] + " is " + arrayResult[1]);
      })//end of then
    }//end of loop
  })//end of it

  /*
  it('Submits the search field and prints out the search number',function(){
    cy.xpath('//*[@name="q"]',{timeout:7000}).type("{enter}");
    cy.xpath('//div[@id="result-stats"]').then(($searchResult) => {
      const text = $searchResult.text();
      cy.addContext("Search result is " + text);
      cy.log("Log-Search result is " + text);
      const arrayResult = text.split(' ');
      cy.addContext("Search number is " + arrayResult[1]);
    })//end of should
  })//end of it 2
  */
})//end of describe
