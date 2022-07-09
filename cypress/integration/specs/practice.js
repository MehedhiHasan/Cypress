///<reference types="cypress" />
describe('practice',function() {
  it('navigate to google', () => {
    
    
  let car = [];
    car.push('BMW');
    car.push('Tesla');
    for (let i = 0; i < car.length; i++){
      cy.visit('https://www.google.com');
      cy.xpath('//*[@name="q"]', { timeout: 4000 }).type("hello");
      cy.xpath('//*[@name="q"]', { timeout: 4000 }).type("{enter}");
      cy.xpath('//div[@id="result-stats"]').then(($searchResult) => {
        const textResult = $searchResult.text();
        cy.log(textResult);
        cy.addContext(textResult);


      })//end of then
    
     }// end of loop
  })// end of it
})// end of describe