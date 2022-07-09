///<reference types="cypress" />
describe('e2e test on weightWatcher',function() {
  it('navigate to weight watcher,send zip code, capture name', () => {
    //define a array with zip code
    let zipCode = [];
    zipCode.push('11214');
    zipCode.push('10472');
    zipCode.push('10009');

    //create a for loop for iteration over the array multiple times and send values to weightWatcher
    for (let i = 0; i < zipCode.length; i++) {
    //navigate to weightWatcher
      cy.visit('https://www.weightwatchers.com');
    // click on find a workshop button using eg() and click method
      cy.xpath('//*[text()="Find a Workshop"]', { timeout: 4000 }).eq(0).click({ force: true });
    // click on location search button
      cy.xpath('//*[@id="location-search"]', { timeout: 4000 }).click({ force: true });
    //send zip code using array
      cy.xpath('//*[@id="location-search"]', { timeout: 4000 }).type(zipCode[i]);
    // click on search button
      cy.xpath('//*[@id="location-search-cta"]', { timeout: 4000 }).click({ force: true });
    // get the name of the first result storing in a variable using "then" method
      cy.xpath('//*[@id="location-1252589"]').eq(0).then(($searchResult) => {
        const textResult = $searchResult.text();
      // print out the result on log
      cy.log(textResult);
      // print out the result for html report
      cy.addContext(textResult);
      // click on the first result
        cy.xpath('//*[@class="linkContainer-1NkqM"]', { timeout: 4000 }).eq(0).click({ force: true });
    })//end of then
    // scroll to bottom 200 pixel
    cy.scrollTo(0, 200);
    // click on the schedule chart and print them using then method
    cy.xpath('//*[@id="studioWorkshopSchedule"]').then(($searchResult2) => {
        const textResult2 = $searchResult2.text();
        cy.log(textResult2);
        cy.addContext(textResult2);
      })//end of then
    }//end of loop
  })// end of it
})// end of describe


// describe as a end to end test, and i can use it method for multiple test 
// cy.visit("https://www.google.com"), cy.xpath("//*[@id ='name']",{timeout: 4000}).eq(0).click{(force:true)}
// cy.xpath("asdf", {timeout:4000}).eq(0).then{($result)} =>{
//const result2 = result.text();
//cy.log(result2)
//} cy.log// cy.addContext()