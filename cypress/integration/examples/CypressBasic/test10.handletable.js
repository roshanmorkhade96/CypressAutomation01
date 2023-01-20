
describe('this is my first test suite',function(){
    it('this is my first test',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('tr td:nth-child(2)').each(($e1,index,$lis) => {
           const Text=$e1.text();
           if(Text.includes('Python ')){
            cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                const priceText=price.text();
              expect(priceText).to.equal('25');
            })

           }

        })

    })
})